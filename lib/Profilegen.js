
const inquirer = require('inquirer');

inquirer
    .prompt([
        type: 'input',
        name: 'employeeName',
        message: 'What is this employees name?'
    ])