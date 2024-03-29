#! /usr/bin/env node

import inquirer from "inquirer";
let pin = 1234
let balance = 100000
console.log("Welcome!")
    let pinans = await inquirer.prompt([{
        name : "pin",
        type : "number",
        message : "Enter Your Pin Code:",},
    ]);
    if (pin == pinans.pin){
        console.log("your pin is correct!!")
        let option = await inquirer.prompt([{
            name : "options",
            type : "list",
            message : "Select Your Option:",
            choices : ["withdraw" , "balance check", "deposit", "fast cash"],}
        ]);
        if (option.options == "fast cash"){
            
            let amountfastcash = await inquirer.prompt([{
                name : "fastcash",
                type : "list",
                message : "Select The Amount Tou Want To Withdraw:",
                choices : [500, 1000, 5000, 10000],
            }
            ])
            console.log(`Your Remaining Balance is ${balance - amountfastcash.fastcash} Rs.`);
        } else if (option.options == "balance check"){
            console.log(balance)
        } else if (option.options == "deposit"){
            let amountdeposit = await inquirer.prompt([{
                name : "deposit",
                type : "number",
                message : "Select The Amount You Want To Deposit:",
                }
            ]) 
            console.log(`you deposited ${amountdeposit.deposit} amount of Rs.`)  
            console.log( `your total balance is ${balance + amountdeposit.deposit}`);
        } else if (option.options == "withdraw"){
            let amountwithdraw = await inquirer.prompt([{
                name : "withdraw",
                type : "number",
                message : "Enter The Amount To Withdraw:"
            },])
            if(amountwithdraw.withdraw <=balance){
                console.log(`you withdraw ${amountwithdraw.withdraw} Rs.`)
                console.log(`Your Remaining Balance is ${balance - amountwithdraw.withdraw} Rs.`);
            } else {
                console.log(`You Don't Have Enough Balance.`)
            }
        }
            
    }else {
        console.log("Incorrect Pin!!")
    }

