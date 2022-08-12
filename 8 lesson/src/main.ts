/* eslint-disable max-len */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-empty */

// eslint-disable-next-line no-shadow, no-unused-vars
enum HeightUnits {
  // eslint-disable-next-line
  CENTIMETERS = 'cm',
  // eslint-disable-next-line
  METERS = 'm',
  // eslint-disable-next-line
  INCHES = 'in'
}

// eslint-disable-next-line no-shadow
enum WeightUnits {
  // eslint-disable-next-line
  KILOS = 'kg',
  // eslint-disable-next-line
  POUNDS = 'lbs'
}

// bendra f-ja vardų ir pavardžių didžiųjų raidžių taisymui:
const capitalize = (word: string): string => {
  const words = word.trim().split(' '); // trim - apkarpom iš kraštų, jei yra taarpai ir išskaidom žodžius palei tarpą: ('vienas du trys').split(' ') => gaunasi masyvas ['vienas', 'du', trys']
  const capitalizedWords = words.map((w) => w[0].toUpperCase() + w.slice(1)); // jei norėtumėm užtikrinti, kad po didžiosios būtų mažosios tai + w.slice(1).toLowerCase());

  return capitalizedWords.join(' '); // grąžina po masyvo paleidimo ištaisytus žodžius sujungtus per tarpą
};

class Person {
  public static heightUnits: HeightUnits = HeightUnits.CENTIMETERS; // už lygybės esanti reikšmė yra default

  public static weightUnits: WeightUnits = WeightUnits.KILOS;

  private privateName!: string; // ! operator garantuoja, kad reikšmė priskirta, be jo mestų klaidą

  private surname!: string;

  private age!: number;

  private height!: number;

  private weight!: number;

  public constructor(
    name: string,
    surname: string,
    age: number,
    height: number,
    weight: number,
    heightUnits?: HeightUnits,
    weightUnits?: WeightUnits,

  ) {
    this.setName(name);
    this.setSurname(surname);
    this.setAge(age);
    this.setHeight(height, heightUnits);
    this.setWeight(weight, weightUnits);
  }

  public setName(name: string) {
    // atliekamos validacijos, patikrinimai, formavimas...
    if (name === '') throw new Error('Negali būti tuščias');
    if (name.length < 2) throw new Error('Vardas turi būti bent iš 2 raidžių');

    this.privateName = capitalize(name); // this.name = name;
  }

  public setSurname(surname: string) {
    if (surname === '') throw new Error('Negali būti tuščias');
    if (surname.length < 2) throw new Error('Pavardė turi būti bent iš 2 raidžių');

    this.surname = capitalize(surname);
  }

  public setAge(age: number) {
    if (age % 1 !== 0) throw new Error('Amžius turi būti sveikas skaičius'); // jei skaičių dalinam iš 1 liekana nulis, tai sveikas sk. Jei !==(nėra) 0, tai meta klaidą
    if (age < 1) throw new Error('Amžius negali būti mažesnis nei 1');
    if (age > 150) throw new Error('Amžius negali būti didesnis už 150');

    this.age = age;
  }

  public setHeight(height: number, units: HeightUnits = HeightUnits.CENTIMETERS) {
    switch (units) {
      case HeightUnits.CENTIMETERS: this.height = height; break;
      case HeightUnits.METERS: this.height = height * 100; break;
      case HeightUnits.INCHES: this.height = height * 2.54; break;
      default: break;
    }
  }

  public setWeight(weight: number, units?: WeightUnits): void {
    switch (units) {
      case WeightUnits.KILOS: this.weight = weight; break;
      case WeightUnits.POUNDS: this.weight = weight * 2.20462262; break;
      default: this.weight = weight;
    }
  }

  public getFullname() {
    return `${this.privateName} ${this.surname}`;
  }

  public getAge() {
    return this.age;
  }

  public getHeight() {
    switch (Person.heightUnits) {
      case HeightUnits.CENTIMETERS: return this.height;
      case HeightUnits.METERS: return this.height / 100;
      case HeightUnits.INCHES: return this.height / 2.54;
      default: return this.height;
    }
  }

  public getWeight(): number {
    if (this.weight === undefined) return 0;

    switch (Person.weightUnits) {
      case WeightUnits.KILOS: return this.weight;
      case WeightUnits.POUNDS: return this.weight / 2.20462262;
      default: return this.weight;
    }
  }

  public toString(): string {
    let formattedPerson = `${this.privateName} ${this.surname}\n`;
    formattedPerson += `\theight: ${this.getHeight()} ${Person.heightUnits}\n`;
    formattedPerson += `\tweight: ${this.getWeight()} ${Person.weightUnits}\n`;

    return formattedPerson;
  }
}

const people: Person[] = [
  new Person('Liudvikas', 'XVIII', 31, 190, 100),
  new Person('varaloja', 'karksė barsė', 35, 1.7, 50, HeightUnits.METERS, WeightUnits.POUNDS),
  new Person('Ana maria', 'Laikauskaitė', 39, 70, 70, HeightUnits.INCHES),
];

