let numbersArr = [10,3,200,50,67.5, -2];
let sortedArr = [...numbersArr].sort((a, b) => a - b);
let reversedArr = [...sortedArr].reverse();
let FilteredNumbers = sortedArr.filter(num => num > 50);
let MaxNumber = Math.max(...numbersArr);
let MinNumber = Math.min(...numbersArr);

console.log(sortedArr);
console.log(reversedArr);
console.log(FilteredNumbers);
console.log(MaxNumber);
console.log(MinNumber);



let sum = (...numbers) => numbers.reduce((total, num) => total + num, 0);
let obj = `Result of sum operation for ${numbersArr.join(", ")} is ${sum(...numbersArr)}`;
console.log(obj);
// 3,1,6,3 is 13

let projectName = prompt("Enter project name:");
let projectId = prompt("Enter project Id:");
let projectData = prompt("Enter project Data:");
let projectDuration = prompt("Enter project duration:");


let object = (function(){
    return {projectName, projectId, projectData, projectDuration};
}(projectName, projectId, projectData, projectDuration) );

console.log(object)


let arr1 = [1,2,3,4,5,7,8]
let arr2 = [3,4,5,6,7,8,9]
let arr3 = [...arr1, ...arr2]
let arr4 = arr3.sort().filter((item, index) => arr3.indexOf(item) === index)
console.log(arr4)


let object2 = {
    Name : "John", 
    age: 15,
    address:{city : "Cairo", country: "Bani Hamad"},
    hobbies:["swimming", "chess", "reading"]
}
const { Name, age, address:{city, country} } = object2;
console.log(`Name : ${Name}, Age : ${age}, City : ${city}, Country : ${country}`)