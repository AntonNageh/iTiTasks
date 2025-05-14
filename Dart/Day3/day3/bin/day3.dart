import 'package:day3/day3.dart';
void main() {
  //Task 1

  // Account account1 = Account(9910, 1000, "Anton");
  // //print(account1._balance); error
  // print(account1.toString());
  // print(account1.checkBalance());
  // account1.deposit(1000);
  // print(account1.checkBalance());
  // account1.withdraw(500);
  // print(account1.checkBalance());


  // SavingsAccount account2 = SavingsAccount(9820, 2000, "Nageh", 5);
  // print(account2.toString());
  // print(account2.checkBalance());
  // account2.deposit(1000);
  // print(account2.checkBalance());
  // account2.withdraw(500);
  // account2.applyInterest();
  // print(account2.checkBalance());


  // CurrentAccount account3 = CurrentAccount(9730, 3000, "Ahmed", 1000);
  // print(account3.toString());
  // print(account3.checkBalance());
  // account3.deposit(1000);
  // print(account3.checkBalance());
  // account3.withdraw(500);
  // account3.checkForLimit();
  // print(account3.checkBalance());



  //Task 2

//  Library library = Library();

//   // Add books to the library
//   EBook eBook = EBook();
//   eBook.fileSize = 100;
//   library.addBook(eBook);
//   print(library.displayBooks());
//   PrintedBook printedBook = PrintedBook();
//   library.addBook(printedBook);

//   // Borrow a book
//   print('Borrowing eBook...');
//   library.borrowBook(eBook);
//   print(library.displayBooks());
//   // Return a book
//   print('Returning eBook...');
//   library.returnBook(eBook);
//   // Display all books in the library
//   print('Displaying all books...');
//   library.displayBooks();
// }

  // Task 3
  // Test Rectangle
  // Rectangle rectangle = Rectangle();
  // rectangle.length = 4;
  // rectangle.height = 5;
  // print('Rectangle area: ${rectangle.calculateArea()}');

  // // Test Circle
  // Circle circle = Circle();
  // circle.radius = 3;
  // print('Circle area: ${circle.calculateArea()}');

  // // Test Triangle
  // Triangle triangle = Triangle();
  // triangle.base = 4;
  // triangle.height = 5;
  // print('Triangle area: ${triangle.calculateArea()}');

  // // Test Square
  // Square square = Square();
  // print('Square perimeter: ${square.calculatePerimeter()}');
  // print('Square volume: ${square.calculateVolume()}');

  // // Test Cube
  // Cube cube = Cube();
  // print('Cube perimeter: ${cube.calculatePerimeter()}');
  // print('Cube volume: ${cube.calculateVolume()}');

  // Task 4

  // // Test Person
  // Person person = Person('John Doe', 123);
  // person.displayDetails();
  // person.getRole();

  // // Test Student
  // Student student = Student('A', 'Jane Doe', 456);
  // student.displayDetails();
  // student.getRole();

  // // Test Teacher
  // Teacher teacher = Teacher('Math', 'Bob Smith', 789);
  // teacher.displayDetails();
  // teacher.getRole();

  // // Test Staff
  // Staff staff = Staff('HR', 'Alice Johnson', 1011);
  // staff.displayDetails();
  // staff.getRole();

  // Task 5 
  // PhysicalProduct physicalProduct = PhysicalProduct(20, 10, 20);
  // print(physicalProduct.getPrice()); 
  // print(physicalProduct.getDescription()); 

  // DigitalProduct digitalProduct = DigitalProduct(50, 100, 'https://example.com/download');
  // print(digitalProduct.getPrice()); 
  // print(digitalProduct.getDescription()); 

  // ShoppingCart cart = ShoppingCart();
  // cart.addProduct(physicalProduct);
  // cart.addProduct(digitalProduct);
  // print(cart.displayProducts());
  // print(cart.calculateTotalPrice()); 

  // Customer customer = Customer();
  // customer.placeOrder(cart); 

  // Task 6
  //   List<Character> characters = [
  //   Warrior(),
  //   Mage(),
  //   Archer(),
  // ];

  // for (var character in characters) {
  //   character.attack();
  //   character.defend();
  //   character.heal();
  //   print('---');
  // }

  // Task 7 

  //   List<Configurable> configs = [
  //   AppConfig(),
  //   ServerConfig(),
  //   UserConfig(),
  // ];

  // for (var config in configs) {
  //   config.applyConfig();
  //   config.resetConfig();
  //   print('---');
  // }

  // Task 8
  // ShoppingCart2 cart = ShoppingCart2();

  // // Apply 10% discount
  // cart.discountStrategy = PercentageDiscount(0.1);
  // print("Total with 10% discount: ${cart.calculateTotalPrice()}");

  // // Apply flat discount of 30
  // cart.discountStrategy = FlatDiscount(30);
  // print("Total with flat discount: ${cart.calculateTotalPrice()}");

  // // Apply free shipping (assume shipping fee is 10)
  // cart.discountStrategy = FreeShipping(10);
  // print("Total with free shipping: ${cart.calculateTotalPrice()}");

  // Task 9 
  // Car car = Car("Gasoline");
  // Bike bike = Bike("2-Stroke");
  // Truck truck = Truck(5);

  // car.start();  
  // bike.start();
  // truck.start(); 

  // print(car.fuelType); 
  // print(bike.engineType);
  // print(truck.loadCapacity); 

}