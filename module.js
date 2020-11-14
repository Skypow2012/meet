// commonJs
const moduleA = require('./moduleA');
const { text: anotherText } = moduleA;

// ES Module
// import { text as anotherText } from './moduleA';

console.log('anotherText', anotherText)

console.log('更改')