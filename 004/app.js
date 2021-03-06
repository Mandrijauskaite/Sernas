function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('1.PAVYZDYS------------------PRADZIA');

const namas1 = ['Vytas', 'Aiste', 'Bebras']; // masyvas
console.table(namas1); // table gražiau atsispausdina: stulpeliu
console.log('Namo aukštis: ', namas1.length); // suzinome namo auksti - Namo aukštis: 3

console.log('1.PAVYZDYS------------------PABAIGA');


// console.log('Bebras:', namas1[2]); 


console.log('1.UZDAVINYS------------------PRADZIA');
// Sukurti naują masyvą,
// 11 aukštų, kurio elementai atsitiktiniai skaičiai nuo 5 iki 25 DONE!

const hause1 = [];
for (let i = 0; i < 11; i++) {
    hause1.push(rand(5, 25)); // žiūrėti į viršuje esantį masyvą 'rand(min, max)'
}
console.table(hause1);
console.log('Bebras:', namas1[2]); // jei norime nurodyti konkretu adresa
console.log('1.UZDAVINYS------------------PABAIGA');


console.log('2.PAVYZDYS---------4 masyvai: namas ir 3 aukstai---------PRADZIA');
const namas2 = [ // namas
//      0       1   laiptines
    ['Vytas', 'Lina'], // 0 aukstas
    ['Aiste', 'Alina'], // 1 aukstas
    ['Bebras', 'Žirafa'] // 2 aukstas
];
console.log('Bebras:', namas2[2][0]); // jei norime nurodyti konkretu adresa; nes namas is 2 laiptiniu (0, 1) ir 3 aukstu (0, 1, 2); aukste po du butus
console.table(namas2); 
console.log('namo aukštis: ', namas2.length);
console.log('2.PAVYZDYS------------------PABAIGA');


console.log('2.UZDAVINYS------------------PRADZIA');
// SUKURTI masyva is 11 elementu
// kiekvienas elementas yra masyvas is 2 elementu - 
// atsitiktiniu skaiciu nuo 5 iki 25

const hause2 = []; // namo constanta (planas); sukuriame tuscia nama []
for (let i = 0; i < 11; i++) { // darome du ciklus namo ...
    // aukstas
    const floor = []; // auksto constanta (planas); sukuriame tuscia laiptine []
    for (let k = 0; k < 2; k++) { // ... ir auksto (po du butus)
        floor.push(rand(5, 25)); // tiesioginis apgyvendinimas
    }
    // aukstas
    hause2.push(floor);
}
console.log('2.UZDAVINYS------------------PABAIGA');


console.log('3.UZDAVINYS------------------PRADZIA');
// Imame vokišką hause1 (is 11 elementu) ir 
// naudodami for, o poto forEach nuskaitome, 
// kiekvieną narį atskirai išspauszdindami consolėje

console.table(hause1);
console.table(hause2);
for (let i = 0; i < hause1.length; i++) { // for klasikinis kalbos konstruktas (ciklas) yra beveik visose kalbose, forEach (ne ciklas) - kalbos savybe
    console.log(hause1[i]); // i -> 0, 1, 2... 9, 10 (masyva is 11 elementu)
}

console.log('--------forEach uzrasymo pavyzdziai----------PRADZIA');
// hause1.forEach(); // forEach (ne ciklas) - kalbos savybe (masyvas). forEach()-masyvas ir jo metodas
// hause1.forEach((el) => {}); // metodo viduje irasyta f-ja (el) => {}
// hause1.forEach((el) => { // funkcijos vidule padarytas tarpas kazkam rasyti

// });
console.log('--------forEach uzrasymo pavyzdziai----------PABAIGA');

console.log('SVARBU----------nuo siol rekomenduojama naudoti visada vietoj for kai turime masyva ir gaminame hause--------PRADZIA');
// hause1.forEach(el => console.log(el)); // jei vienas argumentas skliausteliai praleidziami. Tas pats kas apacioje tik sudeta i eilute
hause1.forEach(el => { //Veikimas: is hause1 ima po viena elem. ir imeta i (el) i -> 0, 1, 2... 9, 10. => sako daryk ka nori
    console.log(el); // atspausdiname elementa
});
console.log('SVARBU----------nuo siol rekomenduojama naudoti visada vietoj for kai turime masyva ir gaminame hause--------PABAIGA');

// forEach - megsta tvarka, skaiciai eina is eiles
// for of - naudojamas kur nera tvarkos
// for in - naudojamas kur nera tvarkos

console.log('3.UZDAVINYS------------------PABAIGA');


console.log('4.UZDAVINYS------------------PRADZIA');
console.table('-------------1 užrašymo variantas------------------');
for (let i = 0; i < hause2.length; i++) { // einame per aukstus, kiek lipame nusistatome per hause2.length

    for (let k = 0; k < hause2[i].length; k++) { // einame per butus, kiek einame nusistatome per hause2[i].length (aukste esanciu butu)

        console.log(hause2[i][k]); //  i -> 0, 1, 2... 9, 10

    }

}

console.table('-------------2 užrašymo variantas------------------');
// lipame per aukstus
hause2.forEach(floor => { // imame nama (hause2), gauname (floor) auksta
    // gauname auksta
    // tada lipame per aukstus
    floor.forEach(flat => { // gave auksta einame per ji, gauname buta (flat)
        // gauname butus
        console.log(flat); // buta atsispausdiname
    });

});
console.log('4.UZDAVINYS------------------PRABAIGA');
