// include packages needed for this application
const inquirer = require('inquirer');

// begining user prompts for team information
const questionPrompt = () => {
    return inquirer.prompt([
        type: 'input',
        name: 'manager',
        message: 'What is the name of the team manager?'
    ]);
};
