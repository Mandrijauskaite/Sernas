console.log('---------');
//   Susisikurt tuščią masyvą. Į tą masyvą įrašyti 10 elementų. 
//   Elementai yra su random funkcija generuoti skaičiai nuo 1 iki 6 (mesti kauliuką).
//    Masyvą atspausdinti konsolėje DONE!

function getRandomIntInclusive(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive

  }

const skaiciai = []
for (let index = 0; index < 10; index++) {
    // const element = array[index];
    // console.log(index);
    const random = getRandomIntInclusive(1, 6)
    // console.log(random);
    // skaiciai.push(random)
    skaiciai[index]=random
}
console.log(skaiciai);

