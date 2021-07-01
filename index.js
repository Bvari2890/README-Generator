const inquirer = require('inquirer');
const fs = require('fs');


const generateReadMe = (answers) =>
    `
    
    # ${answers.title}

    ## Description
    ${answers.description}
     
    ## Table of Contents
    *[Installation](#installation)
    *[Usage](#usage)
    *[Contributing](#contributing)
    *[License](#license)
    *[Tests](#tests)
    *[Questions](#questions)
    
    ## Installation
    ${answers.installation}
   
    ## Usage
    ${answers.usage}
   
    ## Contributing
    ${answers.contributions}
    
    ## License
    ${answers.license}
    
    ## Tests
    ${answers.tests}
    
    ## Questions
    You can find me on GitHub at ${answers.github}.  Please reach to me at 
    ${answers.email} if you have any additional questions.  
    `;


inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of the README?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please type a description of the project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What does the user need to install to run this app?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'How is this app used?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Please enter any collaborators on this project',
            name: 'contributions',
        },
        {
            type: 'list',
            message: 'What licensing did you use for this project?',
            name: 'license',
            choices: ['MIT', 'ISC', 'Apache', 'GNU GPLv3'],
        },
        {
            type: 'input',
            message:  'What commands are needed to test this app?',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
    ])

    .then((answers) => {
        const readmePageContent = generateReadMe(answers);

        fs.writeFile('README.md', readmePageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md')
        );
    });
