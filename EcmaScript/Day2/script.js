let set = new Set([1, 2, 3, 4, 5, 3, 2]);
const found = set.find(x => x > 3);
console.log(found)
let removed = set.delete(3);
let array = Array.from(set);

set.forEach(value => {
	console.log(value);
});


for (const value of set) {
	console.log(value);
}

//-----------------------------------------------//-----------------------------------------------//


const student = new Map()
student.set("Alice" , 85)
student.set("Bob" , 90)
student.set("Charlie" , 78)


student.get("Bob")
student.set("Charlie", 88)
student.has("David")

student.forEach((value, key) => {
    console.log(key, value);
});

for (const value of student) {
    console.log(value);
}

//-----------------------------------------------//-----------------------------------------------//


const Country = new Map()
Country.set("USA" , "331 million")
Country.set("India" , "1380 million")
Country.set("China" , "1441 million")


const countryObject = Object.fromEntries(Country);
console.log(countryObject);

const mapFromObject = new Map(Object.entries(countryObject));
console.log(mapFromObject);

let newset = new Set(mapFromObject.keys());
console.log(newset);

let array2 = Array.from(newset);
console.log(array2);
//-----------------------------------------------//-----------------------------------------------//

class Employee {
    constructor(id, salary, department) {
        this.id = id;
        this.salary = salary;
        this.department = department;
    }

    getDetails() {
        return `ID: ${this.id}, Salary: ${this.salary}, Department: ${this.department}`;
    }
}
class Manager extends Employee {
    constructor(id, salary, department, teamSize) {
        super(id, salary, department);
        this.teamSize = teamSize;
    }

    getDetails() {
        return `${super.getDetails()}, Team Size: ${this.teamSize}`;
    }
}
    const manager = new Manager(1, 5000, "Engineering", 10);
    console.log(manager.getDetails());
    manager.id = 2;
    console.log(manager.getDetails());
    console.log(manager.salary);
//-----------------------------------------------//-----------------------------------------------//

    class Temperature {
        constructor(celsius) {
            this.#celsius = celsius;
        }
        #celsius;
        get celsius() {
            return this.#celsius;
        }
        set celsius(value) {
            if (value < -273.15) {
                throw new Error("Temperature cannot be below absolute zero (-273.15°C)");
            }
            this.#celsius = value;
        }
    }

    const temperature = new Temperature(25);
    console.log(temperature.celsius); 
    temperature.celsius = 30;
    console.log(temperature.celsius);
    // Attempting to set a value below absolute zero (-273.15°C)
    try {
        temperature.celsius = -300;
    } catch (error) {
        console.error(error.message);
    }
    console.log(temperature.celsius);
    temperature.celsius = 20;
    console.log(temperature.celsius);

//-----------------------------------------------//-----------------------------------------------//

class MathUtils {
    static PI = 3.14;

    static calculateCircumference(radius) {
        return 2 * this.PI * radius;
    }
}
const radius = 5;
const circumference = MathUtils.calculateCircumference(radius);
console.log(`Circumference of a circle with radius ${radius} is ${circumference}`);


//-----------------------------------------------//-----------------------------------------------//

 findFirstUniqueChar = (str) => {
    const charCount = {};
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}
const str = "abacbd";
const uniqueChar = findFirstUniqueChar(str);
console.log(uniqueChar); //c