//get the needed modules
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const api = require("./api");
const markdown = require("./generateMarkdown");

function askQuestions(){
        inquirer.prompt([
            {
                type: "input",
                name: "title",
                message: "Enter the Project Title:"
            },
            {
                type: "editor",
                name: "projectDesc",
                message: "Enter Description:"
            },
            {
                type: "input",
                name: "install",
                message: "Enter directions for installation:"
            },
            {
                type: "input",
                name: "usage",
                message: "Enter usage:"
            },
            {
                type: "input",
                name: "license",
                message: "Enter license:"
            },
            {
                type: "input",
                name: "contributing",
                message: "Enter contributors:"
            },
            {
                type: "input",
                name: "test",
                message: "Enter tests:"
            },
            {
                type: "input",
                name: "questions",
                message: "Where can questions be submitted?:"
            },
        ])
        .then(answers => {
            console.info('Answer:', answers);
                if (err) {
                    return console.log(err);
                  }              
              });
            }

function init() {
    api.getUser();
    askQuestions();
    generateMarkdown.generateMarkdown();
}

init();
