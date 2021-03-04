# Flask family recipe app

## UX

### User stories

* My mum
  * She always asks me about recipes so this might be very convenient for her
  * She is interested in sharing the recipes she inherited from her mum and grandmother
  * In this way she can once and for all make sure that we all know how to cook the christmas food properly, that is, how it has always been cooked
* My dad
  * He is not much of a chef really. He needs some advice now and then. He often asks how to do things. Now he can just log in here
* Me
  * I want to have easy access to the christmas food for instance. I always asks my mum
  * I want a place to store all my best recipes and i like to share them with others
* My brother-in-law
  * He is very good at baking and he likes to share his recipes and he also wants to learn vegetarian cooking. Here he can do both

### Wireframes for mobile, tablet/desktop and database relations diagram

![wireframes_mobile](assets/images/wireframes_mobile.PNG)

![wireframes_tablet_desktop](assets/images/wireframes.PNG)

![Database relations](assets/images/db_relations.PNG)

## Features

### Existing features

The users can share and read recipes. The users get their own pages where they can edit or delete the recipes they uploaded themselves. In the all recipes page all recipes are visible to those logged in, there is also a filter functionality.

### Features left to implement

The edit function is not as i want it. I want to have a form with more control for the user. I want the user to be able to delete a specific line and also to insert lines in between lines. 

I also want to add the option to include images in the recipes.

The option to rate recipes with star rating would be cool.

I also want to learn how to give the user a "Are you sure you want to delete" message before deleting a recipe.

## Technologies used

* HTML 5
  * Used to create the structure of the website
* CSS 3
  * Used to style the pages
* Javascript ES6
  * Used to provide interactivity
* Python 3 
  * The backend language used
* Flask
  * The micro framework used to be able to use Python on the site
* Font Awsome
  * They provided the icons used in the project
* Google Fonts 
  * They provided the "Handlee" and "Roboto" fonts
* MongoDb
  * The database i use   

## Testing

### Manual testing

* The desktop menu
  * Test the navigation
  * Hover over the items to see a change of state
  * If logged in the user should se a different set of menu items

**Result**: As expected.

* The mobile menu
  * Click the hamburger icon and the menu should slide open from left to right
  * Test the navigation
  * If logged in the user should se a different set of menu items
  * Click the "x" and close the menu

**Result**: As expected.

* The footer
  * Test the navigation
  * If logged in the user should se a different set of menu items
  * When pressing the phone and instagram, those should appear in new windows

**Result**: As expected.

* Register
  * When hovering over the "Username" and "Password" fields, there should be a message telling the user what pattern is allowed
  * If clicking submit with an empty form, the user should get a message under the username field that is telling him/her what is required
  * If filling out only the username field and trying to submit, the user should also get a message like above but under the password field
  * It should not be possible to enter whitespaces
  * If the user enters a username and a password in the correct format, a flash message should display and the user should be redirected to the profile page
  * The title of the page should read "user's recipes"
  * In MongoDb there should be a new user in the "users" collection
  * Under the form there is a link that when clicked takes the user to the login page
  * If a username is taken, the user should get a flash message and be redirected to the form

**Result**: As expected.

* Log in
  * It shouldn't be possible to get in without entering the correct credentials
  * If entering the wrong credentials a flash message will show up
  * Both fields are required so if hovering over the fields when empty a message will show up
  * If trying to submit with empty field a message will show up
  * When logged in the user will be redirected to the profile page and a welcome flash message will show up
  * The page title should read "user's recipes"
  * Under the form there is a link that when clicked takes the user to the register page

**Result**: As expected.

* Log out
  * When pressing the log out button the user will be logged out
  * A flash message will show up
  * The user is being redirected to the login page

**Result**: As expected.

* Add recipe
  * The user fills in the form and pushes submit. Then a new recipe appears in MongoDB
  * When the user pushes the buttons on top, ingredient or preparation field appears or dissapears
  * All fields are required, so empty fields are not allowed

**Result**: As expected. It is however possible to use blankspaces only and submit a recipe.

* Edit recipe
  * The current recipe appears
  * Test the add and remove buttons
  * When pressing submit, the recipe is updated in MongoDb
  * Otherwise the form should work as the add recipe form

**Result**: As expected.

* All recipes
  * All recipes entered, by all users, should appear
  * When pressing an accordion it should open and reveal the recipe
  * When the accordion opens the + should change to -
  * When pressing the accordion again the accordion should close and the - change to +
  * Test the filter function

