const fs = require("fs");
const index =require("./index");

function generateMarkdown(answers, githubData) {
  console.log(answers)
  const markdown = `#${answers.title}
![${githubData.username}](${githubData.avatar})
##Contact me at: ${githubData.email}
![2020 badge](https://img.shields.io/badge/2020-green) 

## Description: ${answers.projectDesc}
## Table of Contents: 
- [Installation](#install)
- [Usage](#usage)
- [License](#license)
- [Contributers](#contributing)
- [Tests](#test)
- [Questions](#questions)
### Installation: ${answers.installation}
### Usage: ${answers.usage}
### License: ${answers.license}
### Contributers: ${answers.contributing}
### Test: ${answers.test}
### Questions: ${answers.questions}`;

fs.writeFile("newREADME.md", markdown, function (err) {
  if (err) {
    throw err;
  }
  console.log(`README.md generated for ${answers.username}`)
}); 

}

module.exports = generateMarkdown
  