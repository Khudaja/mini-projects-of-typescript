#! /usr/bin/env node
import inquirer from "inquirer";
const computerchoice = Math.floor(Math.random() * 6 + 1);
let numberofguess = 4;
while (numberofguess > 0) {
    let answer = await inquirer.prompt([{
            name: "userguess",
            type: "number",
            message: "guess your number between 1 to 6",
        },
    ]);
    if (answer.userguess == computerchoice) {
        console.log("you won!!");
        break;
    }
    else {
        console.log("you lost!!");
    }
    numberofguess--;
}
if (numberofguess == 0) {
    console.log(`you guessed wrong the correct guess was ${computerchoice}`);
}
