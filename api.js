//modules required
const fs = require("fs");
const axios = require("./node_modules/axios");
const inquirer = require("inquirer");

const token = "cdca4986bd06135c891fd198b228e3d48be944b0";

function getUser() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "username",
        message: "Enter GitHub username:",
      },
    ])
    .then(answers => {
      ///console.info('Answer:', answers.username);
    });

  axios.get(
    `https://api.github.com/users/${username}?access_token=${token}`
  ),

    console.info(data),
    console.info(data.email),
    console.info(data.avatar_url) 
}
module.exports = {
  getUser: getUser
}