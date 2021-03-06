# README-Generator

A command-line application that dynamically generates a README.md from an user's input. The application is invoked through node.js

The user is prompted for their GitHub username, which calls to the GitHub API to retrieve their email and profile image. They are then prompted with questions about their project.

The README file produced by the app will contain the following:

* At least one badge
* Project title
* Description
* Table of Contents
* Installation
* Usage
* License
* Contributing
* Tests
* Questions
  * User GitHub profile picture
  * User GitHub email
  
  #### To run README-Generator:
  Clone or fork to your local machine 
  Run 'npm install', then 'node index.js'. 
  Answer the prompts. 
  The generated README is stored in the 'generateMarkdown.js' file. 
  Copy/paste or move file to proper directory for use.
  ________________________________________________________________________________________________________________________________________

Challenge:

```
AS A developer

I WANT a README generator

SO THAT I can easily put together a good README for a new project
```
## Business Context

When creating an open source project on GitHub, it is important to have a quality README with information about the app--what is the app for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project. A command-line application will allow for quick and easy generation of a project README to get started quickly. This will allow a project creator to spend more time working on finishing the project and less time creating a good README.

## Minimum Requirements

* Functional, deployed application.

* GitHub repository with a unique name and a README describing project.

* The generated README includes a bio image from the user's GitHub profile.

* The generated README includes the user's email.

* The generated README includes the following sections: 
  * Title
  * Description
  * Table of Contents
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions

* The generated README includes 1 badge that's specific to the repository.

```
GIVEN the developer has a GitHub profile and a repository

WHEN prompted for the developer's GitHub username and repo specific information

THEN a README for the repo is generated
```
- - -
