// BACIK

console.log('1.UZDAVINYS------------------PRADZIA');
/* 1. etapas. Klase Animal. Kuriant objektą turi būti įrašoma savybė - type. DONE!*/
/* 2. etapas. Pridėti savybę prie Animal sleep: true/false. Parašyti du metodus goSleep() ir wakeUp() DONE! */
/* 3. etapas. Pridėti savybe food: 0; Parašyti metoda eat(amount); DONE! */
/* 4. etapas. Pridedam savybę foodProcessing rand 35 iki 75 (%) Ir pridedent maistą skaičiuoti į food tik tą procentinę dalį DONE! */
/* 5. etapas. Savybe distance (bėga). Metodas run(distance), prideda atstumą į savybę. DONE!*/
/* 6. etapas. Viena distancija sunaudoja vieną maistą. Aprašyti tai kode DONE!*/

class Animal {  // 1. etapas. Klase Animal. 

    constructor(t) { // 1. etapas. planas - konstruktorius
        this.type = t; // 1. etapas. Kuriant objektą turi būti įrašoma savybė - type
        this.sleep = false; // 2. etapas. Pridėti savybę prie Animal sleep: true/false (tiesa/melas PASIRINKTI).
        this.food = 0; // 3. etapas. Pridėti savybe food: 0
        this.foodProcessing = this.rand(35, 75); // 4. etapas. Pridedam savybę foodProcessing rand 35 iki 75 (%) 
        this.distance = 0; // 5. etapas. Savybe distance.
    }

    goSleep() { // 2. etapas. Metodas goSleep()
        this.sleep = true; // nuvaryti miegoti
    }

    wakeUp() { // 2. etapas. Metodus wakeUp()
        this.sleep = false; // prižadinti
    }

    eat(amount) { // 3. etapas. Parašyti metoda eat(amount);
        if (!this.sleep) { // jei nemiega 
            this.food += amount / 100 * this.foodProcessing; // 3. etapas. Jis valgo. 4. etapas. PRIDEDAM '/100 * this.foodProcessing'
        }
  
    }

    run(dist) { // 5. etapas. Metodas run(distance), prideda atstumą į savybę.
        if (!this.sleep) {
            if (this.food >= dist) { // 6. etapas. Viena distancija sunaudoja vieną maistą. Aprašyti tai kode
                this.food -= dist;    // 6. etapas. Sumažiname maistą.
                this.distance += dist; // 5. etapas. Jis bėga. 6. etapas. Padidiname distanciją.
            } else {
                this.distance += this.food; // 6. etapas. Nubėgta distancija turimu maistu padidiname Distanciją maistu
                this.food = 0; // 6. etapas.Maisto nebeliko
            }
        }
    }

    rand(min, max) { // 4. etapas.  Pridedame kai sąlygoje atsiranda rand
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

const lape = new Animal('Lapė'); // 1. etapas. Jų nėra užduotyje, bet mes turime susikurti gyvūnus 
const meska = new Animal('Meška'); // 1. etapas. Jų nėra užduotyje, bet mes turime susikurti gyvūnus 

meska.goSleep(); // 2. etapas.

lape.eat(10); // 3. etapas.
meska.eat(10); // 3. etapas.
lape.eat(10); // 3. etapas.

lape.run(100); // 5. etapas.

// lape.run(2.7487);

console.log(lape); // 1. etapas. Išvedame žvėris į konsolę
console.log(meska); // 1. etapas. Išvedame žvėris į konsolę
console.log('1.UZDAVINYS------------------PABAIGA');


console.log('2.UZDAVINYS------------------PRADZIA');
/*Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis kuri lygi 0. 
Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) 
ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). 
Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą. */


class Kibiras1 {

    constructor() {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni() {
        this.akmenuKiekis++;
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
    }

    kiekPririnktaAkmenu() {
        console.log(`O va tiek: 
        ${this.akmenuKiekis}
        yra pririnkta akmenų`);
    }

}


const k1 = new Kibiras1();

k1.prideti1Akmeni();

k1.kiekPririnktaAkmenu();

k1.pridetiDaugAkmenu(10);

k1.kiekPririnktaAkmenu();

k1.prideti1Akmeni();

k1.kiekPririnktaAkmenu();
console.log('2.UZDAVINYS------------------PABAIGA');