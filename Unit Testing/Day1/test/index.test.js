
import * as chai from "chai";
let { assert, expect } = chai;
let should = chai.should();
import { capitalizeText, createArray } from "../index.js";
//Using expect()
describe("test capitalizeText", () => {
  it("test string", () => {
    expect(capitalizeText("anton")).equal("ANTON");
  });
  it("test  num", () => {
    expect(() => capitalizeText(12)).to.throw("parameter should be string");
  });
});

//Using .should
describe("test capitalizeText", () => {
  it("test string", () => {
    capitalizeText("anton").should.equal("ANTON");
  });
  it("test  num", () => {
    (() => capitalizeText(12)).should.to.throw("parameter should be string");
  });
});

//Using Assert()
describe("test capitalizeText", () => {
  it("test string", () => {
    assert.equal(capitalizeText("anton"), "ANTON");
  });
  it("test  num", () => {
    it("test num", () => {
      assert.throws(
        () => capitalizeText(12),
        TypeError,
        "parameter should be string"
      );
    });
  });
});

// Array task
describe("test createArray", () => {
  it("test that the return value of type array", () => {
    expect(createArray(2)).to.be.an("array");
  });

  it("test if we pass 3 it will return array of length 3", () => {
    expect(createArray(3)).length(3).include(1);
  });


  //adjusting timeout to be 10 secs with (done)

  it("delayed test process", (done) => {
    setTimeout(() => {
      expect(createArray(4)).to.have.lengthOf(4);
      done(); 
    }, 5000); 


  });

  //Pending task
  it("should return an empty array if input is 0");
});