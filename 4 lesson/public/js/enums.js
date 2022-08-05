"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 7] = "Sunday";
})(WeekDays || (WeekDays = {}));
var Answer;
(function (Answer) {
    Answer[Answer["No"] = 0] = "No";
    Answer[Answer["Yes"] = 1] = "Yes";
})(Answer || (Answer = {}));
var WeekDayNamesLT;
(function (WeekDayNamesLT) {
    WeekDayNamesLT["Monday"] = "pirmadienis";
    WeekDayNamesLT["Tuesday"] = "antradienis";
    WeekDayNamesLT["Wednesday"] = "tre\u010Diadienis";
    WeekDayNamesLT["Thursday"] = "ketvirtadienis";
    WeekDayNamesLT["Friday"] = "penktadienis";
    WeekDayNamesLT["Saturday"] = "\u0161e\u0161tadienis";
    WeekDayNamesLT["Sunday"] = "sekmadienis";
})(WeekDayNamesLT || (WeekDayNamesLT = {}));
console.group('Enums - užduotys');
{
    let LtCity;
    (function (LtCity) {
        LtCity["Vilnius"] = "Vilnius";
        LtCity["Kaunas"] = "Kaunas";
        LtCity["Klaip\u0117da"] = "Klaip\u0117da";
        LtCity["Panev\u0117\u017Eys"] = "Panev\u0117\u017Eys";
        LtCity["\u0160iauliai"] = "\u0160iauliai";
    })(LtCity || (LtCity = {}));
    let LargestInPeople;
    (function (LargestInPeople) {
        LargestInPeople[LargestInPeople["China"] = 0] = "China";
        LargestInPeople[LargestInPeople["India"] = 1] = "India";
        LargestInPeople[LargestInPeople["UnitedStates"] = 2] = "UnitedStates";
        LargestInPeople[LargestInPeople["Indonesia"] = 3] = "Indonesia";
        LargestInPeople[LargestInPeople["Pakistan"] = 4] = "Pakistan";
    })(LargestInPeople || (LargestInPeople = {}));
    let StrongestEconomies;
    (function (StrongestEconomies) {
        StrongestEconomies[StrongestEconomies["USA"] = 1] = "USA";
        StrongestEconomies[StrongestEconomies["China"] = 2] = "China";
        StrongestEconomies[StrongestEconomies["Japan"] = 3] = "Japan";
        StrongestEconomies[StrongestEconomies["Germany"] = 4] = "Germany";
        StrongestEconomies[StrongestEconomies["UnitedKingdom"] = 5] = "UnitedKingdom";
    })(StrongestEconomies || (StrongestEconomies = {}));
    console.group('1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.');
    {
        const city = LtCity.Vilnius;
        const city2 = LtCity.Šiauliai;
        console.log({ city, city2 });
    }
    console.groupEnd();
    console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
    {
        const largestInPeopleCountries = [
            LargestInPeople.UnitedStates, LargestInPeople.India
        ];
        console.log(largestInPeopleCountries);
    }
    console.groupEnd();
    console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
    {
        const strongestEconomies = [
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
//# sourceMappingURL=enums.js.map