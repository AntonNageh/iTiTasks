class Vehicle {
    #speed;
    #color;

    constructor(speed, color) {
        if (typeof speed !== "number" || typeof color !== "string") {
            throw new Error("Invalid data type for Vehicle properties");
        }
        this.#speed = speed;
        this.#color = color;

        Object.defineProperty(this, "speed", {
            get: () => this.#speed,
            set: (value) => {
                if (typeof value !== "number") throw new Error("Speed must be a number");
                this.#speed = value;
            },
            configurable: false,
            enumerable: false,
        });

        Object.defineProperty(this, "color", {
            get: () => this.#color,
            set: (value) => {
                if (typeof value !== "string") throw new Error("Color must be a string");
                this.#color = value;
            },
            configurable: false,
            enumerable: false,
        });
    }

    turnLeft() {
        console.log("Turning left");
    }

    turnRight() {
        console.log("Turning right");
    }

    start() {
        console.log("Vehicle started");
        return true;
    }

    stop() {
        console.log("Vehicle stopped");
        return true;
    }

    goBackward() {
        console.log("Going backward");
    }

    goForward() {
        console.log("Going forward");
    }

    toString() {
        return console.log("Vehicle: Speed = " + this.#speed + ", Color = " + this.#color);
    }

    valueOf() {
        return this.#speed;
    }
}

class Bicycle extends Vehicle {
    #numWheels;
    #weight;

    constructor(speed, color, numWheels, weight) {
        super(speed, color);
        if (typeof numWheels !== "number" || typeof weight !== "number") {
            throw new Error("Invalid data type for Bicycle properties");
        }
        this.#numWheels = numWheels;
        this.#weight = weight;
    }

    ringBell() {
        console.log("Bell is ringing");
    }

    toString() {
        return `Bicycle: Speed = ${this.speed}, Color = ${this.color}, Wheels = ${this.#numWheels}, Weight = ${this.#weight}`;
    }

    valueOf() {
        return this.#weight;
    }
}

class MotorVehicle extends Vehicle {
    #sizeOfEngine;
    #licensePlate;

    constructor(speed, color, sizeOfEngine, licensePlate) {
        super(speed, color);
        if (typeof sizeOfEngine !== "number" || typeof licensePlate !== "string") {
            throw new Error("Invalid data type for MotorVehicle properties");
        }
        this.#sizeOfEngine = sizeOfEngine;
        this.#licensePlate = licensePlate;
    }

    getSizeOfEngine() {
        return this.#sizeOfEngine;
    }

    getLicensePlate() {
        return this.#licensePlate;
    }

    toString() {
        return `MotorVehicle: Speed = ${this.speed}, Color = ${this.color}, Engine Size = ${this.#sizeOfEngine}, License Plate = ${this.#licensePlate}`;
    }

    valueOf() {
        return this.#sizeOfEngine;
    }
}

class DumpTruck extends MotorVehicle {
    #loadCapacity;
    #numWheels;
    #weight;

    constructor(speed, color, sizeOfEngine, licensePlate, loadCapacity, numWheels, weight) {
        super(speed, color, sizeOfEngine, licensePlate);
        if (typeof loadCapacity !== "number" || typeof numWheels !== "number" || typeof weight !== "number") {
            throw new Error("Invalid data type for DumpTruck properties");
        }
        this.#loadCapacity = loadCapacity;
        this.#numWheels = numWheels;
        this.#weight = weight;
    }

    lowerWeight() {
        console.log("Lowering weight");
    }

    raiseWeight() {
        console.log("Raising weight");
    }

    toString() {
        return `DumpTruck: Speed = ${this.speed}, Color = ${this.color}, Engine Size = ${this.getSizeOfEngine()}, License Plate = ${this.getLicensePlate()}, Load Capacity = ${this.#loadCapacity}, Wheels = ${this.#numWheels}, Weight = ${this.#weight}`;
    }

    valueOf() {
        return this.#weight;
    }
}

class Car extends MotorVehicle {
    #numOfDoors;
    #numWheels;
    #weight;

    constructor(speed, color, sizeOfEngine, licensePlate, numOfDoors, numWheels, weight) {
        super(speed, color, sizeOfEngine, licensePlate);
        if (typeof numOfDoors !== "number" || typeof numWheels !== "number" || typeof weight !== "number") {
            throw new Error("Invalid data type for Car properties");
        }
        this.#numOfDoors = numOfDoors;
        this.#numWheels = numWheels;
        this.#weight = weight;
    }

    switchOnAirConditioner() {
        console.log("Air conditioner switched on");
    }

    getNumOfDoors() {
        return this.#numOfDoors;
    }

    toString() {
        return `Car: Speed = ${this.speed}, Color = ${this.color}, Engine Size = ${this.getSizeOfEngine()}, License Plate = ${this.getLicensePlate()}, Doors = ${this.#numOfDoors}, Wheels = ${this.#numWheels}, Weight = ${this.#weight}`;
    }

    valueOf() {
        return this.#weight;
    }
}

// Test cases
const bicycle = new Bicycle(20, "Green", 2, 15);
console.log(bicycle.toString());
bicycle.ringBell();

const car = new Car(100, "Red", 2.5, "ABC-123", 4, 4, 1500);
console.log(car.toString());
car.switchOnAirConditioner();

const dumpTruck = new DumpTruck(60, "Blue", 5.0, "XYZ-789", 10000, 6, 8000);
console.log(dumpTruck.toString());
dumpTruck.raiseWeight();