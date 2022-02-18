/**
 * On this module you should write your answer to question #3.
 * This file would be executed with the following command:
 * $ node scritp.js 'a * (b + c)'
 */

 //const args = process.argv.slice(-1);
 //console.log(`Running question #3 with args ${args}`)
 
 /**
  * Check if a string has correct use of parenthesis.
  * 
  * @param {String} str - String to be evaluated
  * @returns {Boolean} Returns true if string is valid.
  */
 
 function parenthesisChecker(str) {
   const pila= [];
   for(let char of str){
     if(char === '(' || char === '{' || char === '['){
       pila.push(char)
     }
     if(char === ')' || char === '}' || char === ']'){
       if(pila.length === 0){
         return false
       } pila.pop()
     }
   }
   return pila.length === 0;
 };

 console.log(parenthesisChecker( 'a * (b + c)'));
 
 //const isValid = parenthesisChecker(args);
 //console.log(`parenthesisChecker("${args}") = ${isValid}`);