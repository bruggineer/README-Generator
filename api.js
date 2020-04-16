//modules required
const fs = require("fs");
const axios = require("./node_modules/axios");
const inquirer = require("inquirer");

getUser();
async function getUser() {
  try {
    const { username } = await inquirer.prompt({
      message: "Enter GitHub username:",
      name: "username"
    });

    const token = "a8faa74dfa7fae3c5f507aaafcbf06511f8d7b51"

    const { data } = await axios.get(
      `https://api.github.com/users/${username}?access_token=${token}`
    );

    console.log(data);
    console.log(data.email);
    console.log(data.avatar_url);

  } catch (err) {
    console.log(err);
  }

}

  module.exports = {
    githubEmail: data.email,
    githubAvatar: data.avatar_url
  }