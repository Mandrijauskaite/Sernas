function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const array = [5, 9, 6, 3, 7, 9, 3, 9, 7, 0, 0, 7];
const rusiuotuvas = function(a, b) { return b - a };
array.sort(rusiuotuvas);


const rabbit = document.querySelector('h1');

rabbit.style.color = 'yellow';
// css: background-color
rabbit.style.backgroundColor = 'blue';

console.log(rabbit);

const bars = document.querySelector('h2 + h2');
bars.style.color = '#ff0000';

console.log('2.UZDAVINYS------------------PRADZIA');
const li = document.querySelectorAll('li'); // grupe li - node list (mazgų sąrašas) pavidalu
const ul = document.querySelector('ul'); // grupe ul - HTMLCollection (kolekcijos) pavidalu

console.log(li);

// for (let i = 0; i < li.length; i++) { // paimam grupe li einam per node list 
//     li[i].style.color = 'pink'; // nuspalviname spalva
// } // sis variantas tinkamas egzamine, bet netiks darbdaviui

// li.forEach(element => console.log(element.innerText));

// li.forEach(element => element.style.color = 'red'); // maksimaliai sutrumpinta forEach sintakse "eroFunckin" (veikia kaip sort), 
// tai ne ciklas. Jis eina per masyva ir eiles tvarka ismetineje po viena elementa

// li.forEach(element => console.log(element.innerText)); // supaprastintas ciklas. Naudojamas kai elementas vienas. Gautume sarasa is keturiu elementu


console.log('SVARBU------------------PRADZIA');
// Mokytis tik sita cikla
li.forEach((element, i) => { // Imam node list (mazgų sąrašas), forEach (kiekvienam) - jis ima po viena po viena zuiki ir perkelia i (element, i)
    element.style.color = 'red'; // => tada paimame ta elementa ir sakome mes norime tavo stiliaus spalvos
    console.log(element.innerText, i); // 
});
console.log('SVARBU------------------PABAIGA');
console.log('1.UZDAVINYS------------------PABAIGA');

// 3 budai kaip iteruoti ul - HTMLCollection zr. https://dev.to/isabelxklee/how-to-loop-through-an-htmlcollection-379k
console.log(ul.children);

// ul.children.forEach(a => a);

// li.style.color = 'brown';

console.log('2.UZDAVINYS------------------PRADZIA');
const animals = document.querySelectorAll('.animal-list h2'); // .animal-list h2 zr. html. 
// querySelectorAll - viso selektoriau uzklausa (paieska)

// GYVUNU SARASA NUSPALVINTI KOKIA NORS SPALVA
animals.forEach((element) => { // Imam sąraša animals, forEach (kiekvienam) - jis ima po viena po viena zuiki ir perkelia i (element, i)
    element.style.color = 'green'; // => tada paimame ta elementa ir sakome mes norime tavo stiliaus spalvos
});

// NUSPALVINTI SARASA GELTONA IR MELYNA SPALVOMIS (spalvas galima daryti ir '#ff0000')
animals.forEach((element, i) => { // Imam sąraša animals, forEach (kiekvienam) - jis ima po viena po viena zuiki ir perkelia i (element, i)
    if (i % 2) { // i % 2 - imam iteratoriu priskiriam % 2, poriniai lyginiai skaiciai nusidazo geltonai
        element.style.color = 'yellow';
    } else { 
        element.style.color = 'blue'; // like neporiniai skaiciai nusidazo melynai 
    }
});
console.log('2.UZDAVINYS------------------PABAIGA');