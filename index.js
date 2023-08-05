// IMPORT STATEMENTS
const db = require('./config/connection');
const inquirer = require('inquirer');

// CREATE INQUIRER QUESTIONS 
// What would you like to do?
// selections

function menu() {
    inquirer.prompt(
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: ["View all Employees", "View all Departments", "View all Roles", "Add New Employee", "Add New Department", "Add New Role", "Update Employee"]
        },
    )
        .then(res => {
            if (res.action === 'View all Employees') {
                viewAllEmployees()
            }
            if (res.action === 'View all Departments') {
                viewAllDepartments()
            }
            if (res.action === 'View all Roles') {
                viewAllRoles()
            }
            if (res.action === 'Add New Employee') {
                addNewEmployee()
            }
            if (res.action === 'Add New Department') {
                addNewDepartment()
            }
            if (res.action === 'Add New Role') {
                addNewRole()
            }
            {
                if (res.action === 'Update Employee') {
                    updateEmployee()
                }
            }

        })
}
menu()


// Set up a function for every single action that may happen
//ex:



const viewAllEmployees = () => {
    db.query('SELECT * FROM employee', (err, data) => {
        if (err) console.log(err)
        console.table(data)
        menu()
    })

    // make a query to database
    //display those results somehow
    //return to main menu
};
const viewAllDepartments = () => {
    db.query('SELECT * FROM department', (err, data) => {
        if (err) console.log(err)
        console.table(data)
        menu()
    })

};
const viewAllRoles = () => {
    db.query('SELECT * FROM roles', (err, data) => {
        if (err) console.log(err)
        console.table(data)
        menu()
    })

};
const addNewEmployee = () => {
    db.query('SELECT * FROM employee', (err, data) => {
        if (err) console.log(err)
        const employees = data.map(employee => {
            return { name: employee.first_name + " " + employee.last_name, value: employee.id }
        })
        employees.push({ name: "no manager", value: null })
        db.query('SELECT * FROM roles', (err, data) => {
            if (err) console.log(err)
            const roles = data.map(role => {
                return { name: role.title, value: role.id }
            })
            inquirer.prompt([
                {
                    type: "input",
                    name: "firstName",
                    message: "What is the employess first name?"
                },
                {
                    type: 'input',
                    name: "lastName",
                    message: "What is the employees last name?"
                },
                {
                    type: "list",
                    name: "roleId",
                    message: "What role would this employee do?",
                    choices: roles
                },
                {
                    type: "list",
                    name: "managerId",
                    message: "Does this emplyee have a manager?",
                    choices: employees
                },

            ])
                .then(res => {
                    db.query('INSERT INTO employee(first_name, last_name, role_id, manager_id) values(?, ?, ?, ?)', [res.firstName, res.lastName, res.roleId, res.managerId], (err, data) => {
                        if (err) console.log(err)
                        console.table(data)
                        menu()
                    })
                })
        })

    })

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
    db.query('SELECT * FROM department', (err, data) => {
        if (err) console.log(err)
        const departments = data.map(department => {
            return { name: department.name, value: department.id }
        })
        inquirer.prompt([
            {
                type: "input",
                name: "title",
                message: "What is the title of the role?"
            },
            {
                type: 'input',
                name: "salary",
                message: "What is the salary of this role?"
            },

            {
                type: "list",
                name: "departmentId",
                message: "What department does this role belong to?",
                choices: departments
            }
        ])
            .then(res => {
                db.query('INSERT INTO roles(title,salary, dept_id) values(?, ?, ?)', [res.title, res.salary, res.departmentId], (err, data) => {
                    if (err) console.log(err)
                    console.table(data)
                    menu()
                })
            })
    })
    
};

const addNewDepartment = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "newDepartment",
            message: "What department would you like to add?"
        }

    ]).then(res => {
        db.query("INSERT INTO department(name) values(?)", [res.newDepartment], (err, data) => {
            if (err) console.log(err)
            console.log("Successfully added new department!")
            menu()
        })
    })
    // Ask for the name of the department you are adding
    // INSERT new dept. into database
    // return confirmation if successful
    // CALL MAIN MENU FUNC.
}

const updateEmployee = () => {
    db.query('SELECT * FROM employee', (err, data) => {
        if (err) console.log(err)
        const employees = data.map(employee => {
            return { name: employee.first_name + " " + employee.last_name, value: employee.id }
        })
        employees.push({ name: "no manager", value: null })
        db.query('SELECT * FROM roles', (err, data) => {
            if (err) console.log(err)
            const roles = data.map(role => {
                return { name: role.title, value: role.id }
            });
            inquirer.prompt([
                {
                    type: "list",
                    name: "employeeUpdate",
                    message: "What employee would you like to update?",
                    choices: employees
                },
                {
                    type: "list",
                    name: "roleUpdate",
                    message: "What new role is this employee taking?",
                    choices: roles
                }

            ]).then(answers =>{
                const employeeId = answers.employeeUpdate;
                const roleId = answers.roleUpdate;
                const sqlUpdateQuery = "UPDATE employee SET role_id =" + roleId + " WHERE id = "+ employeeId;
                db.query(sqlUpdateQuery, (err,result)=>{
                    if (err) console.log(err);
                    console.log('Employee updated successfully!')
                    menu();
                })
            })
        })



    })

}
   




