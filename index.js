const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateHTML = require('./src/generateHTML');

//Empty array that holds each team member added
let teamMembers = [];

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

//initial function to choose which team member in order to run each member function
function createTeam() {
  inquirer.prompt([
    {
      type: "list",
      name: "memberChoice",
      message: "Which type of team member are you?",
      choices: [
          "Manager",
          "Engineer",
          "Intern",
          "No more team members to add"
      ]
    }
  ]).then(userChoice => {
    switch (userChoice.memberChoice) {
      case "Manager":
        askManagerQuestion();
        break;
      case "Engineer":
        askEngineerQuestion();
        break;  
      case "Intern":
        askInternQuestion();
        break;  
      case "No more team members to add":
        print();
        break;      
    }
  })
};

//Manager questions
function askManagerQuestion() {
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "Please list manager's name",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        else {
          return "Please enter at least one Character.";
        }
      }
    },
    {
      type: "input",
      name: "managerId",
      message: "Please enter manager's ID number?",
      validate: answer => {
        const regEx = /^[1-9]\d*$/;
        const pass = answer.match(regEx);
        if (pass) {
          return true;
        }
        else {
          return "Please enter at least one digit."
        }
      }
    },
    {
      type: "input",
      name: "managerEmail",
      message: "Please enter manager's email address",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        else {
          return "Please enter at least one Character.";
        }
      }
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Please enter manager's office number",
      validate: answer => {
        const regEx = /^[1-9]\d*$/;
        const pass = answer.match(regEx);
        if (pass) {
          return true;
        }
        else {
          return "Please enter at least one digit."
        }
      }
    },
  ]).then((userInput) => {
    // console.log(userInput);
    var manager = new Manager (userInput.managerName, userInput.managerId, userInput.managerEmail, userInput.officeNumber);
    // console.log(manager);
    teamMembers.push(manager);
    createTeam();
  })
};

function askEngineerQuestion() {
  inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "Please list engineer's name",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        else {
          return "Please enter at least one Character.";
        }
      }
    },
    {
      type: "input",
      name: "engineerId",
      message: "Please enter engineer's ID number",
      validate: answer => {
        const regEx = /^[1-9]\d*$/;
        const pass = answer.match(regEx);
        if (pass) {
          return true;
        }
        else {
          return "Please enter at least one digit."
        }
      }
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "Pleae enter engineer's email address",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        else {
          return "Please enter at least one Character.";
        }
      }
    },
    {
      type: "input",
      name: "gitHub",
      message: "Please enter engineer's Github username",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        else {
          return "Please enter at least one Character.";
        }
      }
    },
  ]).then((userInput) => {
    // console.log(userInput);
    var engineer = new Engineer (userInput.engineerName, userInput.engineerId, userInput.engineerEmail, userInput.gitHub);
    // console.log(engineer);
    teamMembers.push(engineer);
    createTeam();
  })
};

function askInternQuestion() {
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "Please list intern's name",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        else {
          return "Please enter at least one Character.";
        }
      }
    },
    {
      type: "input",
      name: "internId",
      message: "Please enter intern's ID number",
      validate: answer => {
        const regEx = /^[1-9]\d*$/;
        const pass = answer.match(regEx);
        if (pass) {
          return true;
        }
        else {
          return "Please enter at least one digit."
        }
      }
    },
    {
      type: "input",
      name: "internEmail",
      message: "Please enter intern's email address",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        else {
          return "Please enter at least one Character.";
        }
      }
    },
    {
      type: "input",
      name: "school",
      message: "Please enter school intern is from",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        else {
          return "Please enter at least one Character.";
        }
      }
    },
  ]).then((userInput) => {
    // console.log(userInput);
    var intern = new Intern (userInput.internName, userInput.internId, userInput.internEmail, userInput.school);
    // console.log(intern);
    teamMembers.push(intern);
    createTeam();
  })
};

//writes file with html
const print = () => {

  let html = generateHTML(teamMembers);
      writeFileAsync('./dist/index.html', html)
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
}

// Runs application
const init = () => {

    createTeam();
      
  };
  
  init();