//explicit types
var character: string;
var age: number;
var isLoggedIn: boolean;

age = 30;
isLoggedIn = true;

//arrays
var ninjas: string[] = [];
ninjas.push('mario');

//union types
var mixed: (string|number|boolean)[] = []
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);

var uid: string|number;
uid = '123';
uid=123;

//objects
var ninjaOne: object;
ninjaOne = {name: 'yoshi', age: 30};

var ninjaTwo: {
    name: string,
    age: number,
    beltColour: string,
};

ninjaTwo = {name: 'Mario', age:20, beltColour: 'black'}
