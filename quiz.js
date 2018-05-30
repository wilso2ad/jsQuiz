/* questions from Monty Python and the Holy Grail
*/
var questions = 5;
var questionsLeft = "[" +questions + " questions left]";
var correct = 0;
//1 question 1
var state = prompt("In what state is the Kentucky Derby run? "+ questionsLeft);
questions -= 1;
questionsLeft = "[" +questions + " questions left]";
if (state.toLowerCase() === 'kentucky') {
  correct += 1
}
//2 question 2
var winner = prompt("Who won the 2018 Kentucky Derby? "+ questionsLeft);
questions -= 1;
questionsLeft = "[" +questions + " questions left]";
if (winner.toLowerCase() === 'justify') {
  correct += 1
}
//3 question 3
var drink = prompt("What is the official drink of the Kentucky Derby? "+ questionsLeft);
questions -= 1;
questionsLeft = "[" +questions + " questions left]";
if (drink.toLowerCase() === 'mint julep') {
  correct += 1
}
//4 question 4
var ingredient = prompt("What is the main ingredient of the official drink of the Kentucky Derby? "+ questionsLeft);
questions -= 1;
questionsLeft = "[" +questions + " questions left]";
if (ingredient.toLowerCase() === 'bourbon') {
  correct += 1  
}
//5 question 5
var city = prompt("In what city does the Kentucky Derby take place? "+ questionsLeft);
questions -= 1;
questionsLeft = "[" +questions + " questions left]";
if (city.toLowerCase() === 'louisville') {
  correct += 1
}


//final result
if (correct === 5) {
  alert("CONGRATULATIONS! You answered all questions correctly!");
} else if (correct >=3 ) {
  alert("Not bad, you answered " + correct + " correctly");
} else if (correct >= 1) {
  alert("meh, " + correct + " out of 5 ain't bad");
} else {
  alert("You got no questions correct.");
}
