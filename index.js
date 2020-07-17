//calls node dependencies and app files
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("./node_modules/axios");
const generateMarkdown = require("./generateMarkdown");

//command line input prompts
const questions = [
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
    name: "repo",
    message: "Enter GitHub repo name"
  },
  {
    type: "input",
    name: "install",
    message: "Enter directions for installation:"
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
]

async function getUser() {

  const API_KEY = "key goes here"

  const replies = await inquirer
    .prompt([
      {
        type: "input",
        name: "username",
        message: "Enter GitHub username:",
      },
    ]);

  return await axios.get(
    `https://api.github.com/users/${replies.username}?access_token=${API_KEY}`
  ).then(function (data) {
    console.log(data.data);
    const email = data.data.email;
    const avatar = data.data.avatar_url;
    console.log(email)
    console.log(avatar)
    const githubData = {
      email: email,
      avatar: avatar,
      username: data.data.login
    }
    console.log(githubData);
    return githubData;
  })
};

//call api for GitHub user data, ask the questions and collect answers
async function init() {
  const githubData = await getUser()
  await inquirer.prompt(questions).then(function (answers) {
    console.log(answers)
    generateMarkdown(answers, githubData)
  })

};

//start the app
init();



