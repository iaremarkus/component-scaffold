import inquirer from "inquirer";
import { exec } from "child_process";
import { execFn } from "./execFn.mjs";

const questions = [
  {
    type: "input",
    name: "fileName",
    message: "What is the name of the component?",
    validate(text) {
      if (text.split("").length < 1) return "Please enter at least 1 character as your file name";

      return true;
    },
    waitUserInput: true
  },
  {
    type: "checkbox",
    message: "What files would you like to create",
    name: "files",
    choices: [
      {
        name: "[fileName].tsx",
        checked: true
      },
      {
        name: "index.ts",
        checked: true
      },
      {
        name: "[fileName].stories.tsx"
      },
      {
        name: "[fileName].module.css"
      },
      {
        name: "[fileName].test.ts"
      }
    ]
  }
];

inquirer
  .prompt(questions)
  .then(answers => exec(execFn(answers.fileName)))
  .catch(error => console.log("something borked"));
