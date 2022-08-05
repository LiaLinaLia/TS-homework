"use strict";
const country = 'Latvia';
const country2 = 'Estonia';
const req1 = {
    url: 'https://tavo-veidas.lt',
    headers: {
        'Content-Type': 'application/json',
    },
    method: 'GET',
};
const req2 = {
    url: 'https://tavo-veidas.lt/api/',
    headers: {
        Authorization: 'Bearer fhdguisdf8g76sdf89ghf5..?sfg',
        'Content-Type': 'application/json',
    },
    body: {
        image: 'https://sentencijos.lt/wp-content/uploads/2014/10/niurus-veidas-kempiniukas.png',
    },
    method: 'POST',
};
console.group('Literal types - užduotys');
{
    console.group('1. Sukurkite konkrečius 5 dižiausių Vokietijos miestų tipus. Sukurkite tipą, kurio reikšmė būtų viena iš miestų.');
    {
        const city = 'Berlin';
        const city2 = 'Munchen';
        console.log({ city, city2 });
    }
    console.groupEnd();
    console.group('2. Sukurkite konkrečias 5 šunų veisles. Sukurkite tipą, kurio reikšmė būtų viena iš veislių.');
    {
        const breed = 'VulgarisCleveris';
        const breed2 = 'Staffordshire';
        console.log({ breed, breed2 });
    }
    console.groupEnd();
    console.group('3. Sukurkite konkrečias 5 mašinos dalių tipus. Sukurkite tipą, kurio reikšmė būtų viena iš dalių.');
    {
        const parts = ['Engine', 'FuelTank', 'Trasmission'];
        const part = 'Wheel';
        console.log(parts);
        console.log(part);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=literal-types.js.map