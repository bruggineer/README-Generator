//modules required
const fs = require("fs");
const axios = require("./node_modules/axios");
const inquirer = require("inquirer");

const token = "b9eec851ed53a2d6e6c7e0b4acfb2afed26a0f3c";

async function getUser() {
  const answers = await inquirer
    .prompt([
      {
        type: "input",
        name: "username",
        message: "Enter GitHub username:",
      },
    ])
    console.log(answers.username);

  const data = await axios.get(
    `https://api.github.com/users/${answers.username}?access_token=${token}`
  ).then(function (data) {

    console.log(data.data);
    const email = data.data.email;
    const avatar = data.data.avatar_url;
    console.log(email)
    console.log(avatar)
    const githubData = {
      email: email,
      avatar: avatar,
      username: answers.username  
    }
    const githubDataStr = JSON.stringify(githubData);
    console.log("from API" + 
    githubDataStr)
    return githubDataStr;
  })
}

module.exports = {
  getUser: getUser
}