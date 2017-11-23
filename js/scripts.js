// first script

var name = prompt('Enter your name');
alert('Hello, ' + name);
console.log('Hello, ' + name);

// alert('test');
// the function above has been commented and will  be executed


/*

alert('test');
the function above has been commented and will not be executed
*/


// console.log(comment is blocked);


// zadanie 1
var question = prompt('Do you like strawberries?');

switch (question.toLowerCase()) {
  case 'yes':
    alert('Great, me too!');
    break;
  case 'no':
    alert('really?');
    break;
  default:
    alert("You did not give a clear answer, so you're probably still wondering.");
}

// zadanie 2
var a = 5;
var h = 7;
var triangleArea = a*h/2;

console.log(console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea));

//zadanie 3

var a = 1;
var b = 3;
var value =[(a + a) - (2 * a * b) + (b * b)];

console.log(value);

if (value > 0) {
  console.log("wynik dodatni");
} else {
  console.log("wynik ujemny");
}

if (value == 0) {
  console.log("wynik rowny jest zero");
} else {
  console.log("wynik jest rozny od zera");
}
