-- Need to create 3 tables in a database

DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;




CREATE TABLE department(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30))

CREATE TABLE role(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    dep_id INT, --Foreign Key
    FOREIGN KEY (dep_id) REFERENCES department(id)); 

 CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id, -- THIS IS A FOREIGN KEY ***
    FOREIGN KEY (role_id) REFERENCES role(id),
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES employee(id)
     );-- THIS IS A FOREIGN KEY ****

