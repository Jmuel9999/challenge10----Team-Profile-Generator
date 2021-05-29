// include packages needed for this application
const inquirer = require('inquirer');
// object destructuring call
const {generatePage} = require('./lib/generatePage');
const fs = require('fs');

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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) return console.log(err);
        console.log(data)
    })
};



// // TODO: Create a function to initialize app
function init() {
    questionPrompt()
    .then(data => {
        // Creates html page and takes the json object that we made (inquirer.prompt) and turns it into a string
        writeToFile('index.html', generatePage(data));
        //console.log(data);
    }) 
};

// Function call to initialize app
init();