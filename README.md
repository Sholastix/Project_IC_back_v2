# Project_IC_back_v2

Organizer for sports training (server api + database).

Allow to create your own exercises and combine them into workouts, which you can "pinned" to specific date in calendar 
(restriction exist: 1 workout on 1 date).  

Authorization and verification with 'jsonwebtoken', automatic hashing passwords with 'bcryptjs' implemented in this project.
All routes except registration, verification and authorization pages closed with middleware, access permitted only for authorized users. 

Application created using the following technologies:
____________________________________________________________________

        Back:       Node.js + Express.js.
        Database:   MongoDB + Mongoose.
____________________________________________________________________

1. Active MongoDB server's needed.

2. Rename file '.env.example' into '.env' and setup enviroment variables.

3. Download project from GIT, open it with code redactor and use following commands from terminal/console:

        3.1. npm install - needed modules installation;
        3.2. npm start - code start.

4. Available addresses (xxxx - connection port from .env):

        4.1. http://localhost:xxxx/signup - registration page.
             ATTENTION: after registration you'll get the digital code in code redactor's terminal/console. This code will be needed in verification process.
             Verification code type in model - NUMBER, in POSTMAN (or something similar) insert this code without quotes.

        4.2. http://localhost:xxxx/verification - verification page.
             ATTENTION: after verification you'll get the token in POSTMAN console, but that token not for access to closed routes - only for security of one-time email verification process. Don't copy it, you don't need it at all for application test.

        4.3. http://localhost:xxxx/signin - authorization page
             ATTENTION: after authorization you'll get the token in POSTMAN console. Don't forget to use this token for access to closed routes.
             In POSTMAN: choose tab "Authorization" -> choose type "Bearer Token" from dropdown menu -> insert token in appeared field -> now you can use closed route.

        4.4. 'USERS'
             http://localhost:xxxx/users/            - GET profile of specific user (by user ID from token).
             http://localhost:xxxx/users/delete/     - DELETE existed user's profile (by user ID from token).

        4.5. 'EXERCISES'
             http://localhost:xxxx/exercise/                         - GET exercises list of specific user (by user ID from token).
             http://localhost:xxxx/exercise/:exerciseID              - GET specific exercise (by exercise ID), which belongs to specific user.
             http://localhost:xxxx/exercise/create/                  - CREATE new exercises in a list of specific user.
             http://localhost:xxxx/exercise/update/:exerciseID       - UPDATE already existed exercise (by exercise ID) in a list of specific user.
             http://localhost:xxxx/exercise/delete/:exerciseID       - DELETE specific exercise from list of specific user.

        4.6. 'WORKOUT'
             http://localhost:xxxx/workout/                          - GET workout of specific user (by user ID from token).
             http://localhost:xxxx/workout/create/                   - CREATE new workouts in specific user's list (by user ID from token).
             http://localhost:xxxx/workout/update/:workoutID         - UPDATE already existed workout in a list of specific user.
             http://localhost:xxxx/workout/delete/:workoutID         - DELETE specific workout (by workout ID) from list of specific user.
