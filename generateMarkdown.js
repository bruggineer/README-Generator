const api = require("./api");
const markdown = require("./generateMarkdown");


function generateMarkdown(data) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="container">
    <img src="${githubAvatar}" alt="${username}" />
    <h1 class="display-4">${data.title} by ${username}</h1>
    <p class="lead">${data.projectDesc}</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <h2>Table of Contents</h2>
      <li class="list-group-item"><a href="#install">${data.install}</a></li>
      <li class="list-group-item"><a href="#usage">${data.usage}</a></li></li>
      <li class="list-group-item"><a href="#license">${data.license}</a></li></li>
      <li class="list-group-item"><a href="#contributors">${data.contributors}</a></li></li>
      <li class="list-group-item"><a href="#tests">${data.tests}</a></li></li>
      <li class="list-group-item"><a href="#questions">${data.questions}</a></li></li>
    </ul>
    <p id="install>To install:</p>
    <p>${data.install}</p>
    <p id="usage">Allowed usage: ${data.usage}</p>
    <p id="license">License: ${data.license}</p>
    <p id="contributors>Contributors: ${data.contributors}</p>
    <p id="tests">Tests: ${data.tests}</p>
    <p id="questions">Submit questions to: ${data.questions}</p>

  </div>
</div>
</body>
</html>
`;
}

module.exports = generateMarkdown;
