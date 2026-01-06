const {add}=require('./calculator/add');
const {sub}=require('./calculator/sub');
const {mul}=require('./calculator/mul');
const {div}=require('./calculator/div');

console.log("Addition:",add(10,5));
console.log("Subtraction:",sub(10,5));
console.log("Multiplication:",mul(10,5));
console.log("Division:",div(10,5));