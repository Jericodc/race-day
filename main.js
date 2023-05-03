let raceNumber = Math.floor(Math.random() * 1000);

const timeAdultEarly = '9:30am';
const timeAdultLate = '11:00am';
const timeAllYouth = '12:30pm';

const registeredEarly = true;

let runnerAge = 25;

runnerAge > 18 && registeredEarly ? (raceNumber += 1000) : raceNumber;

runnerAge > 18 && registeredEarly
    ? console.log(
          `Race will begin at ${timeAdultEarly}, your race number is: ${raceNumber}.`
      )
    : runnerAge > 18 && !registeredEarly
    ? console.log(
          `Race will begin at ${timeAdultLate}, your race number is: ${raceNumber}.`
      )
    : runnerAge < 18
    ? console.log(
          `Race will begin at ${timeAllYouth}, your race number is: ${raceNumber}.`
      )
    : console.log('Approach the registration desk. Thanks!');