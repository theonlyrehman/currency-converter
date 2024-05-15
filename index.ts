#! /usr/bin/env node

import inquirer from "inquirer";


const currency:any = {
    USD: 1, //base currency
    EUR: 0.92,
    GBP: 0.79,
    INR: 83.49,
    PKR: 278
};

let answer = await inquirer.prompt (
    [
        {
            name: "from",
            message: "Enter from currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "INR", "PKR"]
        },
        {
            name: "to",
            message: "Enter to currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "INR", "PKR"]
        },
        {
            name: "amount",
            message:"Enter you amount",
            type: "number"
        }
    ]
)

let fromAmount = currency[answer.from]

let toAmount = currency[answer.to]

let amount = answer.amount

let baseAmount = amount / fromAmount // USD base amount

let convertedAmount = baseAmount * toAmount

console.log(convertedAmount);