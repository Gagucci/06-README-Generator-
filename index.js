// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const markdownGenerator = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
