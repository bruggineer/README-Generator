//get the needed modules
const fs = require("fs");
const inquirer = require("inquirer");

const newReadMe = 'readme-file.json'

//const writeFileAsync = util.promisify(fs.writeFile);

//put the questions before the user and get the answers




//put the answers into a README file


//call the functions and error trap
// run async function to write file
const writeFileAsync = (newData) => {
    // convert the  JavaScript values to a JSON string
    const stringifiedData = JSON.stringify(newData);
  
    // run async function to write file
    fs.writeFile(FILE_NAME, stringifiedData, (error) => {
      if (error) {
        // if there is an error, print it
        console.log('Async Write: NOT successful!');
        console.log(error);
      } else {
        console.log('Async Write: successful!');
        console.log(stringifiedData);
      }
    });
  };

// run the function
writeFileAsync(NEW_DATA);
