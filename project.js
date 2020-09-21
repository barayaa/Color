const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow', 'blue', 'green', '#3b5998', 'pink', 'grey', 'black', 'orange', '#6845E1'];

colorBtn.addEventListener('click', changeColor);

function changeColor(){
    //bodyBcg.style.backgroundColor = colors[3];
    let random = Math.floor(Math.random()*colors.length)
    bodyBcg.style.backgroundColor = colors[random];
}
