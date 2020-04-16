//modules required
const fs = require("fs");
const axios = require("./node_modules/axios");
const inquirer = require("inquirer");

function getUser() {
  inquirer.prompt([
    {
    message: "Enter GitHub username:",
    name: "username"
    }
  ]).then(answer => {
  });
  

  const token = "e04a3f39f06735c4d8d21cef27a15c6fc9962240"

  axios.get(
    `https://api.github.com/users/${username}?access_token=${token}`
  );

  console.log(data);
  console.log(data.email);
  console.log(data.avatar_url);
}

module.exports = {
  username: username
}