// Additional assignments for Day 3

/* EXTRA 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

let isMale = false;
let gender = isMale ? "male" : "female";
console.log(gender)

/* EXTRA 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let a = 7
let b = 5

if (( a == 8) || (b == 8) || ( a + b == 8) || ( a - b == 8)) { 
    console.log(true)
} else {
    console.log(false)
}
    

/* EXTRA 3
 Create a variable and assign to it the concatenation of two strings.
*/

let join = "Ham" + "burg"
console.log(join)

/* EXTRA 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let x = 35
let y = 30
let z = 20


if (x > y && x > z ) {
    if (y > z) {
        console.log(x, y, z)
    } else {
        console.log(x, z, y)
    }

} else if (y > x && y > z ) {
    if (x > z) {
        console.log(y, x, z)
    } else {
        console.log(y, z, x)
    }
} else if (z > y && z > y ) {
    if (x > y) {
        console.log(z, x, y)
    } else {
        console.log(z, y, x)
    }
}


// let x = 3;
// let y = 6;
// let z = -1;

// if (x > y && x > z) {
//   if (y > z) {
//     console.log(x + ", " + y + ", " + z);
//   } else {
//     console.log(x + ", " + z + ", " + y);
//   }
// } else if (y > x && y > z) {
//   if (x > z) {
//     console.log(y + ", " + x + ", " + z);
//   } else {
//     console.log(y + ", " + z + ", " + x);
//   }
// } else if (z > x && z > y) {
//   if (x > y) {
//     console.log(z + ", " + x + ", " + y);
//   } else {
//     console.log(z + ", " + y + ", " + x);
//   }
// }




/* EXTRA 5
 Write a piece of code for finding the average of two given integers.
*/

let c = 10
let d = 6
let avg = (a + b) / 2;
console.log(avg)



/* EXTRA 6
 Write a piece of code for finding the longest of two given strings.
*/

let firstname = "ahmed"
let lastname = "adegbami"
if (firstname.length>lastname.length) {
    console.log("The first name is longer")
} else {
    console.log("The last name is longer")
}



/* EXTRA 7
 Write a piece of code for checking if a given value is a integer or not.
*/
let k = "ahmed"
if (typeof k === "number") {
    console.log(true)
} else {
    console.log(false)
}
console.log(typeof k)

/* EXTRA 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let p = (20/100) * 400
console.log(p)

/* EXTRA 9
 Write a piece of code for checking if a given number is even or odd.
*/

if (77 % 2 === 0) {
    console.log("even")
} else {
    console.log("odd")
}
    


/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
