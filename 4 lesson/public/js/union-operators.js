"use strict";
const id1 = '1321354';
const id2 = 17;
const id3 = 47;
const id4 = 'asdasdas';
const id5 = 47;
const id6 = 'sdfsdfdsfsdf';
const id7 = true;
const call = (callee) => {
    if (typeof callee === 'string') {
        console.log('Skambinama:', callee);
    }
    else {
        console.log('Skambinama:', callee.mobile);
    }
};
const data1 = [1, 5, 'burundukas', 8, 'siurprizas', 7];
const data2 = [1, 5, 'burundukas', 8, 'siurprizas', 7];
const flags1 = [1, 1, 0, 0, 0, 1, 1];
const flags2 = [true, false, false, true, true];
console.group('Union operators - užduotys');
{
    console.group('1. Aprašykite objekto tipą Accommodation, kurio savybė "type" būtų, "House" arba "Flat"');
    {
        const apartment = {
            address: 'Vilnius str., Vilnius',
            type: 'House',
        };
        const apartment2 = {
            address: 'Klaipėda str., Klaipėda',
            type: 'Flat',
        };
        console.log({
            apartment,
            apartment2,
        });
    }
    console.groupEnd();
    console.group('2. Aprašykite objekto tipą Car, kurio savybė "transmission" būtų, "Automatic" arba "Manual"');
    {
        const car = {
            transmission: 'Manual',
            brand: 'Chrystler',
            model: 'Voyager',
        };
        const car2 = {
            transmission: 'Automatic',
            brand: 'Chevrolet',
            model: 'Volt',
        };
        console.log({
            car,
            car2,
        });
    }
    console.groupEnd();
    console.group('3. Aprašykite tipą, kuris kintamajam leistų būti: arba Accommodation masyvu, arba Car masyvu');
    {
        const assets = [{
                address: 'Vilnius str., Vilnius',
                type: 'House',
            }, {
                address: 'Klaipėda str., Klaipėda',
                type: 'Flat',
            }];
        const assets2 = [{
                transmission: 'Manual',
                brand: 'Chrystler',
                model: 'Voyager',
            }, {
                transmission: 'Automatic',
                brand: 'Chevrolet',
                model: 'Volt',
            }];
        console.log(assets);
        console.table(assets2);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=union-operators.js.map