// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
//const questions = [];
const askQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this project?'
        },
        {
            type: 'input',
            name: 'desc1',
            message: 'What was your motivation?'
        },
        {
            type: 'input',
            name: 'desc2',
            message: 'Why did you build this project?'
        },
        {
            type: 'input',
            name: 'desc3',
            message: 'What problem does this project solve?'
        },
        {
            type: 'input',
            name: 'desc4',
            message: 'What did you learn? What were some challenges and successes?'
        },
        {
            type: 'input',
            name: 'install',
            message: 'Provide step-by-step instructions explaining how the user can install this project.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions regarding the usage of this project.'
        },
        {
            type: 'list',
            name: 'licensing',
            message: 'What license is this project operating under?',
            choices: ['MIT', 'ISC', 'Apache']
        },
        {
            type: 'input',
            name: 'contrNames',
            message: 'List your collaborators on this project.'
        },
        {
            type: 'input',
            name: 'contrProfiles',
            message: 'Providelinks to the Github profiles of your contributors'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What should the user to do to run tests on this project?'
        },
        {
            type: 'input',
            name: 'ownerGithub',
            message: 'What is your Github username?'
        },
        {
            type: 'input',
            name: 'ownerProfile',
            message: 'Provide the link to your Github profile.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'emailInstruct',
            message: 'How should the user try and contact you?'
        },
    ]);
};

// TODO: Create a function to write README file
//function writeFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    askQuestions()
    .then((data) => writeFileAsync('README.md', generateMarkdown(data)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
