import * as formatAnswers from "./answers.js";
/* One
  Write a function that returns the sum of two numbers
*/

/* Two
  Write a function that combines an array of strings 
  into a single string.
  If the parameter is NOT an array, message the user that
  that data type is not accepted
*/

/* Three
  Using a regular expression, remove the following characters:
  < > = \
  from the following string:
  file:\\wu>bbal<ubba=dubb//le.mp4
*/

export default () =>
  Object.keys(formatAnswers)
    .map(
      (item, i) =>
        `<div class="answers">
        <div>${item}</div> <div>${formatAnswers[item]}</div>
       </div>`
    )
    .join("");
