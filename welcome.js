
const button = document.getElementById('button');
const colors = ['red','orange','yellow','green','blue','rebeccapurple','violet'];
function change(){
    document.body.style.background = colors[Math.floor(7*Math.random())];
}
button.addEventListener('click',change);
