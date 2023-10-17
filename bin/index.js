#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter something: ", (userInput) => {
  const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
    backgroundColor: "#555555",
  };
  const msg = chalk.white.bold(userInput);
  const msgBox = boxen(msg, boxenOptions);
  console.log(msgBox);
  rl.close();
});
