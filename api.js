//modules required
const fs = require("fs");
const axios = require("./node_modules/axios");
const inquirer = require("inquirer");

const token = "b55ae5c0524d08eaaf612a08aa0156a681f0bbbe";

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
    const githubDataStr = JSON.stringify(githubData)
    console.log("from API" + githubDataStr)
  })

    module.exports = {
      getUser: getUser
    }
}