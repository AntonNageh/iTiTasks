// const {MathUtils} = require("../index.js");
// describe("Test MathUtils", () => {
//     let math;
//     beforeEach(() => {
//         math = new MathUtils();
//     })
//     it("Test sum" , () => {
//         expect(math.sum(1,1)).toEqual(2);
//         expect(math.sum(1,1)).toBe(2);
//         expect(math.sum(1,1)).toEqual(jasmine.any(Number));
//     })
// })
// //X for skip, F for only



// import { capitalizeText, createArray } from "../index.js";
// jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

// // Task 1: Jasmine tests for capitalizeText
// describe("test capitalizeText", () => {
//   it("should capitalize string", () => {
//     expect(capitalizeText("dodo")).toBe("DODO");
//   });

//   it("should throw error if input is not string", () => {
//     expect(() => capitalizeText(12)).toThrowError("parameter should be string");
//   });
// });

// // Task 2: Jasmine tests for createArray
// describe("test createArray", () => {
//   it("should return an array", () => {
//     expect(Array.isArray(createArray(2))).toBeTrue();
//   });

//   it("should return array of length 3 and include 1", () => {
//     const arr = createArray(3);
//     expect(arr.length).toBe(3);
//     expect(arr).toContain(1);
//   });

//   it("delayed test process", (done) => {
//     setTimeout(() => {
//       expect(createArray(4).length).toBe(4);
//       done();
//     }, 5000);
//   });

//   // Pending test
//   xit("should return an empty array if input is 0");
// });