/* eslint-disable no-lone-blocks */
/*
  Enum(išvardinimas) - tai konstantų rinkinys.
  Enum(išvardinimai) yra naudojami įvardinti tipams ar nustatymams.
  Jų reikšmės dažniau naudojamos tipo patikrinimams, nei atvazdavimui.
*/

// Skaitiniai išvardinimai (numeric enums)
// Nurodžius pirmajai konstantai reikšmę, sekančios susinumeruoja pradedant nurodyta reikšme
enum WeekDays {
  Monday = 1,
  Tuesday, // 2
  Wednesday, // 3
  Thursday, // 4
  Friday, // 5
  Saturday, // 6
  Sunday, // 7
}

// Jei nenurodote pirmosios reikšmės, numeruojama nuo 0
enum Answer {
  No, // 0
  Yes, // 1
}

// Jei išvardinamų konstantų tipas yra ne skaičius, privalote įvardinti kiekvieną narį
enum WeekDayNamesLT {
  Monday = 'pirmadienis',
  Tuesday = 'antradienis',
  Wednesday = 'trečiadienis',
  Thursday = 'ketvirtadienis',
  Friday = 'penktadienis',
  Saturday = 'šeštadienis',
  Sunday = 'sekmadienis',
}

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Enums - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius aprašykite čia ↓↓↓↓
  enum LtCity {
    Vilnius = 'Vilnius',
    Kaunas = 'Kaunas',
    Klaipėda = 'Klaipėda',
    Panevėžys = 'Panevėžys',
    Šiauliai = 'Šiauliai',
  }

  enum LargestInPeople {
    China,
    India,
    UnitedStates,
    Indonesia,
    Pakistan,
  }

  enum StrongestEconomies {
    USA = 1,
    China,
    Japan,
    Germany,
    UnitedKingdom,
  }

  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius aprašykite čia ↑↑↑↑

  console.group('1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.');
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
    const city: LtCity = LtCity.Vilnius;
    const city2: LtCity = LtCity.Šiauliai;

    console.log({ city, city2 });
  }
  console.groupEnd();

  console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
    // eslint-disable-next-line max-len
    const largestInPeopleCountries: LargestInPeople[] = [
      LargestInPeople.UnitedStates, LargestInPeople.India];

    console.log(largestInPeopleCountries);
  }
  console.groupEnd();

  console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
    const strongestEconomies: StrongestEconomies[] = [
      StrongestEconomies.USA,
      StrongestEconomies.UnitedKingdom,
      StrongestEconomies.Japan,
      StrongestEconomies.Germany,
      StrongestEconomies.China,
    ];

    console.log(strongestEconomies);
  }
  console.groupEnd();
}
console.groupEnd();
