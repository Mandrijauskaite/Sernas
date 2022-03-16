// Pridėti savybę prie Animal sleep: true/false. 
// Parašyti du metodus goSleep() ir wakeUp() DONE!


// Pridėti savybe food: 0; 
// Parašyti metoda eat(amount); DONE!

// pridedam savybę foodProcessing rand 35 iki 75 (%)
// Ir pridedent maistą skaičiuoti į food tik tą procentinę dalį DONE!

class Animal {

    constructor(t) {
        this.type = t;
        this.sleep = false;
        this.food = 0;
        this.foodProcessing = 
    }

    goSleep() {
        this.sleep = true;
    }

    wakeUp() {
        this.sleep = false;
    }

    eat(amount) {
        if (!this.sleep) {
            this.food += amount;
        }
  
    }
    rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

// pridedam savybę foodProcessing rand 35 iki 75 (%)
// Ir pridedent maistą skaičiuoti į food tik tą procentinę dalį DONE!

// savybe distance. Metodas run(distance), 
// prideda atstumą į savybę. DONE!

class Animal {

    constructor(t) {
        this.type = t;
        this.sleep = false;
        this.food = 0;
        this.distance = 0;
        this.foodProcessing = this.rand(35, 75); // %
    }

    goSleep() {
        this.sleep = true;
    }

    wakeUp() {
        this.sleep = false;
    }

    eat(amount) {
        if (!this.sleep) {
            this.food += amount / 100 * this.foodProcessing;
        }
    }

    run(dist) {
        if (!this.sleep) {
            if (this.food >= dist) {
                this.food -= dist;
                this.distance += dist;
            } else {
                this.distance += this.food;
                this.food = 0;
            }
        }
    }

    rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}


const lape = new Animal('Lapė');

const meska = new Animal('Meška');

// meska.goSleep();

lape.eat(10);
lape.eat(10);
lape.eat(10);

// meska.eat(10);

lape.run(100);

// lape.run(2.7487);

// for (const what in meska) {
//     console.log(what);
// }


console.log(lape);
console.log(meska);


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