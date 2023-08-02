// IMPORT STATEMENTS
const db = require('./config/connection');
const inquirer = require('inquirer');
// CREATE INQUIRER QUESTIONS 
    // What would you like to do?
        // selections


// Set up a function for every single action that may happen
//ex:



const viewAllEmployees = () =>{
    // make a query to database
    //display those results somehow
    //return to main menu
};
const viewAllDepartment = () => {

};
const viewAllRoles = () => {

};
const addNewEmployee = () => {
    // Ask for  first and last name of employee you are adding   
    // Ask for employess role- USE M/C
        //In oder to execute this, must query roles first and show in M/C list.
    // Ask if employee has manager --
        // query employees and display in M/C for user 
        // if yes, then add manager to to employee table.

    // if successully added, send confirm message
    // Send back to main menu!
};

const addNewRole = () => {
    // ask what is the name of the role you are adding?
    // ask that roles salary
    //ask which department 
        // query the departments
        // THEN we ask department with list of choices for ROLES
        //write new data to database
            // must extract department ID **
        // return confirmation message
        // return to main menu
};

const addNewDepartment = () => {
    // Ask for the name of the department you are adding
    // INSERT new dept. into database
    // return confirmation if successful
    // CALL MAIN MENU FUNC.
}

const updateEmployee = () => {
    // query list of employees
        // select employee you want to update, FIND associate employee ID
        // what do you want new role to be?
            //query roles for m/c
        // What do you want to change first name to?
        // What do you want new last name to be?(text)
        // Who is the manager?
            //  query employees for m.c

        // With this information UPDATE with id from first step
            // ex: emplyee with ID of 6 - here is there new info...


            
}
