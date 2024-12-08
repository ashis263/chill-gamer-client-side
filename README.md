# Project: Chill Gamer
Chill Gamer is a responsive single page application for reviewing games. This project was developed using mongoDB, reactJS, expressJS and node. In this web application users can see other users reviews of games. They can also add and update reviews by register and log in to application.

## Key features of this project
-  Users can see other user's added reviews while browsing the application, they can see highly rated games, recently reviewed games on the homepage.

-  Users need to register or log in to their account to explore the other features of the application. The authentication system was developed using the google firebase authentication system. 

-  After successful registration user will be logged in and user data except the password will be saved on the mongodb database. For previously registered users, after login the login timestamp will be saved to database. From navbar user can easily logout from the application. Logged on users can see their photo on the right side of the navbar. On hovering that photo, the user's name will be shown on a tooltip.

-  Logged in users will be add new reviews from the add review page by navigating by clicking the navlink. After successfully adding, they will be redirected to my reviews page, where they can see, update and delete the reviews added by them. Clicking the edit button/pen will open a modal which will allow user to update that review. Clicking on delete icon will open a confirmation modal, if confirmed the review will be deleted. On adding, updating and deleting data will be updated on the database.

- Every user can browse all reviews page. From that page when they navigates to the reviewdetails page, if the user is logged in then he/she can add that review to his/her watchlist. They can see all the reviews they watchlisted from the my watchlist page. 

- User can toggle between dark and light theme by clicking on the sun/moon icon on navbar.

## Live Links for this project
- [On Firebase](https://chill-gamer-7df90.web.app/)
- [On Netlify](https://chill-gamer-ashis263.netlify.app/)
- [On Surge](https://chill-gamer-ashis263.surge.sh/)
