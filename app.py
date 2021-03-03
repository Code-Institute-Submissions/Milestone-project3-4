import os
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
if os.path.exists("env.py"):
    import env


app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)


# Home page


@app.route("/")
def index():
    return render_template(
        "index.html", header="Family Recipes",
        title="Family recipes, homepage")


# Add recipe


@app.route("/add_recipie", methods=["GET", "POST"])
def add_recipie():

    categories = mongo.db.categories.find().sort("category", 1)

    if request.method == "POST":
        recipie = {
            "dish": request.form.get("dish"),
            "ingredients": request.form.getlist("ingredient"),
            "preparations": request.form.getlist("add-prep"),
            "additional_comments": request.form.get("additional"),
            "category": request.form.get("category"),
            "created_by": session["user"]
        }

        mongo.db.recipies.insert(recipie)
        flash("Recipie added")
    return render_template(
        "add_recipie.html", categories=categories,
        header="Add Recipe", title="Family recipes, add recipe")


# All recipes


@app.route("/all_recipies")
def all_recipies():
    categories = mongo.db.categories.find().sort("category", 1)
    recipes = mongo.db.recipies.find().sort("category", 1)
    return render_template(
        "all_recipies.html", recipes=recipes,
        header="All Recipes", categories=categories,
        title="Family recipes, all recipes")


# Categories


@app.route("/categories/<category>")
def categories(category):
    food_category = mongo.db.recipies.find({"category": category})
    return render_template(
        "categories.html", food_category=food_category,
        header=category, title="Family recipes, categories")


# Users page


@app.route("/profile/<username>", methods=["GET", "POST"])
def profile(username):
    username = mongo.db.users.find_one(
        {"username": session["user"]})["username"]

    users_recipes = mongo.db.recipies.find({"created_by": session["user"]})
    return render_template(
        "profile.html", username=username, users_recipes=users_recipes,
        header=session["user"]+"'s recipes",
        title="Family recipes, users page")


# Edit recipe


@app.route("/edit_recipe/<recipe_id>", methods=["GET", "POST"])
def edit_recipe(recipe_id):
    if request.method == "POST":
        updated_recipe = {
            "dish": request.form.get("dish"),
            "ingredients": request.form.getlist("ingredient"),
            "preparations": request.form.getlist("add-prep"),
            "additional_comments": request.form.get("additional"),
            "category": request.form.get("category"),
            "created_by": session["user"]
        }

        mongo.db.recipies.update({"_id": ObjectId(recipe_id)}, updated_recipe)
        flash("Recipe updated")
        return redirect(url_for("profile", username=session["user"]))

    recipe = mongo.db.recipies.find_one({"_id": ObjectId(recipe_id)})
    categories = mongo.db.categories.find().sort("category", 1)
    return render_template(
        "edit_recipe.html", recipe=recipe, categories=categories,
        header="Edit Recipe", title="Family recipes, edit")


# Delete recipe


@app.route("/delete_recipe/<recipe_id>")
def delete_recipe(recipe_id):
    mongo.db.recipies.remove({"_id": ObjectId(recipe_id)})
    flash("Recipe Deleted")
    return redirect(url_for("profile", username=session["user"]))


# login


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            if check_password_hash(
                    existing_user["password"], request.form.get("password")):
                session["user"] = request.form.get("username").lower()
                flash("Welcome, {}".format(request.form.get("username")))
                return redirect(url_for("profile", username=session["user"]))
            else:
                flash("Incorrect Username and/or Password")
                return redirect(url_for("login"))

        else:
            flash("Incorrect Username and/or Password")
            return redirect(url_for("login"))

    return render_template("login.html", header="Login",
                           title="Family recipes, login")


# Register


@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})
        if existing_user:
            flash("Username taken")
            return redirect(url_for("register"))
        register = {
            "username": request.form.get("username").lower(),
            "password": generate_password_hash(request.form.get("password"))
        }

        mongo.db.users.insert_one(register)

        session["user"] = request.form.get("username").lower()
        flash("You are registered!")
        return redirect(url_for("profile", username=session["user"]))
    return render_template("register.html", header="Register",
                           title="Family recipes, register")


# logout


@app.route("/logout")
def logout():
    flash("You have been logged out")
    session.pop("user")
    return redirect(url_for("login"))


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
