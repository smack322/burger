# burger

Eat-Da-Burger is a full stack app that utilizes the following technologies: MySQL, Node, Express, Handlebars, and a homemade ORM. There's an input box where the user can add a new burger which will get populated in the top section. Once the user clicks the devour it button, the burger will move down with the other eaten burgers. This app solves the issue of remembering what burgers you have tried by storing them in a database and organizing them based on consumption.

![](burger.gif)


Handlebars was used to render the front end and to check if the burger was devoured (or not) and to loop through all of the burgers within the database. The ORM was used to write the queries and to convert them between the database and the codebase. Express was used as the server to host the site and NodeJS was used to code the logic for posting and getting data from the front of the app to the back of the app. 

Check it out from your browser https://scottsburgerapp.herokuapp.com/
