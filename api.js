//modules required
const fs = require("fs");
const axios = require("./node_modules/axios");
const inquirer = require("inquirer");

const token = "8bf5ead64b8984bbf1c334774ca97e9ad757c473";

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
    return githubData;
  })
}

module.exports = {
  getUser: getUser
}