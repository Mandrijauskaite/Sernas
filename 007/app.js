function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log('1.UZDAVINYS------------------PRADZIA');
console.log('1.UZDAVINYS------------------PABAIGA');
console.log('SVARBU------------------PRADZIA');
console.log('SVARBU------------------PABAIGA');

fetch('https://jsonplaceholder.typicode.com/posts/81') // GET metodas
    .then(response => response.json()) // then -> laukimas atsakymo
    .then(data => { // then kol bus apdorotas atsakymas
        console.log('----->', data);
        // kodas


    });

// ne cia