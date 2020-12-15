# Clean-architecture-node
University student registration system

This project aims to implement the clean code architecture by Robert C. Martin.
The architecture poses the dependency formula that falls inward rather than outwards making such architecture less volatile to changes in frameworks or databases e.t.c
It works based on the principle of abstraction

The architecture makes use of four layers namely:
1. The entities
2. The Use-cases
3. The controllers and presenters
4. The Frameworks

-> The dependency goes from 4 to 1 ->

- Entities contains the buisness entities that construct our aplication e.g specifying what parameters belong to a student like name, age e.t.c
- The Use cases contains all buisness scenarios that we use in the application. e.g adding a new student to the database
- The controllers are like adapters meaning they are in charge of receiving user input, performing validation if it is needed then calling the use cases and passing the required dependencies to it to instantiate it then passing the required inputs to its callback function.
- The presenters as the name suggests are responsible for preparing the data to be displayed to the UI. In this application we implemented the controllers and the presenters together.
- The frameworks are made up of our specific implementations, the database layers, web frameworks and error handling.

The web application used is Express JS
The database service used is Mongo DB
