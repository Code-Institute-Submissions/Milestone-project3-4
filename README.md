# Flask family recipe app

## TOC

## UX

## Features

### Existing features

### Features left to implement

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
  * When pressing the phone and insta, those should appear in new windows

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

**Result**: As expected.

* Log in
  * It shouldn't be possible to get in without entering the correct credentials
  * If entering the wrong credentials a flashmessage will show up
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
  * When the user pushes the plus sign, a new add ingredient or preparation step field appears
  * When clicking the minus, the add ingredient/add preparation step is removed

**Result**: As expected.

* Edit recipe
  * The current name of the dish and the additional comments appears
  * If updating, the user has to enter all the ingredients again, with the new ingredients
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
  * All recipes entered the user should appear
  * When pressing an accordion it should open and reveal the recipe
  * When the accordion opens the + should change to -
  * When pressing the accordion again the accordion should close and the - change to +
  * When pressing the edit button, the edit recipe page should appear
  * When pressing the delete button, the recipe should be removed

**Result**: As expected.

### validation

* [HTML](https://validator.w3.org/#validate_by_input)
  * There are both errors and warnings but all of them are because i use the Flask framework

























## Deployment

## Credits

### Content

### Media

### Acknowledgements
