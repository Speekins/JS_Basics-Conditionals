//Predict the output of the following code:

if (false || true) {
  console.log('Yes!');
} else {
  console.log('No...');
}

//expected output: 'Yes!'

//Predict the output of the following code:
if (false && true) {
  console.log('Yes!');
} else {
  console.log('No...');
}

//expected output: 'No...'

//Without running the below code, determine what will be logged to the console.

let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);

//expected output: 3.99