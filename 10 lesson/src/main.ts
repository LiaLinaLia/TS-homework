import WorkPerson from './entities/work-person.js';
import SelfEmployedPerson from './entities/self-employed-person.js';
import BuisnessLicencePerson from './entities/business-license-person.js';
import Employee from './entities/employee.js';
import Job from './entities/job.js';

const workPerson1 = new WorkPerson({
  id: '25169845878',
  name: 'Apsas',
  surname: 'Revestenis',
  hourPay: 25,
  fullTimeEquivalent: 1,
});
const workPerson2 = new WorkPerson({
  id: '25167745878',
  name: 'Eventas',
  surname: 'Klikauskas',
  hourPay: 25,
  fullTimeEquivalent: 0.5,
});

const selfEmployed1 = new SelfEmployedPerson({
  id: '25169845878',
  name: 'Beribė',
  surname: 'Jūračka',
  hourPay: 25,
  hoursWorked: 10,
});
const selfEmployed2 = new SelfEmployedPerson({
  id: '25169145878',
  name: 'Fanalijus',
  surname: 'Analijus',
  hourPay: 10,
});

const jobs = [
  new Job('Facebook adds', 200),
  new Job('Google adds', 700),
  new Job('Twitter adds', 400),
];

jobs[0].completeJob();
jobs[2].completeJob();
const designer = new BuisnessLicencePerson({
  id: '15169845878',
  name: 'Plunksnytė',
  surname: 'Krupštytė',
  jobs,
});

const marketingSpecialist = new BuisnessLicencePerson({
  id: '15169845878',
  name: 'Protenis',
  surname: 'Knistauskenis',

});

const employees: Employee[] = [
  workPerson1,
  workPerson2,
  selfEmployed1,
  selfEmployed2,
  designer,
  marketingSpecialist,
];

console.group('1. Atspausdinkite visus darbuotojus');
employees.forEach((emp) => console.log(emp.toString()));
console.groupEnd();

console.group('2. Atspausdinkite visų darbuotojų atlyginimus');
employees.forEach((emp) => {
  console.log(emp.getPersonInfo());
  console.log(emp.calcPay());
});
console.groupEnd();
