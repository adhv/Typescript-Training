const carMakers = ['ford', 'toyota', 'honda'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['carolla'], ['camara']];

//help with inference when extractindg values
const car = carMakers[0];
const myCar = carMakers.pop();

//prevent incompatible values
carMakers.push(100);

//help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//felxible types
const importantDates; (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());

