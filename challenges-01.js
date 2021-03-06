// Challenge 1: Advanced BMI Calculator
function bmiCalculator (weight, height) {
    var bmi = weight / (Math.pow(height, 2));
    var interpretation;

    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <=24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    } else {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    // Your BMI is <bmi>, so you are underweight.
    // Your BMI is <bmi>, so you have a normal weight.
    // Your BMI is <bmi>, so you are overweight.
    return interpretation;
}

console.log(bmiCalculator(95, 1.8));

// Challenge 2: Is it a Leap year?
function isLeap(year) {

/**************Don't change the code above****************/
    //Write your code here.
    var checkLeap;

    if (year % 4 === 0) {
        checkLeap = "Leap year.";
    } else if (year % 100 === 0) {
        checkLeap = "Not leap year.";
    } else if (year % 400 === 0) {
        checkLeap = "Leap year.";
    } else {
        checkLeap = "Not leap year.";
    }

    return checkLeap;


/**************Don't change the code below****************/

}

console.log(isLeap(1989));

// Challenge 3: Guest List
var guestList = ['Angela', 'Jack', 'Matt', 'Pam', 'James', 'Lara', 'Jason'];
var isGuest = guestList.includes('Matt');

if (isGuest) {
    console.log('Welcome!');
} else {
    console.log('Sorry maybe next time!');
}

// // alternate solution for browser
// var guestList = ['Angela', 'Jack', 'Pam', 'James', 'Lara', 'Jason'];
// var name = prompt('What is your name?');
// var isGuest = guestList.includes(name);
//
// if (isGuest) {
//     alert('Welcome!');
// } else {
//     alert('Sorry maybe next time!');
// }

// Challenge 4: FizzBuzz
var output = [];
var count = 1;

// function fizzBuzz() {
//     if (output.length === 0) {
//         output.push(1);
//     } else {
//         lastNum = output[output.length - 1];
//         lastNum++
//         output.push(lastNum);
//     }

//     console.log(output);
// }
function fizzBuzz() {
    // begin while loop
    while (count <= 100) {
        // conditionals for count
        if ((count % 3 === 0) && (count % 5 === 0)) {
            output.push('FizzBuzz');
        } else if (count % 3 === 0) {
            output.push('Fizz');
        } else if (count % 5 === 0) {
            output.push('Buzz');
        } else {
            output.push(count);
        }
        count++;
    }

    console.log(output);

}

fizzBuzz();

// Challenge 5: Random person will pay for lunch
nameList = ['Bob', 'Maria', 'Whitney', 'Terry', 'Matt'];

function whosPaying(names) {

/******Don't change the code above*******/

    //Write your code here.
    var n = Math.random();
    n = Math.floor(n * names.length);

    // test the lower and high limits
    var lowerLim = Math.floor(0 * names.length);
    var higherLim = Math.floor(0.99999 * names.length);
    console.log(lowerLim, higherLim);

    // console.log(names[n] + " is going to buy lunch today");
    return names[n] + " is going to buy lunch today";

/******Don't change the code below*******/
}

whosPaying(nameList);

// Challenge 6: 99 Bottles of Beer on the Wall
function beer(bottles) {
    // initialize variables
//     var count = 0;
    var minusBeer;

    while (bottles > 0) {
        minusBeer = bottles - 1;

        if (bottles > 2) {
            console.log(bottles + ' bottles of beer on the wall, ' + bottles + ' bottles of beer.  Take 1 down, pass it around ' + minusBeer + ' bottles of beer on the wall.');
        } else if (bottles === 2) {
            console.log(bottles + ' bottles of beer on the wall, ' + bottles + ' bottles of beer.  Take 1 down, pass it around ' + minusBeer + ' bottle of beer on the wall.');
        } else {
            console.log(bottles + ' bottle of beer on the wall, ' + bottles + ' bottle of beer.  Take 1 down, pass it around no more bottles of beer on the wall.');
        }

        bottles--;

    }
}

beer(99);

// Challenge 7: Refactor FizzBuzz with "for loop"
function fizzBuzzForLoop() {
    // begin while loop
    for (var count = 1; count <= 100; count++) {
        // conditionals for count
        if ((count % 3 === 0) && (count % 5 === 0)) {
            output.push('FizzBuzz');
        } else if (count % 3 === 0) {
            output.push('Fizz');
        } else if (count % 5 === 0) {
            output.push('Buzz');
        } else {
            output.push(count);
        }
    }

    console.log(output);
}

fizzBuzzForLoop();

// Challenge 8: Fibonacci Generator
function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    var sequenceList = [];
    var sumOfLastTwo;

    //Write your code here:
    for (var i = 1; i <= n; i++) {
        if (i === 1) {
            sequenceList.push(0);
        } else if (i === 2) {
            sequenceList.push(1);
        } else {
//             console.log('LAST TWO: ', sequenceList[i-3], sequenceList[i-2]);
//             console.log('SEQUENCE: ', sequenceList[1]);
//             console.log('i is: ', i);
            sumOfLastTwo = sequenceList[i-3] + sequenceList[i-2];
            sequenceList.push(sumOfLastTwo);
        }
    }

    return sequenceList;




    //Return an array of fibonacci numbers starting from 0.

//Do NOT change any of the code below 👇
}

console.log(fibonacciGenerator(13));
