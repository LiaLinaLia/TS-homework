import LandVehicle from './land.js';
import AirVehicle from './air.js';
import WaterVehicle from './water.js';

const vehicles: (LandVehicle | AirVehicle | WaterVehicle)[] = [
  new LandVehicle({
    tires: ['Delux 200 m&s', 'Fairtex 200 m&s', 'Fairtex 200 m&s', 'Delux 200 m&s'],
  }, {
    brand: 'Toyota',
    model: 'Qashqai',
    year: 1995,
  }),
  new LandVehicle({
    tires: ['Delux 200 m&s', 'Fairtex 200 m&s', 'Delux 200 m&s', 'Fairtex 200 m&s'],
  }, {
    brand: 'Nisan',
    model: 'Corola',
    year: 2017,
  }),
  new AirVehicle({
    maxAltitude: 7000,
  }, {
    brand: 'Nitro',
    model: 'Jeti',
    year: 2015,
  }),
  new AirVehicle({
    maxAltitude: 5000,
  }, {
    brand: 'Falcon',
    model: 'Bamasi',
    year: 2010,
  }),
  new WaterVehicle({
    maxDepth: 50,
  }, {
    brand: 'Sailor',
    model: 'Ocean-3000',
    year: 2011,
  }),
  new WaterVehicle({
    maxDepth: 70,
  }, {
    brand: 'LandScraper',
    model: 'Fagotti',
    year: 2022,
  }),
];

vehicles.forEach((v) => console.log(v.toString()));
