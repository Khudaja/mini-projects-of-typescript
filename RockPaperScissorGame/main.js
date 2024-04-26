import inquirer from "inquirer";
const choices = ["Rock", "Paper", "Scissor"];
const computerChoice = choices[Math.floor(Math.random() * choices.length)];
let answer = await inquirer.prompt([{
        name: "input",
        type: "list",
        choices: choices,
        messsage: "enter your choice",
    },
]);
console.log(`computers choice ${computerChoice}`);
if ((computerChoice == "rock" && answer.input == "scissor") ||
    (computerChoice == "paper" && answer.input == "rock") ||
    (computerChoice == "scissor" && answer.input == "paper")) {
    console.log("computer won the game!");
}
else if (computerChoice == answer.input) {
    console.log("its a tie");
}
else {
    console.log("hurray you won the game!!");
}
