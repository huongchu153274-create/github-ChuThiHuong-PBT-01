// Restaurant bill demo: items, tax, tip
const items = [ {name:'Pho', price:5}, {name:'Spring Roll', price:3}, {name:'Juice', price:2} ];
function subtotal(items){ return items.reduce((s,i)=>s+i.price,0); }
function taxAmount(sub, rate=0.1){ return Math.round(sub*rate*100)/100; }
function tipAmount(sub, percent=0.15){ return Math.round(sub*percent*100)/100; }
const sub = subtotal(items);
const tax = taxAmount(sub);
const tip = tipAmount(sub);
const total = Math.round((sub+tax+tip)*100)/100;
console.log('items:', items.map(i=>i.name).join(', '));
console.log('subtotal =', sub);
console.log('tax =', tax);
console.log('tip =', tip);
console.log('total =', total);
