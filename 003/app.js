function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const bb = document.querySelector('#bb'); // dokumento užklausos parinkiklis (mygtuko suradimas); querySelectorAll - užklausa viso selektoriaus
// console.log(bb); //patikriname ar tikrai turime mygtuka, toliau prideti ivykiu stebetoja - klausytoja

console.log('SVARBU-------stebime viena veiksma Valio!!!-----------PRADZIA');
bb.addEventListener('click', e => {  //  bb - elementas; addEventListener - pridėti įvykių klausytoją; klausytojas turi du parametrus a ir b - click ir funkcija; e - eventai (renginys)
    e.stopPropagation(); // evento stabdymas
    console.log('Valio!!!'); // kai atliekamas click pasirodo uzrasas Valio!!!
});
console.log('SVARBU------------------PABAIGA');

console.log('SVARBU-------bet galima pasiimti kelis stebetojus-----------PRADZIA');
// po pirmo paspaudimo click atsiranda - Valio!!!; sekantis paspaudimas - Pelė ateina spausti mygtuko; kitas paspaudimas - Pelė išeina
bb.addEventListener('mouseover', () => { // jei ateiname ant bb elemento ir paspaudziame mouseover - pele - baigta;
    console.log('Pelė ateina spausti mygtuko'); // paspaudus virs bb turi atsirasti uzrasa
});

bb.addEventListener('mouseout', () => {  //pele - iseiti
    console.log('Pelė išeina');
});
console.log('SVARBU------------------PABAIGA');

console.log('SVARBU--------paspaudimus galime daryti ir ant tekstu----------PRADZIA');
// uzdeti ant viso list negalima, reikia imti po viena 
// addEventListener .... () i sia f-ja gali paduoti tik viena objekta.  e.target - tai elementas del kurio ivyko addEventListener
const list = document.querySelectorAll('.animal-list h2'); // querySelectorAll - užklausa viso selektoriaus

list.forEach(animal => { // forEach (kiekvienam)
    animal.addEventListener('click', e => { //
        console.log(e.target.innerText, 'Valio!!!');  // tikslinis vidinis tekstas tam, kad ant konkretaus animal paspaudus atsirastu Valio!!! Zuikis; Valio!!! Kalakutas ir t.t.
        console.log(e.target);
    });

    animal.addEventListener('mouseover', () => {
        console.log(animal.innerText, 'Pelė ateina spausti mygtuko');
    });

    animal.addEventListener('mouseout', () => {
        console.log(animal.innerText, 'Pelė išeina'); //gyvūno vidinis Tekstas
    });
});
console.log('SVARBU------------------PABAIGA');

console.log('SVARBU------------------PRADZIA');
// spaudziant mygtuka prades keistis ir tevinis elementas. Tam, kad tai nevyktu reikia keltis i pradzia ir stabdyti mygtuka e.stopPropagation(); - evento stabdymas

const bd = document.querySelector('.bd');

bd.addEventListener('click', () => {
    bd.style.backgroundColor = 'red';
});


console.log(list);
console.log('SVARBU------------------PABAIGA');

console.log('1. SVARBU------------------PRADZIA');
const kodas1 = document.querySelector('#duok-kodo');
const html = 
`
<h2>
    <i>
        Vovere
    </i>
</h2>
`; // stringas `` jie leidzia formatuoti koda - kelti kitas eilutes (kabutes neledzia) ; <i></i> teksto pasvirimas
kodas1.innerHTML = html;
con.sole.log('SVARBU------------------PABAIGA');

con.sole.log('2. SVARBU---------4 žingsniai---------PRADZIA');
const kodas2 = document.querySelector('#duok-dar-kodo');
const h2 = document.createElement('h2'); // 1.ž. sukurti elementą. Turime sukurta h2 elementa dokumente. Jis yra dar danguje. Sekantis zingsnis ji nuleis i zeme ir mes ji pamatysime
console.log(h2); // 2.ž. sukurti elemento turini. Yra danguje
h2.appendChild(vovere); // 3.ž. elemento turini ideti i elementa
kodas2.appendChild(h2); // 4.ž. elementa ideti i  body
const vovere = document.createTextNode('Vovere'); // danguje, o po h2.appendChild(vovere) nuleidzia i zeme ir pradedame matyti
console.log('SVARBU------------------PABAIGA');

con.sole.log('3. SVARBU---------būdas nuskaityti informacija panaudojant Event---------PRADZIA');
const i1 = document.querySelector('#i1');
i1.addEventListener('input', () => {
    console.log(i1.value);
});
console.log('SVARBU------------------PABAIGA');

con.sole.log('4. SVARBU-------būdas nuskaityti informacija panaudojant Event-----------PRADZIA');
const bb1 = document.querySelector('.bb1');
bb1.addEventListener('click', () => {
    console.log('Enter: ' + i1.value);
    console.log('Enter: ' + i2.value);
});
console.log('SVARBU------------------PABAIGA');

con.sole.log('5. SVARBU---------būdas nuskaityti informacija panaudojant Event---------PRADZIA');
const i2 = document.querySelector('#i2');
i2.addEventListener('change', () => {
    console.log(i2.value);
});
console.log('SVARBU------------------PABAIGA');

con.sole.log('5. SVARBU---------checkbox suradimas---------PRADZIA');
const ch = document.querySelectorAll('[type-checkbox]');
const bb2 = document.querySelector('.bb2');

bb2.addEventListener('click', () => {
    const c = []; // visa informacija apie suzymetus checkbox
    ch.forEach(checkbox => {
        if(checkbox.checked) { 
            c.push(checkbox.value);
        }
    })
    console.log(c);
});

console.log('SVARBU------------------PABAIGA');