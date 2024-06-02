#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber: number = Math.floor(Math.random()*5+1);
const answer = await inquirer.prompt([
  {
    name: "userGuessNumber",
    type: "number",
    message: "Please guess a numberbetween 1 and 10",
  },
]);
if (answer.userGuessNumber === randomNumber) {
  console.log("You guessed right");
} else {
  console.log("You guessed wrong");
}
