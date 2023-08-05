-- Need to create 3 tables in a database

DROP DATABASE IF EXISTS simpsons_db
CREATE DATABASE simpsons_db;
USE simpsons_db;




CREATE TABLE department(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30));

CREATE TABLE roles(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    dept_id INT, 
    FOREIGN KEY (dept_id) REFERENCES department(id)); 

 CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES employee(id)
     );

