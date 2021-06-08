// If statement
// If...else statement
// If...else if statement
// Switch statement

if (3 < 5) {
  console.log("Yeah I will be executed!");
}

var myName = "Hafijur";
if (myName === "Hafijur") {
  console.log("You are allowed!");
}

var myAge = 20;
if (9 > 10) {
    console.log('Good to go');
}
if (myAge >= 20) {
    console.log('You are adult!')
}
if (myAge < 20) {
    console.log('You are not adult');
}

var hisAge = 21;
if (hisAge > 20 && hisAge < 60) {
    console.log('You are a young person');
}

var age = 21;
if (age > 18) {
  console.log('Now you are Adult');
} else {
  console.log('No you are not aged enough to be an Adult');
}

var whatDay = 'Sunday';
if (whatDay === 'Friday') {
  console.log('It is closed today');
} else if (whatDay === 'Thursday') {
  console.log('It is partically closed');
} else if (whatDay === 'Saturday') {
  console.log('Some offices are closed today');
} else {
  console.log('It is normal working day today');
}

// Nestion conditionals statement

var num = 10;
if (num > 1) {
  if (num > 10) {
    console.log('Greater than 10');
  } else {
    console.log('Somewhere between 2 - 10');
  }
}

// Task 
var a = 100;
var b = 400;
var c = 700;
if(a > b && c) {
  console.log(a);
} else if (b > c && a) {
  console.log(b);
} else {
  console.log(c)
}