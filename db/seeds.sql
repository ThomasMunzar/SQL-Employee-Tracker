-- INSERT INTO DEPT TABLE
-- INSERT INTO ROLE TABLE
-- INTERT INTO EMPLOYEE TABLE


INSERT INTO department(name)
VALUES ('Chartoon Airlines'),
       ('Culinary Department'),
       ('Plane Fixing Shop');
      



INSERT INTO roles (title, salary, dept_id)
VALUES ('CEO', 5000, 1),
       ('Chef', 80000, 2),
       ('Flight Attendant', 7000, 1),
       ('Pilot', 10000, 1),
       ('Mechanic', 4000, 3),
       ('Co-Pilot', 50000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Nelson', 'Muntz', 6,4),
       ('Marge', 'Simpson', 5,6),
       ('Milhouse', 'Van Houten', 3,4),
       ('Edna', 'Krabappel', 4,6),
       ('Barney', 'Gumble', 2,6),
       ('Hans', 'Moleman', 1);