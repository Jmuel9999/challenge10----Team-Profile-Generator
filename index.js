const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const inquirer = require('inquirer');
const finalPage = require('./src/staff-template');


const teamArr = [];
function generatePage() {
const createManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'teamManagerName',
            message: "What is your Team Manager's name?"
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is your employee ID?"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is your email address?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your office number?"
        }
    ])
        .then(answers => {
            console.log(answers);
            const manager = new Manager(answers.teamManagerName, answers.managerId, answers.managerEmail, answers.officeNumber);
            teamArr.push(manager);
            console.log(teamArr);
            teamChoice();
        })
};

const teamChoice = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addTeamMember',
            message: "Would you like to add a team member?",
            choices: ['Engineer', 'Intern', 'Finished building team']
        }
    ])
        .then(answers => {
            switch (answers.addTeamMember) {
                case "Engineer":
                    createEngineer();
                    break;
                case "Intern":
                    createIntern();
                    break;
                default: createTeam();
            }
        })
};

const createEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "Name of engineer:"
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "Employee ID of this team member?"
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "Email address of this team member?"
        },
        {
            type: 'input',
            name: 'engineerGit',
            message: "GitHub username of this team member?"
        }
    ])
        .then(answers => {
            console.log(answers);
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGit);
            teamArr.push(engineer);
            console.log(teamArr);

            teamChoice();
        })
};

const createIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "Name of Intern:"
        },
        {
            type: 'input',
            name: 'internId',
            message: "Employee ID of this team member?"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Email address of this team member?"
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "School of this team member?"
        }
    ])
        .then(answers => {
            console.log(answers);
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamArr.push(intern);
            console.log(teamArr);
            teamChoice();
        })
};


function createTeam() {
    fs.writeFileSync('./dist/team.html', finalPage(teamArr), err => {
        if (err) {
        throw err;
        } else {
        console.log('Your portfolio is ready!');
        }
    });

};

createManager();
}

generatePage();