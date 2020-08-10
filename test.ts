const json = '{"x": 10, "y":20}';
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates) ;

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i <words.length; i++){
    if (words[i] === 'green') {
        foundWord = true;
    }
}

    
let numbers =[-10, -1, 12];
let numberAboveZero: boolean|number = false;

for (let i = 0; i <  numbers.length; i++){
    if (numbers [i] > 0){
        numberAboveZero = numbers[i];
    }
}

const add = (a:number,b:number): number => {
    return a+b;
}; 