// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Create an array of questions for user input
const questions = [
  "What is the title of your project?",
  "What is the description of your project?",
  "What are the installation instructions for your project?",
  "What is the usage information for your project?",
  "What license was used for your project?",
  "Who has contributed to this project?",
  "What tests have you run on this project?",
  "What is your GitHub username?",
  "What is your email address?",
];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      throw new Error("Something went wrong!" + err.message);
    } else {
      console.log("README.md file created successfully!");
    }
  });
}

// Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        ask: questions[0],
        name: "title",
      },
      {
        ask: questions[1],
        name: "description",
      },
      {
        ask: questions[2],
        name: "installation",
      },
      {
        ask: questions[3],
        name: "usage",
      },
      {
        type: "list",
        ask: questions[4],
        choices: ["MIT", "Apache", "GPL", "BSD", "None"],
        name: "license",
      },
      {
        ask: questions[5],
        name: "contributing",
      },
      {
        ask: questions[6],
        name: "tests",
      },
      {
        ask: questions[7],
        name: "github",
      },
      {
        ask: questions[8],
        name: "email",
      },
    ])
    .then((response) => {
      console.log(response);
      writeToFile("READMEsample.md", generateMarkdown(response));
    });
}

// Function call to initialize app
init();
