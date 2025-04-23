import { add as sum , subtract } from './math.js';
import customLog from './logger.js';
import fetchUsers from './api.js';


const summ = sum(10, 5); // 15
const difference = subtract(10, 5); //5
console.log(`Sum: ${summ}`);
console.log(`Difference: ${difference}`);

//-----------------------------------//-----------------------------------------------//
customLog("Hello, world!");


 fetchUsers()