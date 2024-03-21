#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    { name: 'firstnumber',
        type: 'number',
        message: 'enter first number' },
    { name: 'secondnumber',
        type: 'number',
        message: 'enter second number' },
    { name: 'operator',
        type: 'list',
        message: 'enter your desired operator',
        choices: ['multiplication', 'division', 'addition', 'subraction', 'module'] },
]);
if (answer.operator === 'multiplication') {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === 'division') {
    console.log(answer.firstnumber / answer.secondnumber);
}
else if (answer.operator === 'addition') {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === 'subraction') {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === 'module') {
    console.log(answer.firstnumber % answer.secondnumber);
}
