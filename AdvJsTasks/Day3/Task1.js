// const Shape = class {
//     constructor(width, height) {
//         if (this.constructor === Shape) {
//             throw new Error("Cannot instantiate abstract class Shape");
//         }
//         this.width = width;
//         this.height = height;
//     }
// };

// const Rectangle = class extends Shape {
//     static instance = null; 

//     constructor(width, height) {
//         if (Rectangle.instance) {
//             return Rectangle.instance;
//         }
//         super(width, height);
//         Rectangle.instance = this; 
//     }

//     getarea() {
//         return this.width * this.height;
//     }

//     getperimeter() {
//         return 2 * (this.width + this.height);
//     }

//     toString() {
//         return `Width: ${this.width}, Height: ${this.height}, Area: ${this.getarea()}, Perimeter: ${this.getperimeter()}`;
//     }
// };

// const Square = class extends Rectangle {
//     static instance = null; 

//     constructor(width, height) {
//         if (Square.instance) {
//             return Square.instance; 
//         }
//         super(width, height);
//         Square.instance = this;
//     }

//     toString() {
//         return `Width: ${this.width}, Height: ${this.height}, Area: ${this.getarea()}, Perimeter: ${this.getperimeter()}`;
//     }

//     valueOf() {
//         return this.getarea();
//     }
// };

// // Test cases
// const square1 = new Square(5, 5);
// const square2 = new Square(3, 3);
// console.log(square1 === square2); // true


// const rectangle1 = new Rectangle(10, 5);
// const rectangle2 = new Rectangle(7, 4); 
// console.log(rectangle1 === rectangle2); // true



// const result = rectangle1 + rectangle2; 
// console.log(result);    //50

// const result2 = rectangle1 - rectangle2;
// console.log(result2);   //0

// const result3 = square1 + square2; 
// console.log(result3);   //25

// const result4 = square1 - square2;
// console.log(result4);   //0



const Shape = {
    create(width, height) {
        if (this === Shape) {
            throw new Error("Cannot instantiate abstract object Shape");
        }
        this.width = width;
        this.height = height;
        return this;
    }
};

const Rectangle = Object.create(Shape);
Rectangle.instance = null;

Rectangle.create = function (width, height) {
    if (Rectangle.instance) {
        return Rectangle.instance;
    }
    const rect = Object.create(Rectangle);
    Shape.create.call(rect, width, height);
    Rectangle.instance = rect;
    return rect;
};

Rectangle.getarea = function () {
    return this.width * this.height;
};

Rectangle.getperimeter = function () {
    return 2 * (this.width + this.height);
};

Rectangle.toString = function () {
    return `Width: ${this.width}, Height: ${this.height}, Area: ${this.getarea()}, Perimeter: ${this.getperimeter()}`;
};

const Square = Object.create(Rectangle);
Square.instance = null;

Square.create = function (width, height) {
    if (Square.instance) {
        return Square.instance;
    }
    const square = Object.create(Square);
    Rectangle.create.call(square, width, height);
    Square.instance = square;
    return square;
};

Square.toString = function () {
    return `Width: ${this.width}, Height: ${this.height}, Area: ${this.getarea()}, Perimeter: ${this.getperimeter()}`;
};

Square.valueOf = function () {
    return this.getarea();
};

// Test cases
const square1 = Square.create(5, 5);
const square2 = Square.create(3, 3);
console.log(square1 === square2); // true

const rectangle1 = Rectangle.create(10, 5);
const rectangle2 = Rectangle.create(7, 4);
console.log(rectangle1 === rectangle2); // true

const result = rectangle1 + rectangle2;
console.log(result); // 50

const result2 = rectangle1 - rectangle2;
console.log(result2); // 0

const result3 = square1 + square2;
console.log(result3); // 25

const result4 = square1 - square2;
console.log(result4); // 0