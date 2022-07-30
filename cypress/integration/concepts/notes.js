// nodejs has javascript engine so you can the code.


// cypress.json: Created in the project root directory , enables us to change default settings.


// support: used to store custom commands and files

// Inside the support folder there are two files 1. command.js 2. index.js
// 1. index.js: The first file which cypress investigates; any imports, additional libraries, event listener,
// changes to cypress default behaviour, even in the ability to add hooks etc..

// 2. command.js: Used to store common / custom commands (Functions), even the ability to override Cypress functions.
// In every application we have some areas which is duplicate like 
// in every application atleast we have login and logout So these areas are commomn for all the test cases
//  so we can create piece of code which can be used every team memeber

// ---> Under plugins we have file call index.js. 
// index.js enables you to add the functionality to extend upon cypress functionality.
// So for example if there are specific plugins that you want to use within your framework, 
// you can add add those plugins using this specific files
// Example: We can add configuration files set up 

// ---> We know what integration folder does?
// The main folder where we store our test files, Cypress test runner will look into this folder inoder to locate test files.

// ---> Fixture is mainly to store the test data 
// For example we cans store data objects or mocked objects 
// and typically all the data is known most commonly in the json format.


// ---> node_modules: used to house dependencies (packages)

// Videos: Used to store videos of test recordings.

// screenshots: used to store images of specific tests

// Mocha comes pre bundles with two functions calls which are describe() and it() both have their own specific purpose
// describe() is simply a way to group our tests in mocha; basically enabling us to group a series of test together. 
// describe() takes two arguments: first argument: the name of the test group and the second argument is simply the 
// call back function. 
// A call is a back function that is to be executed after another function has finished executing-- hence the name 'call back'

// it() is way to describe each individual test case which is nested inside the decribe() block. 
// it() should be described in way that makes sense for the test case. 

// In simple words describe is used to define and group tests, it() is used to define individual test cases.


//-------------------------------------------------------------------------------------------------------------------

// SYNCHRONOUS VS ASYNCHRONOUS:
// Cypress commands are asynchronous, Cypress is built upon NODEJS, hence why in earlier lectures we setup and 
// used npm which is the Node package manager(NPM) for the javascript programming langauge.

// Note: That asynchronous does not mean the same thing as concurrent or multi-threaded. JavaScript can have asynchronous code, 
// but it is generally single threaded.

// This is like a restaurant which has a single wworker who does all of the cooking and serving of the food 
// however if the single worker, works quickly enough and can switch between tasks efficiently, then the restaurant 
// seemingly has multiple workers/task running at the same time even though the restaurant only has onbe worker.


// What is Synchronous?
// Code is executed one at a time in the order it appears.
// Single threaded synchronous execution(Executed in a sequence manner)
// In javaScript this means one thing is happening at a time.


// Asynchrous more than one thing at a time.
// Some code is executing which starts of executing some other code and that code starts executing some more code...
// All this code is executing within the engine at the same time...
// Whatever step is available to be executed will be executed...!















