Directions:
/*-- Call the emotions() function so that it prints the output you see below, but instead of passing the 
laugh() function as an argument, pass an inline function expression instead.--*/

//sample code
/*-- emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes --*/

/*--
Note - We check your solution against a limited set of test-cases that check the minimum requirements,
 as mentioned in the quiz. Give the exercise a strong effort, trying to pass all test cases, before 
 comparing your code with the solution. --*/
 
 // emotions() function definition

function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression
emotions ("happy", function(num) {
    var sound = ""; // Local variable
    //Iterate
    for (var i = 0 ; i < num ; i++) {
        sound = sound + "ha" ;  
    }
    sound = sound +"!"; 
    return sound; 
});