**Result**: As expected.

* My recipes
  * All recipes entered by the user should appear
  * When pressing an accordion it should open and reveal the recipe
  * When the accordion opens the + should change to -
  * When pressing the accordion again the accordion should close and the - change to +
  * When pressing the edit button, the edit recipe page should appear
  * When pressing the delete button, the recipe should be removed

**Result**: As expected.

### Validation

* [HTML validation with W3C Logo Markup Validation Service](https://validator.w3.org/#validate_by_input)
  * There are both errors and warnings but all of them are because i use the Flask framework

* [CSS validation with W3C css validation service](https://jigsaw.w3.org/css-validator/)
  * No errors

* [Javascript validation with JSHint](https://jshint.com/)
  * A missing semicolon. *Fixed that*
  * 6 undefined variables. *Fixed that*
  * Warnings: 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). *I remember from the last project that i don't have to worry about this*

* [Python pep8 validation using PEP8 online](http://pep8online.com/)
  * It told me some of my lines were to long. *Fixed that*

### Lighthouse

* Home
  * Performance 91
  * Accessibility 100
  * Best practices 79
  * SEO 84

* Add recipes
  * Performance 92
  * Accessibility 86
  * Best practices 79
  * SEO 87

* All recipes
  * Performance 94
  * Accessibility 100
  * Best practices 86
  * SEO 84

* Login
  * Performance 95
  * Accessibility 100
  * Best practices 79
  * SEO 76

* Register
  * Performance 95
  * Accessibility 100
  * Best practices 79
  * SEO 76

* Edit
  * Performance 91
  * Accessibility 81
  * Best practices 79
  * SEO 87

### On different browsers

#### Desktop

* Chrome
  * Looks fine.

* Firefox
  * Looks fine.

* Edge
  * Looks fine.

#### Mobile

* Safari
  * The flexbox gap doesn´t work here it seems. It said so on "can i use" but i tried just in case, i like the function. Changed to padding on mobile instead.

* Chrome
  * Same as above.

## Deployment

1. Tell Heroku what applications are needed and what dependencies there are
   1. pip3 freeze --local > requirements.txt

2. Create the Procfile
   1. echo web: python app.py > Procfile
   2. The Procfile might add a blank line at the bottom, and sometimes this can cause problems, so remove it

3. Go to heroku.com
   1. Click **new** to create a new app
   2. Choose a unique name for the app. Use dash or minus to separate words instead of space and only lowercase letters
   3. Select the region closest to you
   4. Click **create app**

4. Setup automatic deployment from our GitHub repository
   1. Make sure your GitHub profile is displayed, then add your repository name
   2. Click **search**
   3. Click to **connect**, but do not activate automatic deployment just yet

5. Click on the **settings** tab
   1. Click on **reveal config vars**
   2. The first variable is **IP**, with the value of 0.0.0.0
   3. Next, the **PORT**, which is 5000
   4. **SECRET_KEY**: Q7nT16ZJql
   5. **MONGO_URI**: mongodb+srv://chrpe30:testingpassword@myfirstcluster.dkuba.mongodb.net/recipieSite?retryWrites=true&w=majority
   6. **MONGO_DBNAME**: recipieSite

6. Make a push to GitHub
   1. the Procfile and the requirements file

7. Go back to the deploy tab
   1. Enable Automatic Deployment
   2. I've only got the main branch for the project, so click Deploy Branch
   3. Heroku will now receive the code from GitHub, and start building the app
   4. Click view to launch the app

### Bugs

I had some trouble with the background image. When i added new accordions, there was a zoom effect. The best solution i could come up with was setting background-repeat: repeat-y and for bigger screens where  have a max-width on the body adding background-size: *length* and background-position: center

I didn´t know i need different scripts for different pages. Now i know. I added a js function and all of a sudden my accordions didn´t open. I learned from this that if i run a script on every page, it will look for the same variables and if it´s not something that is on every page it will not find them and give an error.

## Credits

### Content

I got some help from my mentor and the tutor team. They are good at nodding me in the right direction when i need it

### Media

I found the images i use on [Pexels](https://www.pexels.com/sv-se/) 

The animated sidenav is from [w3s](https://www.w3schools.com/howto/howto_js_sidenav.asp)

### Acknowledgements

I was inspired to use accordions for the project by looking at the Mini project code institute videos
