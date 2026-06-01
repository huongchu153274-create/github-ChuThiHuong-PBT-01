// Guess number demo - simulate guesses and log outcome
(function(){
  const target = 7; // fixed for demo
  const guesses = [3,5,9,7];
  console.log('Guess number demo: target=', target);
  for(const g of guesses){
    if(g === target){ console.log('Guess', g, '-> correct'); break; }
    else console.log('Guess', g, '-> wrong');
  }
})();
