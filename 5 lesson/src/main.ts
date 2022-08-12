/* eslint-disable no-lone-blocks */
type Person = {
  readonly name: string,
  readonly surname: string,
  readonly sex: 'male' | 'female',
  age: number,
  income?: number,
  married?: boolean,
  hasCar?: boolean,
};

const people: Person[] = [
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

/*
  Šių užduočių tikslas ne tik išspręsti užduotis, bet išmokti kurti tipus pagal jau esančius tipus
  Pirmos 2 užduotys pateikiamos kaip pavyzdžiai kaip turėtų būt sprendžiami uždaviniai:
    * Aprašome tipus
    * Aprašome funkcijas
    * (jeigu reikia aprašome naujus kintamuosius reikalingus sprendimui)
    * Atliekame užduoties sprendimą
    * Spausdiname sprendimo rezultatus

  Visas funkcijas ir kintamuosius reikia aprašyti tipais (net jei to ir nereikalauja TS compiler'is)

*/
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
  // Tipai:
  type Identity = {
    name: Person['name'],
    surname: Person['surname'],
  };

  // Funkcijos:
  const personToIdentity = ({ name, surname }: Person): Identity => ({ name, surname });

  // Sprendimas:
  const identities: Identity[] = people.map(personToIdentity);

  // Spausdinimas:
  console.table(people);
  console.table(identities);
}
console.groupEnd();

console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
  // type TaskProps = {
  //   married: NonNullable<Person["married"]>,
  //   hasCar: NonNullable<Person["hasCar"]>,
  // }
  type TaskProps = Pick<Required<Person>, 'hasCar' | 'married'>;

  const selectTaskProps = ({ married, hasCar }: Person): TaskProps => ({
    married: Boolean(married),
    hasCar: Boolean(hasCar),
  });

  const result: TaskProps[] = people.map(selectTaskProps);

  console.table(people);
  console.table(result);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
{
  // ...sprendimas ir spausdinimas
  // type Person = {
  //   readonly name: string,
  //   readonly surname: string,
  //   readonly sex: 'male' | 'female',
  //   age: number,
  //   income?: number,
  //   married?: boolean,
  //   hasCar?: boolean,
  // };

  type MarriageStatus = {
    name: Person['name'],
    surname: Person['surname'],
    married: Person ['married'],
  };
  // eslint-disable-next-line max-len
  const personMaried = ({ name, surname, married }: Person): MarriageStatus => ({ name, surname, married });

  // Sprendimas:
  const MPeople: MarriageStatus[] = people.map(personMaried);

  // Spausdinimas:
  console.table(MPeople);
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  // ...sprendimas ir spausdinimas
  type Person2 = {
    sex: Person ['sex'],
    income: Person['income'],
  };
  // eslint-disable-next-line max-len
  const person2 = ({ sex, income }: Person): Person2 => ({ sex, income });

  // Sprendimas:
  const MPeople2: Person2[] = people.map(person2);

  // Spausdinimas:
  console.table(MPeople2);
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  // ...sprendimas ir spausdinimas
  type Person3 = {
    name: Person['name'],
    surname: Person['surname'],
    sex: Person ['sex'],
  };
  // eslint-disable-next-line max-len
  const person3 = ({ name, surname, sex }: Person): Person3 => ({ name, surname, sex });

  // Sprendimas:
  const MPeople3: Person3[] = people.map(person3);

  // Spausdinimas:
  console.table(MPeople3);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  // ...sprendimas ir spausdinimas
  type Male = Omit<Person, 'sex'> & {
    sex: 'male',
  };

  const isMale = ({ sex }: Person): boolean => sex === 'male';

  const males: Male[] = people.filter(isMale) as Male[];

  console.table(males);
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  // ...sprendimas ir spausdinimas
  type Women = Omit< Person, 'sex'> & {
    sex: 'female',
  };
  const IsWomen = ({ sex }: Person): boolean => sex === 'female';
  const females: Women[] = people.filter(IsWomen) as Women[];
  console.table(females);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  // ...sprendimas ir spausdinimas

  type Identity = {
    name: Person['name'],
    surname: Person['surname'],
  };

  const personHasCar = ({ hasCar }: Person): boolean => Boolean(hasCar);

  const createIdentity = ({ name, surname }: Person): Identity => ({ name, surname });

  const identityReducer = (result: Identity[], { hasCar, name, surname }: Person): Identity[] => {
    if (hasCar) result.push({ name, surname });
    return result;
  };

  const peopleWithCars: Person[] = people.filter(personHasCar);
  const indentities: Identity[] = peopleWithCars.map(createIdentity);
  const identitiess2: Identity[] = people.reduce(identityReducer, []);

  console.log(indentities);
  console.log(identitiess2);
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  // ...sprendimas ir spausdinimas
  type MarriedPerson = Omit<Person, 'married'> & {
    married: true
  };

  const married = (result: MarriedPerson[], person: Person): MarriedPerson[] => {
    if (person.married) result.push(person as MarriedPerson);
    return result;
  };
  const marriedPeople: MarriedPerson[] = people.reduce(married, []);

  console.table(marriedPeople);
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  // ...sprendimas ir spausdinimas
  type CarOwnerCountBySex = {
    [Key in Person['sex']]?: number
  };

  // eslint-disable-next-line max-len
  const groupCarOwnersBySexReducer = (result: CarOwnerCountBySex, person: Person): CarOwnerCountBySex => {
    if (!person.hasCar) return result;

    if (!result[person.sex]) result[person.sex] = 0;

    result[person.sex] = result[person.sex] as number + 1;

    return result;
  };

  const groupedPeopleBySex: CarOwnerCountBySex = people.reduce(groupCarOwnersBySexReducer, {});

  console.log(groupedPeopleBySex);
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  // ...sprendimas ir spausdinimas
  type RefactorIncome = Omit<Person, 'income'> & { salary?: Person['income'], };
  const convertToSalary = ({ income, ...person }: Person): RefactorIncome => {
    const result: RefactorIncome = { ...person };
    if (income) result.salary = income;
    return result;
  };
  const identities: RefactorIncome[] = people.map(convertToSalary);

  console.table(identities);
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
  // ...sprendimas ir spausdinimas
  type WithoutName = Omit<Person, 'sex' | 'name' | 'surname'>;
  const withOut3 = ({
    name, surname, sex, ...person
  }: Person): WithoutName => ({ ...person });

  const identitiesWithout: WithoutName[] = people.map(withOut3);

  console.table(identitiesWithout);
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  // ...sprendimas ir spausdinimas
  type Fullname = Omit<Person, 'name' | 'surname'> & {
    fullname: `${Person['name']} ${Person['surname']}`
  };
  const ToFullname = ({ name, surname, ...rest }: Person): Fullname => ({
    fullname: `${name} ${surname}`,
    ...rest,
  });
  const fullnamePeople = people.map(ToFullname) as Fullname[];
  console.table(people);
  console.table(fullnamePeople);

  // type FullnamePerson = Omit<Person, 'name' | 'surname'> & {
  //   readonly fullname: string,
  // };

  // const createFullnamePerson = ({ name, surname, ...rest }: Person): FullnamePerson => ({
  //   ...rest,
  //   fullname: name + ' ' + surname,
  // });

  // const fullnamePeople: FullnamePerson[] = people.map(createFullnamePerson);

  // console.table(people);
  // console.table(fullnamePeople);
}
console.groupEnd();
