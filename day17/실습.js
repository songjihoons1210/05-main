
const title = document.querySelector('#title');
title.innerHTML = 'dom 성공';


function func2() {
    console.log('asd');
    const usernameInput = document.querySelector('#usernameInput');
    console.log(usernameInput);
    const submi = usernameInput.value;
    console.log(submi);
    const greeting = document.querySelector('#greeting');
    console.log(greeting);
    greeting.innerHTML = `름 : ${submi}`
}

function func3() {
    console.log('ddd');
    const colorBox = document.querySelector(`#colorBox`);
    console.log(colorBox);
    colorBox.style.background = 'gray';
    colorBox.style.color = 'blue';
}

function func4(){
    console.log('4번');
    const body = document.querySelector('body');
        console.log( body );
    body.classList.toggle('dark-mode');
}

function func5() {
    console.log('5번');
    const targetBox = document.querySelector('#targetBox')
    console.log(targetBox);
    targetBox.remove();
}

const items = document.querySelectorAll('.item');
console.log(items);
for(let i = 0 ; i <= items.length -1 ;  i++){
    const item = items[i];
    console.log(item);
    item.style.color = 'blue';
    item.style.fontWeight = 'bold';
}


function func7() {

const mainImage = document.querySelector('#mainImage');
console.log(mainImage);
mainImage.src.toggle = 'https://placehold.co/600x400/png'
}s