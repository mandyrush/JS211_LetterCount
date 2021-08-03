'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const letterCount = (iSentence) => {
    let resultObj = {};
    // Format the sentence to lowercase, remove white spaces and remove 
    //anything that isn't a letter
    let sentence = iSentence
      .toLowerCase()
      .trim()
      .replace(/\s/g, '')
      .replace(/[^a-z]/g, '');
  
    // Sort the sentence alphabetically
    let alphaSentence = sentence
      .split('')
      .sort()
      .join('')
  
    for (let i = 0; i < alphaSentence.length; i++) {
      let letter = alphaSentence[i];
  
      // if the letter exists in the obj add one to it
      if (letter in resultObj) {
        resultObj[letter] += 1;
      } else {
        // otherwise add the letter to the obj and add one to it
        resultObj[letter] = 1;
      }
    }
    return resultObj;
}
  

const getPrompt = () => {
    rl.question('Sentence: ', (sentence) => {
        console.log(letterCount(sentence))
        getPrompt();
    });
}

// add tests
if (typeof describe === 'function') {
    console.log('add tests');
} else {
    getPrompt();
  }