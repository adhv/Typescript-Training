const apples: number = 5;

const bannana: number = textAndNotNumberThrowsError;
//Cannot find name 'textAndNotNumberThrowsError'.

apples = 10;
// Cannot assign to 'apples' because it is a constant.

let orange: number = 5;
orange = '10';

//Function
const logNumber: (i = number) => void = (i = number) => {
  console.log(i);
};

//When to use annotation
//1. Funtion that returns the type 'any'

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};

//2 Declare variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}
