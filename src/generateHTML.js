const generateHTML = (teamMembers) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
        <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="card mx-auto mb-3" style="width: 18rem">
            <div class="row">
                ${generateTeam(teamMembers)}
            </div>
        </div>  
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>   
        <script src="/src/generateHTML.js"></script>   
    </body>
    </html>
    `
    };
    
    function generateTeam(teamMembers) {
        let html = ""
        teamMembers.forEach(member => {
            switch (member.getRole()) {
                case "Manager":
                    html += generateManager(member)
                    break;
                case "Engineer":
                    html += generateEngineer(member)
                    break;    
                case "Intern":
                    html += generateIntern(member)
                    break;    
                default:
                    break;
            }
        })
        return html;
    }
    
    const generateManager = (manager) => {
        return  `
            <div class="card mx-auto mb-3" style="width: 18rem">
                    <div class="card-header">
                        <h2>${manager.getName()}</h2>
                        <h4><i class="fas fa-mug-hot"> ${manager.getRole()}</i></h4>
                    </div>
                    <div class="card-body bg-light">
                    <p class="card-text">
                        <div class="list-group">
                            <a href="" class="list-group-item list-group-item-action active">ID: ${manager.getId()}</a>
                            <a href="mailto: ${manager.getEmail()}" class="list-group-item list-group-item-action">Email: ${manager.getEmail()}</a>
                            <a href="" class="list-group-item list-group-item-action disabled">Office Number: ${manager.getOfficeNumber()}</a>
                        </div>
                    </p>
                    </div>
                </div>
                `
    };
    
    const generateEngineer = (engineer) => {
        return  `
            <div class="card mx-auto mb-3" style="width: 18rem">
                    <div class="card-header">
                        <h2>${engineer.getName()}</h2>
                        <h4><i class="fas fa-glasses"> ${engineer.getRole()}</i></h4>
                    </div>
                    <div class="card-body bg-light">
                    <p class="card-text">
                        <div class="list-group">
                            <a href="" class="list-group-item list-group-item-action active">ID: ${engineer.getId()}</a>
                            <a href="mailto: ${engineer.getEmail()}" class="list-group-item list-group-item-action">Email: ${engineer.getEmail()}</a>
                            <a href="https://github.com/${engineer.getGithub()}" target="_blank" class="list-group-item list-group-item-action">Github: ${engineer.getGithub()}</a>
                        </div>
                    </p>
                    </div>
                </div>
                `
    };
    
    const generateIntern = (intern) => {
        return  `
            <div class="card mx-auto mb-3" style="width: 18rem">
                    <div class="card-header">
                        <h2>${intern.getName()}</h2>
                        <h4><i class="fas fa-user-graduate"> ${intern.getRole()}</i></h4>
                    </div>
                    <div class="card-body bg-light">
                    <p class="card-text">
                        <div class="list-group">
                            <a href="" class="list-group-item list-group-item-action active">ID: ${intern.getId()}</a>
                            <a href="mailto: ${intern.getEmail()}" class="list-group-item list-group-item-action">Email: ${intern.getEmail()}</a>
                            <a href="" class="list-group-item list-group-item-action disabled">School: ${intern.getSchool()}</a>
                        </div>
                    </p>
                    </div>
                </div>
                `
    };
    
    module.exports = generateHTML