const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const html = require("./lib/generateHTML");
const { run } = require("jest");

let data = [];

const managerInfo = [
    {
        type: "input",
        name: "managerName",
        message: "Please enter the team manager's name."
    },
    {
        type: "input",
        name: "managerId",
        message: "Please enter the team manager's employee ID."
    },
    {
        type: "input",
        name: "managerEmail",
        message: "Please enter the team manager's email address."
    },
    {
        type: "input",
        name: "managerOfficeNumber",
        message: "Please enter the team manager's office number."
    },
];

const menu = [
    {
        type: "list",
        name: "newEmployee",
        message: "Would you like to add another employee?",
        choices: [
            "Add an engineer",
            "Add an intern",
            "Done adding employees"
        ]
    }
];

const engineerInfo = [
    {
        type: "input", 
        name: "engineerName",
        message: "Please enter the engineer's name."
    },
    {
        type: "input", 
        name: "engineerId",
        message: "Please enter the engineer's employee ID."
    },
    {
        type: "input", 
        name: "engineerEmail",
        message: "Please enter the engineer's email."
    },
    {
        type: "input", 
        name: "engineerGithub",
        message: "Please enter the engineer's GitHub username."
    }
];

const internInfo = [
    {
        type: "input", 
        name: "internName",
        message: "Please enter the intern's name."
    },
    {
        type: "input", 
        name: "internId",
        message: "Please enter the intern's employee ID."
    },
    {
        type: "input", 
        name: "internEmail",
        message: "Please enter the intern's email."
    },
    {
        type: "input", 
        name: "internSchool",
        message: "Please enter the intern's school."
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("HTML page successfully generated!")
    );
};

function runMenu() {
    inquirer.prompt(menu)
        .then(res => {
            let choice = res.newEmployee;
            if (choice === "Add an engineer") {
                addEngineer();
            } else if (choice === "Add an intern") {
                addIntern();
            } else if (choice === "Done adding employees") {
                const fileText = html(data);
                return writeToFile("./dist/index.html", fileText);
            }
        })
};

function addEngineer() {
    inquirer.prompt(engineerInfo)
        .then(res => {
            let { engineerName, engineerId, engineerEmail, engineerGithub } = res;
            let engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
            data.push(engineer);
            console.log(data);
            runMenu();
        })
};

function addIntern() {
    inquirer.prompt(internInfo)
        .then(res => {
            let { internName, internId, internEmail, internSchool } = res;
            let intern = new Intern(internName, internId, internEmail, internSchool);
            data.push(intern);
            console.log(data);
            runMenu();
        })
};

function init() {
    let manager;
    inquirer.prompt(managerInfo)
        .then(res => {
            let { managerName, managerId, managerEmail, managerOfficeNumber } = res;
            manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);
            data.push(manager);
            runMenu();
            const fileText = html(data);
            return writeToFile("./dist/index.html", fileText);
        })
};

init();