console.groupCollapsed('1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai iš jų sukurkite setterius, ir bendrą getterį fullname');
{
  const fullnames: string[] = people.map((p) => p.getFullname()); // iteruodamas per people masyvą su geteriu fullname - sukuriamas stringų masyvas, kur matosi vardai ir pavardės.

  console.log(fullnames);
}
console.groupEnd();

console.groupCollapsed('2. Sukurkite Person klasei savybę "age". Inkapsuliuokite šią savybę taip, jog reikšmė galėtų būti tik sveiki skaičiai nuo 1 iki 150');
{
  const ages = people.map((p) => p.getAge());
  console.log(ages);
}
console.groupEnd();

console.group('3. Sukurkite Person klasei savybę "height" kurios vertė būtų saugoma centimetrais. Sukurkite šiai savybei setterį, kuris pirmu parametru priimtų reikšmę, o antru parametru priimtų matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras nėra perduotas, numatytas(default) matavimo vienetas turi būti cm. Getteris turi grąžinti reikšmę centimetrais.');
{
  const heights = people.map((p) => p.getHeight());
  console.log(heights);
}
console.groupEnd();

console.group('4. Sukurkite Person klasei statinę savybę "heightUnits". Jos tipas turi būti išvardinimas(enum), kurio pasirinkimai yra: "cm", "m", "in". Numatytoji(default) "heightUnits" reikšmė turi būti centimetrai');
{
  Person.heightUnits = HeightUnits.METERS;
  console.log('Matavimo vienetai pakeisti į:', HeightUnits.METERS);
  console.log({ 'Person.heightUnits': Person.heightUnits });

  Person.heightUnits = HeightUnits.INCHES;
  console.log('Matavimo vienetai pakeisti į:', HeightUnits.INCHES);
  console.log({ 'Person.heightUnits': Person.heightUnits });

  Person.heightUnits = HeightUnits.CENTIMETERS;
  console.log('Matavimo vienetai pakeisti į:', HeightUnits.CENTIMETERS);
  console.log({ 'Person.heightUnits': Person.heightUnits });
}
console.groupEnd();

console.group('5. "height" setterio antram parametrui pakeiskite sąjungos tipą į [4.] užduotyje sukurtą išvardinimą(enum). Priderinkite pavyzdžius ir metodą.');

console.group('6. "height" geteriui sukurkite logiką, jog jis grąžintų matavimo vienetus, pagal statinės savybės "heightUnits" reikšmę.');
{
  Person.heightUnits = HeightUnits.METERS;
  console.log('Matavimo vienetai pakeisti į:', HeightUnits.METERS);
  console.log(people.map((p) => p.getHeight()));

  Person.heightUnits = HeightUnits.INCHES;
  console.log('Matavimo vienetai pakeisti į:', HeightUnits.INCHES);
  console.log(people.map((p) => p.getHeight()));

  Person.heightUnits = HeightUnits.CENTIMETERS;
  console.log('Matavimo vienetai pakeisti į:', HeightUnits.CENTIMETERS);
  console.log(people.map((p) => p.getHeight()));
}
console.groupEnd();

console.group('7. Analogiškai pagal [4.]-[6.] punktus sukurkite savybę weight su statiniu išvardinimu "weightUnits", kurio pasirinkimai turi būti: "KG", "LBS"');
{
  Person.weightUnits = WeightUnits.KILOS;
  console.log('Matavimo vienetai pakeisti į:', WeightUnits.KILOS);
  console.log({ 'Person.heightUnits': Person.weightUnits });

  Person.weightUnits = WeightUnits.POUNDS;
  console.log('Matavimo vienetai pakeisti į:', WeightUnits.POUNDS);
  console.log({ 'Person.weightUnits': Person.weightUnits });

  Person.weightUnits = WeightUnits.KILOS;
  console.log('Matavimo vienetai pakeisti į:', WeightUnits.KILOS);
  console.log(people.map((p) => p.getHeight()));

  Person.weightUnits = WeightUnits.POUNDS;
  console.log('Matavimo vienetai pakeisti į:', WeightUnits.POUNDS);
  console.log(people.map((p) => p.getWeight()));
}
console.groupEnd();

console.group('8. Sukurkite klasei Person metodą "toString". Kuris paverstų žmogaus savybes gražiu formatu: vardas ir pavardė pirmoje eilutėje, o "height" ir "weight" savybės atskirose eilutėse, atitrauktos nuo kairio krašto per "tab" simbolį, ir su matavimo vienetais(kurie išsaugoti) statinėse Person klasės savybėse');
{
  Person.heightUnits = HeightUnits.METERS;
  Person.weightUnits = WeightUnits.KILOS;
  console.log('Europoje:');
  console.log(people[0].toString());
  console.log(people[1].toString());
  console.log(people[2].toString());

  Person.heightUnits = HeightUnits.INCHES;
  Person.weightUnits = WeightUnits.POUNDS;
  console.log('Amerikoje:');
  console.log(people[0].toString());
  console.log(people[1].toString());
  console.log(people[2].toString()); }
