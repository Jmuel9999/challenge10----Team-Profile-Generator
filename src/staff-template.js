const createHTML = data => {
const createEngineerHTML = engineer => {

            return `
            <div class="card">
                <div class="card-header">Engineer: ${engineer.getName()}</div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">Email: <a href="${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></li>
                    </ul>
            </div>
            `
        }

const createInternHTML = intern => {
            return `
            <div class="card">
                <div class="card-header">Intern: ${intern.getName()}</div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email: <a href="${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
            </div>
            `
}

const createManagerHTML = manager => {
    return `
                <div class="card">
                    <div class="card-header">Manager: ${manager.getName()}</div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${manager.getId()}</li>
                            <li class="list-group-item">Email: <a href="${manager.getEmail()}">${manager.getEmail()}</a></li>
                            <li class="list-group-item">Office Number: ${manager.getofficeNumber()}</li>
                        </ul>
                </div>
    `;
    }

const profiles = []
profiles.push(data.filter(emp => emp.getRole() === "Manager").map(manager => createManagerHTML(manager)));
profiles.push(data.filter(emp => emp.getRole() === "Engineer").map(engineer => createEngineerHTML(engineer)));
profiles.push(data.filter(emp => emp.getRole() === "Intern").map(intern => createInternHTML(intern)));
return profiles.join("")

}

module.exports = data => {
    return `
     <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css" />
        <title>My Team</title>
    </head>
    
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            <div class="card-deck">
            ${createHTML(data)}
            </div>
        </main>
    </body>
    
    </html>
    `
};