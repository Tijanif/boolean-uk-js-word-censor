/*
Today's exercise: Word Censor

Repo: boolean-uk-js-word-censor

Description
Our program takes in text, a list of words to censor, what to censor them with (****, BEEP, xxx, !!!, etc), and it returns a censored version of the text.

Instructions
- Download this template => https://codesandbox.io/s/word-censor-4doxt?from-embed=&file=/index.js
- Do not use Codesanbox to code your solution
- Use the provided string as a text input to be censored
- You don't have to use prompts for now, just hard-code the rest of your user inputs
- Create a function that takes a replacement string, a word to censor, and censors the text input
- Print out the censored text to the console

Tips
- Remember that sometimes you have to change your data from one type to another, ex. string -> [array of strings]
- Remember that functions should do only one thing very well
- Think of how you can make your code readable by using functions

Challenge 1
Together with the new censored version, return a count of how many words were censored in the original text.

Challenge 2
Instead of using hard-coded inputs, use prompts to grab:
- The full text to censor
- The words to be censored
- What should replace the censored words

*/

const text =
  "Lorem, ipsum dolor sit amet, consectetur adipisicing elit, \
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
  Excepteur sint occaecat cupidatat non proident, \
  sunt in culpa qui officia deserunt mollit anim id est laborum.";


//Use the provided string as a text input to be censored
//You don't have to use prompts for now, just hard-code the rest of your user inputs
//Create a function that takes a replacement string, a word to censor, and censors the text input
//Print out the censored text to the consol