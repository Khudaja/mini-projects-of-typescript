#! /usr/bin/env node
import inquirer from "inquirer";
let currency = {
    USD: 1, //BASE CURRENCY
    PKR: 277.53,
    INR: 83.30,
    QAR: 3.64,
    TRY: 32.07,
    SAR: 3.75,
};
let answer = await inquirer.prompt([{
        name: "from",
        type: "list",
        message: "Select from currency",
        choices: ['USD', 'PKR', 'INR', 'QAR', 'TRY', 'SAR']
    },
    { name: "to",
        type: "list",
        message: "Select to currency",
        choices: ['USD', 'PKR', 'INR', 'QAR', 'TRY', 'SAR']
    },
    { name: "amount",
        type: "number",
        message: "Enter your amount:",
    },]);
let fromAmount = currency[answer.from]; //acess the property of object //DYNAMIC APROACH //exchange rate
let toAmount = currency[answer.to]; //exchangr rate
let useramount = answer.amount;
let baseamount = useramount / fromAmount; //USD base currency
let convertedAmount = baseamount * toAmount;
console.log(convertedAmount);
