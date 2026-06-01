// FizzBuzz demo
console.log('FizzBuzz 1..20:');
for(let i=1;i<=20;i++){
  if(i%15===0) console.log(i,'FizzBuzz');
  else if(i%3===0) console.log(i,'Fizz');
  else if(i%5===0) console.log(i,'Buzz');
  else console.log(i);
}
