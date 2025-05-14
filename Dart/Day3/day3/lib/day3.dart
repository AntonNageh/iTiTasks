class Account {
  int ? accountNumber;
  int _balance = 0;
  String?  accountHolderName;
  Account(this.accountNumber, this._balance, this.accountHolderName);
  checkBalance(){
    return _balance;
  }
  deposit(int amount){
    _balance = _balance + amount;  
    checkBalance();
  }
  withdraw(int amount){
    _balance = _balance - amount;
    checkBalance();
  }
  @override
  String toString() {
    return 'Account{accountNumber: $accountNumber, balance: $_balance, accountHolderName: $accountHolderName';
  }
}

class SavingsAccount extends Account {
  int ? interestRate;
  SavingsAccount(int super.accountNumber, super.balance, String super.accountHolderName, this.interestRate);
  applyInterest(){
    print("interest applied to balance");
  }
 @override
String toString() {
  return '${super.toString()}, interestRate: $interestRate';
}
}
class CurrentAccount extends Account {
  int ? overDraftLimit;
  CurrentAccount(int super.accountNumber, super.balance, String super.accountHolderName, this.overDraftLimit);
  //should not allow withdrawal beyond that limit
  checkForLimit(){
    if(overDraftLimit! < _balance){
      print("overdraft limit exceeded");
    }
  }
  @override
  String toString() {
  return '${super.toString()}, overdraft limit: $overDraftLimit';
}
}


abstract class Book {
  void borrow() {
  }    

  void returnBook(){
  }
  @override
  String toString() {
    return 'Book{}';
  }
  
}
class EBook extends Book {
  int ? fileSize;

  downloadBook(){
    print('{Book downloaded with size : " + $fileSize}');
  } 
  
  @override
   borrow() {
    print("EBook borrowed");
  }
  @override
   String toString() {
    return 'EBook{fileSize: $fileSize}';
  }
  
}
class PrintedBook extends Book {
  isBookAvailable(){
    print("Book is available");
  }
  @override
  borrow(){
    print("Printed Book borrowed");
  }
  @override
   String toString() {
    return 'PrintedBook{}';
  }
}

class Library {
  final List<Book> _books = [];
  addBook(Book book){
    _books.add(book);
  }
  borrowBook(Book book){
    _books.remove(book);
  }
  returnBook(Book book){
    book.returnBook();
  }
 displayBooks() {
  String books = '';
  for (var book in _books) {
    books += "${book.toString()} ";
  }
  return books;
  }
}

  class Shape{
      calculateArea(){
      }
  }

  class Rectangle extends Shape{
    int? length;
    int? height;
    @override
    calculateArea(){
      return length! * height!;
    }
  }
  class Circle extends Shape{
    int? radius;
    @override
    calculateArea(){
      return 3.14 * radius! * radius!;
    }
  }
  class Triangle extends Shape{
    int? base;
    int? height;
    @override
    calculateArea(){
      return 0.5 * base! * height!;
    }
  }
  mixin PerimeterMixin{
    calculatePerimeter(){
      return 0;
    }
  }
  mixin VolumeMixin {
    calculateVolume(){
      return 0;
    }
  }
  class Square implements PerimeterMixin,  VolumeMixin {
    @override
    calculateVolume(){
      return "Square volume";
    }
    @override
    calculatePerimeter(){
      return "Square perimeter";
    }
}
    class Cube extends Square with PerimeterMixin, VolumeMixin {
      @override
      calculateVolume(){
        return "Cube volume";
      }
      @override
      calculatePerimeter(){
        return "Cube perimeter";
      }
    }

class Person {
  String? name;
  int? id;
  Person(this.name, this.id);
  displayDetails(){
    print("Person details");
  }
  getRole(){
    print("Person role");
  }

}
class Student extends Person {
  String ? grade;
  Student(this.grade, String name, int id) : super(name, id);
  @override
  displayDetails(){
    print("Student details : $name, $id, $grade");
  }
  @override
  getRole(){
    print("Student role");
  }
}

class Teacher extends Person {
  String ? subject;
  Teacher(this.subject, String name, int id) : super(name, id);
  @override
  displayDetails(){
    print("Teacher details : $name, $id, $subject");
  }
  @override
  getRole(){
    print("Teacher role");
  }
}
class Staff extends Person {
  String ? department;
  Staff(this.department, String name, int id) : super(name, id);
  @override
  displayDetails(){
    print("Staff details : $name, $id, $department");
  }
  @override
  getRole(){
    print("Staff role");
  }
}


class Product {
  int? price;
  Product(this.price);
  setPrice(int price) {
    this.price = price;
  }
  int? getPrice() {
    return price;
  }
  getDescription() {
    return "description";
  }
}

class PhysicalProduct extends Product {
  int? weight;
  int? shippingCost;

  PhysicalProduct(super.price, this.weight, this.shippingCost);

  @override
  getDescription() {
    return "weight: $weight shippingCost: $shippingCost";
  }
}

class DigitalProduct extends Product {
  int? fileSize;
  String? downloadLink;

