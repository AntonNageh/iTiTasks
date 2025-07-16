// Task 1 Counter
function Counter() {
  this.activeInstances = 0;
}

Counter.prototype.addInstance = function() {
  this.activeInstances++;
  console.log("Added instance, Total:", this.activeInstances);
};

Counter.prototype.removeInstance = function() {
  if (this.activeInstances > 0) {
    this.activeInstances--;
    console.log("Removed instance, Total:", this.activeInstances);
  }
};

Counter.prototype.getInstanceCount = function() {
  return this.activeInstances;
};

Counter.prototype.resetInstances = function() {
  this.activeInstances = 0;
  console.log("Reset all instances, Total:", this.activeInstances);
};

const counter = new Counter();
counter.addInstance();
counter.addInstance();
console.log("Count:", counter.getInstanceCount()); //2
counter.removeInstance();

// Task 2
function Document(id, title, header, footer, text) {
  this.id = id;
  this.title = title;
  this.header = header;
  this.footer = footer;
  this.text = text;
  this.pages = 1;
}

Document.prototype.copy = function(newTitle) {
  const newDoc = new Document(documents.length + 1, newTitle || this.title + " (Copy)", this.header, this.footer, this.text);
  documents.push(newDoc);
  return newDoc;
};

const documents = [];

function createDocument(title, header, footer, text) {
  const doc = new Document(documents.length + 1, title, header, footer, text);
  documents.push(doc);
  return doc;
}

function getAllDocs() {
  return documents;
}

const doc1 = createDocument("Report", "Header", "Footer", "Some text here");
const doc2 = doc1.copy("New Report");
console.log("Created docs:", getAllDocs().length);

// Task 3: Pizza builder
function Pizza() { 
  this.size = null;
  this.base = null;
  this.sauce = null;
  this.toppings = [];
}

Pizza.prototype.addBase = function(base) {
  if (["thin", "thick", "stuffed"].includes(base)) {
    this.base = base;
  } else {
    console.log("Invalid base");
  }
};
Pizza.prototype.addSize = function(size) {
  if (["small", "medium", "large"].includes(size)) {
    this.size = size;
  } else {
    console.log("Invalid size");
  }
}
Pizza.prototype.addSauce = function(sauce) {
  if (["tomato", "bbq", "ranch"].includes(sauce)) {
    this.sauce = sauce;
  } else {
    console.log("Invalid sauce");
  }
};

Pizza.prototype.addTopping = function(topping) {
  if (["pepperoni", "mushrooms", "cheese", "peppers", "olives"].includes(topping)) {
    this.toppings.push(topping);
  }
};

Pizza.prototype.calculatePrice = function() {
  const pricing = {
    thin: 8, thick: 10, stuffed: 12,
    small: 2, medium: 4, large: 6,
    tomato: 0, bbq: 1, ranch: 2,
    pepperoni: 3, mushrooms: 2, cheese: 2, peppers: 2, olives: 1.5
  };
  let total = 0;
  if (this.base) total += pricing[this.base];
  if (this.sauce) total += pricing[this.sauce];
  if (this.size) total += pricing[this.size];
  this.toppings.forEach(t => total += pricing[t]);
  return total;
};

const myPizza = new Pizza();
myPizza.addBase("thick");
myPizza.addSize("large");
myPizza.addSauce("tomato");
myPizza.addTopping("pepperoni");
myPizza.addTopping("mushrooms");
console.log("Pizza:", myPizza);
console.log("Price:", myPizza.calculatePrice());