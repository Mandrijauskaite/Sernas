// css: background-color
rabbit.style.backgroundColor = 'blue';

console.log(rabbit); 
console.log(rabbit);

const bars = document.querySelector('h2 + h2');
bars.style.color = 'brown';


const li = document.querySelectorAll('li');
const ul = document.querySelector('ul');

console.log(li);

// for (let i = 0; i < li.length; i++) {
//     li[i].style.color = 'pink';
// }

// li.forEach(element => console.log(element.innerText));

li.forEach((element) => {
    element.style.color = 'red';
    console.log(element.innerText);
});

console.log(ul.children);

// ul.children.forEach(a => a);

// li.style.color = 'brown'; 