  DigitalProduct(super.price, this.fileSize, this.downloadLink);

  @override
  getDescription() {
    return "fileSize: $fileSize downloadLink: $downloadLink";
  }
}

class ShoppingCart {
  final List<Product> _products = [];
  addProduct(Product product) {
    _products.add(product);
  }
  removeProduct(Product product) {
    _products.remove(product);
  }
  displayProducts() {
    String products = '';
    for (var product in _products) {
      products += "${product.getDescription()}";
    }
    return products;
  }
  calculateTotalPrice() {
    int totalPrice = 0;
    for (var product in _products) {
      totalPrice += product.getPrice() ?? 0;
    }
    return totalPrice;
  }
}

class Customer {
  placeOrder(ShoppingCart cart) {
    print("Order placed");
  }
}


abstract class Character {
  void attack(){}
  void defend(){}
  void heal(){}
}
  mixin Attacker {
    attack() {
      print("Attacking");
    }
  }
  mixin Defender{
    defend() {
      print("Defending");
    }
  }
  mixin Healer {
    heal() {
      print("Healing");
    }
  }
  class Warrior extends Character with Attacker, Defender {
    @override
    void attack() {
      print("Warrior attacks!");
    }

    @override
    void defend() {
      print("Warrior defends!");
    }
    @override
    void heal() {
      print("Warrior cannot heal!");
    }
  }
  class Mage extends Character with Attacker, Healer {
    @override
    void attack() {
      print("Mage attacks!");
    }

    @override
    void defend() {
      print("Mage cannot defend!");
    }
    @override
    void heal() {
      print("Mage heals!");
    }
  }
  class Archer extends Character with Healer, Defender {
    @override
    void attack() {
      print("Archer cannot attack!");
    }

    @override
    void defend() {
      print("Archer defends!");
    }
    @override
    void heal() {
      print("Archer heals!");
    }
  }
abstract class Configurable {
  void applyConfig(){}
  void resetConfig(){}
}

mixin NetworkConfig {
  void applyNetworkConfig() {
    print("Network configuration applied.");
  }
  void resetNetworkConfig() {
    print("Network configuration reset.");
  }
}
mixin DatabaseConfig {
  void applyDatabaseConfig() {
    print("Database configuration applied.");
  }
  void resetDatabaseConfig() {
    print("Database configuration reset.");
  }
}
mixin UIConfig {
  void applyUIConfig() {
    print("UI configuration applied.");
  }
  void resetUIConfig() {
    print("UI configuration reset.");
  }
}
class AppConfig extends Configurable with NetworkConfig, DatabaseConfig {
  @override
  void applyConfig() {
    applyNetworkConfig();
    applyDatabaseConfig();
  }
  
  @override
  void resetConfig() {
    resetNetworkConfig();
    resetDatabaseConfig();
  }
}
class ServerConfig extends Configurable with NetworkConfig, UIConfig {
  @override
  void applyConfig() {
    applyNetworkConfig();
    applyUIConfig();
  }

  @override
  void resetConfig() {
    resetNetworkConfig();
    resetUIConfig();
  }
}
class UserConfig extends Configurable with DatabaseConfig, UIConfig {
  @override
  void applyConfig() {
    applyDatabaseConfig();
    applyUIConfig();
  }

  @override
  void resetConfig() {
    resetDatabaseConfig();
    resetUIConfig();
  }
}

class DiscountStrategy {
  void applyDiscount(double total){}
}
class PercentageDiscount implements DiscountStrategy {
  final double percent; 
  PercentageDiscount(this.percent);

  @override
  String applyDiscount(double total) {
    return "Percentage discount applied";
  }
}
class FlatDiscount implements DiscountStrategy {
 final double amount;
  FlatDiscount(this.amount);

  @override
  String applyDiscount(double total) {
    return "Flat discount applied";
  }
}
class FreeShipping implements DiscountStrategy {
  final double shippingFee;
  FreeShipping(this.shippingFee);

  @override
  String applyDiscount(double total) {
    return "Free shipping applied";
  }
}
class ShoppingCart2  {
  final List<Product> _products = [];
  DiscountStrategy? discountStrategy;

  addProduct(Product product) {
    _products.add(product);
  }
  removeProduct(Product product) {
    _products.remove(product);
  }
  displayProducts() {
    String products = '';
    for (var product in _products) {
      products += "${product.getDescription()}";
    }
    return products;
  }
  calculateTotalPrice() {
    return discountStrategy!.applyDiscount(0);
  }
}

abstract class Vehicle {
  void start(){}
}
class Car extends Vehicle {
  String ? fuelType;
  Car(this.fuelType);
  @override
  void start() {
    print("Car started");
  }
}
class Bike extends Vehicle {
 String ? engineType;
 Bike(this.engineType);
   @override
  void start() {
    print("Bike started");
  }
}
class Truck extends Vehicle {
 int ? loadCapacity;
 Truck(this.loadCapacity);
   @override
  void start() {
    print("Truck started");
  }
}
