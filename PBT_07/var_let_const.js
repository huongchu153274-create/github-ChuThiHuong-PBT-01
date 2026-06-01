// Simple demonstrations for PBT_07
// 1) var vs let/const
var a = 1;
let b = 2;
const c = 3;
console.log('initial', a, b, c);
function testScope(){
  var a = 10;
  let b = 20;
  const c = 30;
  console.log('inside function', a, b, c);
}
testScope();
console.log('after function', a, b, c);

// 2) hoisting example
console.log('hoist x before declaration ->', typeof x); // undefined
var x = 5;
console.log('hoist x after', x);

// 3) block scope with let
if(true){
  let x2 = 'block';
  console.log('block x2', x2);
}
try{ console.log('outside block x2', x2); } catch(e){ console.log('outside block x2 -> error') }

// 4) const immutability of binding
const obj = {v:1};
console.log('obj before', JSON.stringify(obj));
obj.v = 99;
console.log('obj after mutation', JSON.stringify(obj));

// 5) template literals
const name = 'Student';
console.log(`Hello, ${name}!`);
