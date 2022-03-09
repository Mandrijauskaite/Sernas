function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('hello');

// const - tai nekintantys. Ji sako, kad negalime padaryti priskyrimo
// let - tai kintantys.

console.log('1.--------------');

// const arr1 - pasirinkta i arr pushinama arr1.push(randomDigit); neatliekamas joks kitas veiksmas
const arr1 = []; // sukurti tuscia masyva. const - tai nekintantys

for (let i = 0; i < 10; i++) { // i masyva irasyti 10 elementu (i=0 viskas programavime prasideda nuo 0 isskyrus duomenu baze prasideda nuo 1)
    const randomDigit = rand(1, 6); // (eilute tik del aiskumo. Galima rand(1, 6) iskelti i arr1.push(randomDigit) ir parasyti taip- arr1.push(rand(1, 6)) Elementai yra su random f-ja, generuoti skaiciai yra nuo 1 iki 6
    arr1.push(randomDigit); // universalu visiems atvejams. randomDigit - atsitiktinis skaicius; push - stumti
    // arr1[i] = randomDigit; // imanoma, bet ne universalu naudojant vietoj arr1.push(randomDigit)! 
} // ciklas sukasi 10 karru, kai pasibaigia atspausdina masyva is 10 elementu

console.log(arr1); // masyva (arr1 - is 10 elementu) atspausdinti konsoleje

console.log('2.--------------');

// let sum2 -pasirinkta del to, kad reikia atlikti sum2 = sum2 + randomDigit; 
let sum2 = 0; // let - tai kintantys. Jei pasakyta, kad reikalinga suma, tada reikalingas kintamasis i kuri ta suma desime. Pradzioje mes turime 0

for (let i = 0; i < 22; i++) { // 22 random kauliuku ismetimu kartu
    const randomDigit = rand(1, 6); // sugeneruoti skaicius nuo 1 iki 6
        sum2 = sum2 + randomDigit; // paskaiciuoti sugeneruota suma. Imam savo suma sum2 ir prilyginam pries tai buvusiai sumai + randomDigit - atsitiktinis skaicius
    // sum2 += randomDigit; // tai yra ta pati eilute kaip sum2 = sum2 + randomDigit. NENAUDOTI, kad nesipainioti
}

console.log(sum2); // atspausdinti ciklui pasibaigus

console.log('3.--------------');
// let sum3 -pasirinkta del to, kad reikia atlikti sum3 = sum3 + randomDigit; 
let sum3 = 0;

for (let i = 0; i < 22; i++) { // 22 random kauliuku ismetimu kartu

    const randomDigit = rand(1, 6); //  sugeneruoti skaicius nuo 1 iki 6
    if (randomDigit % 2 === 0) { // randomDigit - atsitiktinis skaicius; randomDigit % 2 - poriniai lyginiai skaiciai
        sum3 = sum3 + randomDigit; // paskaiciuoti sugeneruota suma.
    }

    // sum3 += randomDigit; // tai yra ta pati eilute kaip sum3 = sum3 + randomDigit. NENAUDOTI, kad nesipainioti
}

console.log(sum3);
