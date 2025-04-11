"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Isiah Reyes
      Date:   04-09-25

      Filename: project06-01.js
*/

/* declaring the variables */
let submitButton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");

/* creating an event listener */
submitButton.addEventListener("click", anonymous);

/* if else function in the anonymous function */
function anonymous() {
      if (document.getElementById("pwd").validity.rangeUnderflow) {
            text = ("Your password must be at least 8 characters with at least one letter and number");
      } else if (document.getElementById("pwd").validity.patternMismatch) {
            text = ("Your passwords don't match");
      } else {
            pwd.setCustomValidity("");
      }
}

