// IMPORT STATEMENTS


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

const addNewEmployee = () => {

};

const addNewRole = () => {
    // ask what is the name of the role you are adding?
    // ask that roles salary
    //ask which department 
        // query the departments
        // THEN we ask department with list of choices
        //write new data to database
        // return confirmation message
        // return to main menu
};

// CONNECT NODE TO DATABASE --activity 11--
// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'password',
      database: ''
    },
    console.log(`Connected to the database.`)
  );