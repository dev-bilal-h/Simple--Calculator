#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green("       WELCOME TO B23 SIMPLE CALCULATOR       "))

const answer = await inquirer.prompt([
  { message: chalk.cyanBright("Enter first number"), type: "number", name: "firstNumber" },
  { message: chalk.cyanBright("Enter second number"), type: "number", name: "secondNumber" },
  {
    message: chalk.magentaBright("Select one of the operators to perform operation"),
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction", "Multiplication", "Division"],
  },
]);

// Conditional statement
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Substraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);  
} else {
  console.log("please select valid operator");
}
