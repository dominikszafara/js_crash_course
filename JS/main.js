//

/*
alert('Hello World');
console.error('This is an error!');
console.warn('This is a warning!')


// var, let, const

let age = 30;
age = 31;
console.log(age);

const age = 20;
age = 21;
console.log(age);
*/

//data types

// Strings, Numbers, Boolean, null, undefined, Symbol

const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
    const name = prompt('Enter a new name');
    para.textContent = `Player 1: ${name}`;
}

