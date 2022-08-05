/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-lone-blocks */
/*
  Tuple(rinkinys) - tai masyvas su greižtai nurodytais masyvo elemento tipais ir jų seka.
  Šis tipas neleidžia turėti kitokį kiekį, ar kitokio tipo elementų
*/
type FullnameTuple = [string, string];
type UseNumericStateTuple = [number, (num?: number) => void];

const person1: FullnameTuple = ['Koridas', 'Atmazas'];
const person2: FullnameTuple = ['Paklodijus', 'Pagalvė'];
const person3: FullnameTuple = ['Višta', 'Maumedienė'];

let currentAge: number = 18;
let currentHeight: number = 180;
// eslint-disable-next-line no-return-assign
const age: UseNumericStateTuple = [currentAge, () => currentAge += 1];
const height: UseNumericStateTuple = [currentAge, (h) => {
  if (h) currentHeight = h;
}];

// Alikite užduotis, ir atspausdinkite konsolėje savo sprendimo pavyzdžius užduoties bloke
console.group('Tuples - užduotys');
{
  // ↓↓↓↓ Tipus apraškite čia ↓↓↓↓
type Person = [string, number];

type Dog = {
  name: string,
  age: number,
  breed: 'Dalmantin' | 'Tax',
};
type Owner = {
  name: string,
  age: number,
};
type DogAndOwner = [Owner, Dog];
type Point2D = [number, number];
type TriangleTuple = [Point2D, Point2D, Point2D];
// ↑↑↑↑ Tipus apraškite čia ↑↑↑↑

console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
{
  // sprendimo pavyzdžius spausdinkite čia
  const zmog: Person = ['Vardas', 100];
  const zmog2: Person = ['Vardas2', 33];
  console.log(zmog, zmog2);
}
console.groupEnd();

console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
{
  // sprendimo pavyzdžius spausdinkite čia
  const couple: DogAndOwner = [{
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
  // sprendimo pavyzdžius spausdinkite čia
  const triangle: TriangleTuple = [[1, 1], [2, 2], [3, 3]];
  const triangle2: TriangleTuple = [[-1, -1], [-2, -2], [-3, -3]];

  console.log({ triangle, triangle2 });
}
console.groupEnd();
}
console.groupEnd();
