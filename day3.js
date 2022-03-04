/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

let dataType = "The main data tpyes are numbers i.e 15, 15.5, strings i.e 'ahmed' ,'10', boolean i.e false, true, null i.e to empty intentional & undefined i.e default value"
console.log(dataType)

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

let variable = "variable is like a container for keeping your stuffs (inputs). You can add, remove, change or delete the stuffs"
console.log(variable)

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

console.log(12 + 20);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12
console.log(x)

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe"
console.log(name)

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

x -= 12
console.log(x)

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john"
let name2 = "John"

console.log(name1 === name2)
console.log(name1.toLowerCase() === name2.toLowerCase())

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

// This is the If example
x = null
x = 8;

if (x === 0) {
    console.log("zero")
} else if (x === 1) {
    console.log("one")
} else if (x === 2) {
    console.log("two")
} else if (x === 3) {
    console.log("eight")
} else if (x === 4) {
    console.log("eight")
} else if (x === 5) {
    console.log("eight")
} else if (x === 6) {
    console.log("eight")
} else if (x === 7) {
    console.log("eight")
} else if (x === 8) {
    console.log("eight")
} else if (x === 9) {
    console.log("nine")
} else {
    console.log("it is not a valid number")
}

// This is the switch block example
// Here, let use y so as not to duplicate x

let y = 4

switch (y) {
    case 1:
        console.log("one")
        break
    case 2:
        console.log("two")
        break
    case 3:
        console.log("three")
        break
    case 4:
        console.log("four")
        break
    case 5:
        console.log("five")
        break
    default:
        console.log("number is <1 or >5")
        break
}



/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

score = 39

let result = (score > 50) ? "Pass, well done!" : "Fail, try again!";
console.log(result)

if (score > 50) {
    let mark = "pass"
    console.log(mark)
} else {
    mark = "fail"
    console.log(mark)
}


/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
