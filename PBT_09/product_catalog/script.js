const products = [
  {id:1,name:'Sneaker X',price:1290000,img:'https://picsum.photos/seed/p1/400/300'},
  {id:2,name:'T-Shirt Pro',price:299000,img:'https://picsum.photos/seed/p2/400/300'},
  {id:3,name:'Backpack Mini',price:450000,img:'https://picsum.photos/seed/p3/400/300'},
  {id:4,name:'Headset V2',price:890000,img:'https://picsum.photos/seed/p4/400/300'}
];
const $grid = document.getElementById('products');
products.forEach(p => {
  const el = document.createElement('div'); el.className='card';
  el.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <h3>${p.name}</h3>
    <div class="price">${(p.price).toLocaleString('vi-VN')} đ</div>
  `;
  $grid.appendChild(el);
});
