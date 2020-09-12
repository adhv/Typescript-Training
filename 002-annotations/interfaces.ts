interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}
const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

const printVechicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};
printVechicle(oldCivic);

//fixing long annotaion with interfaces
