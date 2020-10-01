// generate random number
var n = Math.random();
// n = (n * 6);
// console.log(Math.ceil(n));

// the love calculator
// var firstPerson = prompt("Name of first person:");
// var secondPerson = prompt("Name of second person:");

var match = Math.ceil(n * 100);
// console.log(match);
// console.log(firstPerson + " and " + secondPerson + " have a " + match + "% match rate!");
if (match > 70) {
    console.log("Your love score is " + match + "% You love each other like Kanye loves Kanye!")
} else if (match > 30 && match <= 70) {
    console.log("Your love score is " + match + "%")
} else {
    console.log("Your love score is " + match + "% You go together like cat and dog!")
}
