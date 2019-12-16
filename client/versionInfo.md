v1 -> 
done: 
- rough main page built

needs: 
- connect react
- connect db
- add functionality to buttons
- login functionality

v1.1
- adding redux

needs: 
- connect db
- add functionality to buttons
- login functionality
    - login page
    - connect to db
- can i connect to Automatic API using express req.headers?

completed:
- added redux store
- added searchbox functionality

v 1.2
goals: 
- adding reservation table
- organizing src folder


needs: 
- connect db -> db api is being built in 'loaner-api' project
- add functionality to buttons
- login functionality
    - login page
    - connect to db
- can i connect to Automatic API using express req.headers?

completed:
- refactored LoanerTable to include HeaderRow
- added reservation table
- sorted reservation array before loading into table


v 1.3
goals: 
- connect db -> db api is being built in 'loaner-api' project
- get navbar items into nav bar folder, out of loaner table folder

needs: 
- add functionality to buttons
- login functionality
    - login page
    - connect to db
- can i connect to Automatic API using express req.headers?

completed: 
- successfully imported reservations from db connected to loaner-api


NEXT STEPS

what's left?

- connect automatic API?

- create and wire up nav buttons
    -> check-out loaner
    -> check-in loaner

- click on loaner to see more info
    -> loaner card: automatic data, checkin / checkout buttons, trip data?

- add / de-fleet loaners
- polish reserve loaner form validation
- how do we want to delete reservation routes?
    -> all manually?
    -> delete at midnight of day of reservation -> send email that reservation is deleted?

- style app



CHECK-OUT FORM
    -> create nav button
    -> create form route
    -> link button to form
    -> create form (class-component)
    -> can i console log the data?  YES!!!!!
    ++++++++++++++++
    -> will need to figure out how LOANERS and TRIPS schemas interact in MONGO -> looking like trips are a subdocument within each loaner document.  in practice this means it will work like an array of objects within the Loaner Schema
    -> create routes to accept form data in DB
    -> test db accepting data with postman2
    ++++++++++++++++
    -> link up form with DB
    **you are here**->-> TEST!
    
    ---- Concerns: 
        
    -> How to delete reservations?
        - using code from material-ui
        - get rid of pagination?
        - delete button does not work... i can get the onClick function to fire, but how do let it know what row's checkbox is selected??????
        -> DONE

        -> new concern.  so should we delete reservation when vehicle checked out. or ask do you want to delete associated reservation???
            right now we can delete the reservation, but the "RESERVED" status next to the loaner remains.


    -> need validation to make sure nobody has checked out vehicle before trying to start new checkout process
    -> forms need styling, hell whole app needs styling
    https://github.com/mui-org/material-ui/tree/master/docs/src/pages/premium-themes/paperbase

    -> so 

    -> i'd like to enhance the app with material-ui components
        a. detail panel that drops down for each loaner with automatic data (https://material-table.com/#/docs/features/detail-panel)
        