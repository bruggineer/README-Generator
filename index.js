//get the needed modules
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const api = require("./api");
const generateMarkdown = require("./generateMarkdown");

async function askQuestions() {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Enter the Project Title:"
        },
        {
            type: "input",
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
}

async function init() {
    const githubData = await api.getUser();
    console.log(this.githubData);
    await askQuestions();
    generateMarkdown.generateMarkdown(this.answers, githubData);
}

init();

