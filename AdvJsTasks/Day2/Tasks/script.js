function Rectangle (width, height){
    area = function(){
        return width * height;
    };
    perimeter = function(){
        return 2 * (width + height);
    };
    getArea = function(){
        return area();
    };
    getPerimeter = function(){
        return perimeter();
    };
    displayInfo = function(){
        console.log("Width: " + width + ", Height: " + height);
        console.log("Area: " + this.getArea());
        console.log("Perimeter: " + this.getPerimeter());
    }
}
var rect = new Rectangle(5, 10);



function NumericalSequence (start, end, step){
    let arr = []

    for(let i = start; i <= end; i+=step){
        arr.push(i)
    }
    console.log(arr)


    function isValidValue(value) {
        // const isWithinRange = (value >= start && value <= end);

        const isMultipleOfStep = (value - start) % step === 0;
      //isWithinRange &&
        return  isMultipleOfStep;
      }

    function ensureNoDuplicates(value) {
        if (arr.includes(value)) {
            throw new Error("Value already exists in the sequence.");
        }
    }
    const obj = {
        append(value) {
            if (!isValidValue(value)) {
                throw new Error("Value does not belong to the sequence.");
            }
            ensureNoDuplicates(value);
            (value >= end)?
            arr.push(value):
            console.log("Value is smaller than the last number in the sequence.")
        },
        prepend(value) {
            if (!isValidValue(value)) {
                throw new Error("Value does not belong to the sequence.");
            }
            ensureNoDuplicates(value);
            (value <= start)?
            arr.unshift(value):
            console.log("Value is greater than the first number in the sequence.")
        },
        dequeue() {
            if (arr.length === 0) {
                throw new Error("Sequence is empty.");
            }
            return arr.shift();
        },
        pop() {
            if (arr.length === 0) {
                throw new Error("Sequence is empty.");
            }
            return arr.pop();
        },
        toString() {
            return `Sequence: ${arr.join(", ")}`;
        },
        displaySequence() {
            console.log(this.toString());
        }
    };
    Object.defineProperties(obj, {
        append: { writable: false, configurable: false, enumerable: false },
        prepend: { writable: false, configurable: false, enumerable: false },
        dequeue: { writable: false, configurable: false, enumerable: false },
        pop: { writable: false, configurable: false, enumerable: false },
        toString: { writable: false, configurable: false, enumerable: false },
        displaySequence: { writable: false, configurable: false, enumerable: false }
    });
    return obj;

}