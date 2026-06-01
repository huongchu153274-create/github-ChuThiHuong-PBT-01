// Simple calculator demo for PBT_07
function add(a,b){ return a+b; }
function sub(a,b){ return a-b; }
function mul(a,b){ return a*b; }
function div(a,b){ if(b===0) return 'Error: divide by zero'; return a/b; }

console.log('calculator demo:');
console.log('2 + 3 =', add(2,3));
console.log('10 - 4 =', sub(10,4));
console.log('6 * 7 =', mul(6,7));
console.log('20 / 5 =', div(20,5));
console.log('5 / 0 =', div(5,0));
