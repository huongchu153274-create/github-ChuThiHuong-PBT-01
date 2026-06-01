// Student data demo
const students = [
  {name:'An', scores:[8,9,7]},
  {name:'Binh', scores:[6,7,6]},
  {name:'Chi', scores:[9,9,10]}
];
function avg(arr){ return Math.round((arr.reduce((a,b)=>a+b,0)/arr.length)*100)/100; }
console.log('students:');
students.forEach(s=> console.log(s.name, 'avg=', avg(s.scores)));
const top = students.reduce((a,b)=> avg(a.scores) > avg(b.scores) ? a : b);
console.log('top student:', top.name, 'with avg', avg(top.scores));
