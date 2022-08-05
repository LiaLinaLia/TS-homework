"use strict";
const person1 = ['Koridas', 'Atmazas'];
const person2 = ['Paklodijus', 'Pagalvė'];
const person3 = ['Višta', 'Maumedienė'];
let currentAge = 18;
let currentHeight = 180;
const age = [currentAge, () => currentAge += 1];
const height = [currentAge, (h) => {
        if (h)
            currentHeight = h;
    }];
console.group('Tuples - užduotys');
{
    console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
    {
        const zmog = ['Vardas', 100];
        const zmog2 = ['Vardas2', 33];
        console.log(zmog, zmog2);
    }
    console.groupEnd();
    console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
    {
        const couple = [{
                name: 'Jonas',
                age: 15,
            }, {
                name: 'Šuo',
                age: 3,
                breed: 'Tax',
            }];
        console.log(couple);
    }
    console.groupEnd();
    console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
    {
        const triangle = [[1, 1], [2, 2], [3, 3]];
        const triangle2 = [[-1, -1], [-2, -2], [-3, -3]];
        console.log({ triangle, triangle2 });
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=tuples.js.map