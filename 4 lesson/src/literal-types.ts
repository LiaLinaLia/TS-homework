/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
/*
  literal-types(konkretūs tipai) - tai tipai sudaryti iš konkrečių reikšmių
*/

type Latvia = 'Latvia';
type Lithuania = 'Lithuania';
type Estonia = 'Estonia';
const country: Latvia = 'Latvia';

type BalticCountry = Latvia | Lithuania | Estonia;
const country2 = 'Estonia';

type HttpType = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

type HttpRequest = {
  url: string,
  headers?: {
    [key: string]: string,
  },
  body?: {
    [key: string]: string,
  }
  method: HttpType,
};

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

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Literal types - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius apraškite čia ↓↓↓↓
  type GermanCity = Berlin | Munchen | Hamburg | Cologne | Frankfurt;
  type Berlin = 'Berlin';
  type Hamburg = 'Hamburg';
  type Munchen = 'Munchen';
  type Cologne = 'Cologne';
  type Frankfurt = 'Frankfurt';

  type Breed = Tax | Buldog | Staffordshire | Augie | VulgarisCleveris;
  type Tax = 'Tax';
  type Buldog = 'Buldog';
  type Staffordshire = 'Staffordshire';
  type Augie = 'Augie';
  type VulgarisCleveris = 'VulgarisCleveris';

  type Engine = 'Engine';
  type Trasmission = 'Trasmission';
  type Wheel = 'Wheel';
  type FuelTank = 'FuelTank';
  type FuelFilter = 'FuelFilter';
  type CarPart = Engine | Trasmission | Wheel | FuelTank | FuelFilter;

  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius apraškite čia ↑↑↑↑

  console.group('1. Sukurkite konkrečius 5 dižiausių Vokietijos miestų tipus. Sukurkite tipą, kurio reikšmė būtų viena iš miestų.');
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
    const city: GermanCity = 'Berlin';
    const city2: GermanCity = 'Munchen';

    console.log({ city, city2 });
  }
  console.groupEnd();

  console.group('2. Sukurkite konkrečias 5 šunų veisles. Sukurkite tipą, kurio reikšmė būtų viena iš veislių.');
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
    const breed: Breed = 'VulgarisCleveris';
    const breed2: Breed = 'Staffordshire';

    console.log({ breed, breed2 });
  }
  console.groupEnd();

  console.group('3. Sukurkite konkrečias 5 mašinos dalių tipus. Sukurkite tipą, kurio reikšmė būtų viena iš dalių.');
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
    const parts: CarPart[] = ['Engine', 'FuelTank', 'Trasmission'];
    const part: CarPart = 'Wheel';

    console.log(parts);
    console.log(part);
  }
  console.groupEnd();
}
console.groupEnd();
