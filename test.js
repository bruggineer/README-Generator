const fs = require('fs');

// save the file name of our data in a variable (increase readability)
const new_readme = 'readme.json';

// save the new data in a variable (increase readability)
const ANSWERS = [{ id: 2, name: 'Teresa' }];

const writeFileAsync = (answers) => {
  // convert the  JavaScript values to a JSON string
  const stringifiedAnswers = JSON.stringify(answers);

  // run async function to write file
  fs.writeFile(new_readme, stringifiedAnswers, (error) => {
    if (error) {
      // if there is an error, print it
      console.log('The following error occurred:');
      console.log(error);
    } else {
      console.log('readme.json has been created');
      console.log(stringifiedAnswers);
    }
  });
};

// run the function
writeFileAsync(ANSWERS);

