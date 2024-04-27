#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.green("Enter Your Message:")
    },
]);
let word = answer.sentence.trim().split(/\s+/);
let wordcount = word.length;
console.log(chalk.bold.blueBright(`Your WordCount is ${wordcount}`));
console.log(word);
