function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// Apskritimukai TASK

// Reikalavimui JS kodui:
// turi būti sukurtas masyvas balls.
// Reikalavimui HTML:
// turi būti sukurti du laukeliai duomenims įvesti- spalvai ir numeriui; 
// vieta, kurioje bus atvaizduojami sukurti apskritimukai;
// du mygtukai- “sukurti naują” ir “ištrinti seniausią”.
// Klases ar kitus elementų atributus galite pridėti jeigu manote, kad jie jums yra reikalingi. Galite naudoti CSS tiek atskirame faile, tiek <style> viduje ar inline be jokių ribojimų.

const balls = []; // masyvas balls
