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
