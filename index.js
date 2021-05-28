// include packages needed for this application
const inquirer = require('inquirer');

// begining user prompts for team information
const questionPrompt = () => {
    console.log('Create your team!');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'manager',
            message: 'What is the name of the team manager?',
            // make sure data input is acceptable
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter manager name!');
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's id?",
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('Please enter manager ID!');
                    return false;
                }
            }
        },  
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?", 
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Please enter manager's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team office number?", 
            validate: officenumber => {
                if (officenumber) {
                    return true;
                } else {
                    console.log('Please enter team office number!');
                    return false;
                }
            }
        }
    ]);
};

// create a function to write HTML. writeToFile

questionPrompt();
    // .then(data => {
    //     writeToFile('homepage.html', generateHTML(data));
    // })
