//modules required
const fs = require("fs");
const axios = require("./node_modules/axios");
const inquirer = require("inquirer");

const token = "cdca4986bd06135c891fd198b228e3d48be944b0";

function getUser() {
  inquirer.prompt([
    {
    message: "Enter GitHub username:",
    name: "username"
    }
  ]).then(answers => {
    console.info('Answer:', answers);
        if (err) {
            return console.log(err);
          }              
      });
  

  axios.get(
    `https://api.github.com/users/${username}?access_token=${token}`
  ),

  console.log(data),
  console.log(data.email),
  console.log(data.avatar_url)  
  }
module.exports = {
  getUser: getUser
}