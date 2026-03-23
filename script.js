document.addEventListener('DOMContentLoaded',()=>{
document.querySelectorAll('.subscribeBtn').forEach(b=>b.onclick=()=>alert('Thank you for subscribing.'));

function getCart(){return JSON.parse(sessionStorage.getItem('cartItems'))||[];}
function saveCart(i){sessionStorage.setItem('cartItems',JSON.stringify(i));}

document.querySelectorAll('.add-to-cart').forEach(b=>{
b.onclick=()=>{
let t=b.closest('.card')?.querySelector('h3')?.textContent||'Item';
let c=getCart(); c.push(t); saveCart(c);
alert('Item added to the cart.');
};
});

let modal=document.getElementById('cartModal');
let list=document.getElementById('cartItemsList');
let empty=document.getElementById('emptyCartMessage');

if(document.getElementById('viewCartBtn')){
document.getElementById('viewCartBtn').onclick=()=>{
modal.style.display='flex';
let items=getCart(); list.innerHTML='';
if(items.length===0){empty.style.display='block';}
else{empty.style.display='none'; items.forEach(i=>{let li=document.createElement('li');li.textContent=i;list.appendChild(li);});}
};
}

if(document.getElementById('closeCartBtn')){
document.getElementById('closeCartBtn').onclick=()=>modal.style.display='none';
}

if(document.getElementById('modalClearCart')){
document.getElementById('modalClearCart').onclick=()=>{sessionStorage.clear();alert('Cart cleared.');location.reload();}
}

if(document.getElementById('modalProcessOrder')){
document.getElementById('modalProcessOrder').onclick=()=>{sessionStorage.clear();alert('Thank you for your order.');location.reload();}
}

let form=document.getElementById('contactForm');
if(form){
form.onsubmit=(e)=>{
e.preventDefault();
localStorage.setItem('bookHavenContact',JSON.stringify({
name:document.getElementById('name').value,
email:document.getElementById('email').value,
message:document.getElementById('message').value
}));
alert('Thank you for your message.');
form.reset();
};
}
});