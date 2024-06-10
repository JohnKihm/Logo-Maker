const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const createLogo = require('./logo.js');

class CLI {
    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Enter the text you would like on your logo (up to 3 characters)'
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Enter the color of your text (keyword or hexadecimal)'
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Select a shape for your logo',
                    choices: ['circle', 'square', 'triangle']
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'Enter the color of your shape (keyword or hexadecimal)'
                }
            ])
            .then((data) => {
                return writeFile(
                    join(__dirname, '..', 'examples', 'logo.svg'),
                    createLogo(data.text, data.textColor, data.shape, data.shapeColor)
                );
            })
            .then(() => console.log('Generated logo.svg'))
            .catch((err) => {
                console.log(err);
                console.log('Oops. Something went wrong.');
            });
    }
}

module.exports = CLI;
