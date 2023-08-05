# SQL-Employee-Tracker
## Table of Contents

* [Description](#description)
* [Learning Points](#learning-points)
* [Installation](#installation)
* [Credits](#credits)
* [Questions](#questions)
* [Tests](#tests)
* [License](#license)

## Description
[Watch a video of the functionality of this code here!](https://drive.google.com/file/d/1exIkSDDPzMsuL3CYEhvsO10_9fsViDoC/view)

The goal of this project was to create a database using MYSQL then to create code to allow a user to interact with the database via the CLI. This was extremely hard for me and I do not feel confident with mysql right now but I am happy with the progress that I was able to make. User should be able to View all employees, roles and departments as well as ADD employee, role and department AND update employee and their role.


## Learning-Points

My biggest take away from this project is that MYSQl is very finicky. I was running into an issue where i had a table of employees and they all had a FIRST NAME, LAST NAME, ROLE ID and MANAGER ID. However forsome reason (my tutor could figure this out because it should have worked.) If i have a employee at index 0 whos manager was at index 5 , i would get an error message in mysql work bench. This took almost 2 hours to fix and fiddle with. Luckily I was able to work with a tutor to help me get there. But that was a huge learning experience. This entire time in this course ive been struggling with learning and understanding MANY languages, but this was the first time where I had written everything seemingly right and even someone with a ton of experience struggled to figure out what was going wrong. It was a great lesson because I will always be learning even if it sends me down a huge rabbit hole.

Another thing I am proud of is that when I was tring to work on my updateEmployeeFunction I was actually adding data to tables because i was using INSERT. so after messing around I noticed that my roles table had a TON of NULL and random stuff i did not want there. So I went back to the Docs and learned that i could delete a specific row from a table with 
```
DELETE FROM roles WHERE id= 10;
```
and so on. 


## Installation

User MUST have:
 Node.js 
Inquirer 
Mysql2



## Credits

I would like to thank my fellow classmates, my tutors, teaching staff and my family for all the support through out this program.

## Questions

If you have any further questions please contact me.

- Name: Thomas Munzar
- Email: tmunzar92@gmail.com
- Github: [ThomasMunzar](https://github.com/ThomasMunzar/)

## Contributing

n/a

## Tests
n/a

## License

MIT License

Copyright (c) 2023 Thomas Munzar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.