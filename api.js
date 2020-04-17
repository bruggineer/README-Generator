//modules required
const fs = require("fs");
const axios = require("./node_modules/axios");
const inquirer = require("inquirer");

const token = "3139c9fcf13233c1fc8d397d18acdc93b93175b8";

async function getUser() {
  const answers = await inquirer
    .prompt([
      {
        type: "input",
        name: "username",
        message: "Enter GitHub username:",
      },
    ])

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
    return githubData;
  })
}

module.exports = {
  getUser: getUser
}