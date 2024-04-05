#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
let exit;
while (exit != "Exit") {
    let tasks = await inquirer.prompt([{
            name: "task",
            type: "list",
            message: "What do you want to do?",
            choices: ["Add", "Delete", "Addmore", "Read", "Exit", "Update"]
        }]);
    if (tasks.task == "Add") {
        while (condition) {
            let questions = await inquirer.prompt([{
                    name: "q1",
                    type: "input",
                    message: "What would you like to add in your todos?",
                },
                {
                    name: "q2",
                    type: "confirm",
                    message: "Would you like to add more in your todos?",
                    default: "true",
                },]);
            todos.push(questions.q1);
            console.log(todos);
            condition = questions.q2;
        }
    }
    else if (tasks.task == "Addmore") {
        let update = await inquirer.prompt([{
                name: "q3",
                type: "input",
                message: "What do you want to add more in your todos?",
            },]);
        todos.push(update.q3);
        console.log(todos);
        console.log("Task added successfully!");
    }
    else if (tasks.task == "Delete") {
        if (todos.length > 0) {
            let deletetask = await inquirer.prompt([{
                    name: "deletetask",
                    type: "list",
                    message: "What do you want to delete?",
                    choices: todos,
                }]);
            let deleted = todos.indexOf(deletetask.deletetask);
            todos.splice(deleted, 1);
            console.log(`Task deleted successfully.`);
        }
        else {
            console.log(`Your todos List is empty.`);
        }
    }
    else if (tasks.task == "Read") {
        if (todos.length > 0) {
            console.log(todos);
        }
        else {
            console.log("Your todos list is empty!!");
        }
    }
    else if (tasks.task == "Update") {
        let updatetask = await inquirer.prompt([{
                name: "update",
                type: "list",
                message: " What do you want to update in your todos list?",
                choices: todos,
            },
            { name: "updatedElement",
                type: "input",
                message: "Enter the Task:"
            }
        ]);
        // Find the index of the task to update
        let updateitem = todos.findIndex(task => task === updatetask.update);
        // Update the task at the found index with the new task
        todos.splice(updateitem, 1, updatetask.updatedElement);
        console.log(todos);
        console.log("Task updated sucessfully");
    }
    else if (tasks.task == "Exit") {
        exit = "Exit";
        console.log(`You sucessfully exited the todos list`);
    }
}
