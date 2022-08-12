"use strict";
const people = [
    {
        name: 'Jonas',
        surname: 'Jonaitis',
        sex: 'male',
        age: 26,
        income: 1200,
        married: false,
        hasCar: false,
    },
    {
        name: 'Severija',
        surname: 'Piktutytė',
        sex: 'female',
        age: 26,
        income: 1300,
        married: false,
        hasCar: true,
    },
    {
        name: 'Valdas',
        surname: 'Vilktorinas',
        sex: 'male',
        age: 16,
        income: 0,
        married: false,
        hasCar: false,
    },
    {
        name: 'Virginijus',
        surname: 'Uostauskas',
        sex: 'male',
        age: 32,
        income: 2400,
        married: true,
        hasCar: true,
    },
    {
        name: 'Samanta',
        surname: 'Uostauskienė',
        sex: 'female',
        age: 28,
        income: 1200,
        married: true,
        hasCar: true,
    },
    {
        name: 'Janina',
        surname: 'Stalautinskienė',
        sex: 'female',
        age: 72,
        income: 364,
        married: false,
        hasCar: false,
    },
];
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
    const personToIdentity = ({ name, surname }) => ({ name, surname });
    const identities = people.map(personToIdentity);
    console.table(people);
    console.table(identities);
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
    const selectTaskProps = ({ married, hasCar }) => ({
        married: Boolean(married),
        hasCar: Boolean(hasCar),
    });
    const result = people.map(selectTaskProps);
    console.table(people);
    console.table(result);
}
console.groupEnd();
console.groupCollapsed('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
{
    const personMaried = ({ name, surname, married }) => ({ name, surname, married });
    const MPeople = people.map(personMaried);
    console.table(MPeople);
}
console.groupEnd();
console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
    const person2 = ({ sex, income }) => ({ sex, income });
    const MPeople2 = people.map(person2);
    console.table(MPeople2);
}
console.groupEnd();
console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
    const person3 = ({ name, surname, sex }) => ({ name, surname, sex });
    const MPeople3 = people.map(person3);
    console.table(MPeople3);
}
console.groupEnd();
console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
    const isMale = ({ sex }) => sex === 'male';
    const males = people.filter(isMale);
    console.table(males);
}
console.groupEnd();
console.groupCollapsed('7. Atspausdinkite visas moteris');
{
    const IsWomen = ({ sex }) => sex === 'female';
    const females = people.filter(IsWomen);
    console.table(females);
}
console.groupEnd();
console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
    const personHasCar = ({ hasCar }) => Boolean(hasCar);
    const createIdentity = ({ name, surname }) => ({ name, surname });
    const identityReducer = (result, { hasCar, name, surname }) => {
        if (hasCar)
            result.push({ name, surname });
        return result;
    };
    const peopleWithCars = people.filter(personHasCar);
    const indentities = peopleWithCars.map(createIdentity);
    const identitiess2 = people.reduce(identityReducer, []);
    console.log(indentities);
    console.log(identitiess2);
}
console.groupEnd();
console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
    const married = (result, person) => {
        if (person.married)
            result.push(person);
        return result;
    };
    const marriedPeople = people.reduce(married, []);
    console.table(marriedPeople);
}
console.groupEnd();
console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
    const groupCarOwnersBySexReducer = (result, person) => {
        if (!person.hasCar)
            return result;
        if (!result[person.sex])
            result[person.sex] = 0;
        result[person.sex] = result[person.sex] + 1;
        return result;
    };
    const groupedPeopleBySex = people.reduce(groupCarOwnersBySexReducer, {});
    console.log(groupedPeopleBySex);
}
console.groupEnd();
console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
    const convertToSalary = ({ income, ...person }) => {
        const result = { ...person };
        if (income)
            result.salary = income;
        return result;
    };
    const identities = people.map(convertToSalary);
    console.table(identities);
}
console.groupEnd();
console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
    const withOut3 = ({ name, surname, sex, ...person }) => ({ ...person });
    const identitiesWithout = people.map(withOut3);
    console.table(identitiesWithout);
}
console.groupEnd();
console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
    const ToFullname = ({ name, surname, ...rest }) => ({
        fullname: `${name} ${surname}`,
        ...rest,
    });
    const fullnamePeople = people.map(ToFullname);
    console.table(people);
    console.table(fullnamePeople);
}
console.groupEnd();
//# sourceMappingURL=main.js.map