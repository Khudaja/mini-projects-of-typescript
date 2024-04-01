import inquirer from "inquirer";
let answer = 0;
let answer1 = await inquirer.prompt([{
        name: "q1",
        type: "list",
        message: "Electric bulb is filled with________?",
        choices: ["oxygen", "nitrogen", "helium"]
    },]);
if (answer1.q1 === 'nitrogen') {
    console.log("Correct Answer!!");
    answer++;
}
else {
    console.log(`Incorrect Answer!!. The correct answer is nitrogen`);
}
let answer2 = await inquirer.prompt([{
        name: "q2",
        type: "list",
        message: "What is the name of founder of Pakistan?",
        choices: ["Allama Iqbal", "Quaid-e-Azam", "Liaquat Ali Khan"]
    },]);
if (answer2.q2 === "Quaid-e-Azam") {
    console.log("Correct Answer!!");
    answer++;
}
else {
    console.log(`Incorrect Answer!!. The correct answer is Quaid-e-Azam`);
}
let answer3 = await inquirer.prompt([{
        name: "q3",
        type: "list",
        message: "Which of following organ excrete bile?",
        choices: ["gallbladder", "intestine", "liver"]
    },]);
if (answer3.q3 === "liver") {
    console.log("Correct Answer!!");
    answer++;
}
else {
    console.log(`Incorrect Answer!!. The correct answer is liver`);
}
let answer4 = await inquirer.prompt([{
        name: "q4",
        type: "list",
        message: "Heart contain ______ chambers?",
        choices: ["4", "3", "2"]
    },]);
if (answer4.q4 === "4") {
    console.log("Correct Answer!!");
    answer++;
}
else {
    console.log(`Incorrect Answer!!. The correct answer is 4 `);
}
let answer5 = await inquirer.prompt([{
        name: "q5",
        type: "list",
        message: "25*25______?",
        choices: ["525", "625", "635"]
    },]);
if (answer5.q5 === "625") {
    console.log("Correct Answer!!.");
    answer++;
}
else {
    console.log(`Incorrect Answer!!. The correct answer is 625`);
}
if (answer == 1) {
    console.log(`you got ${answer} points! `);
}
else {
    console.log(`you got ${answer} points!`);
}
if (answer == 5) {
    console.log(`hurray! got all points correct.`);
}
function point(number) { }
