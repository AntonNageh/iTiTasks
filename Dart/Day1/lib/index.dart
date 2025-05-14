int multiTable() {
  int result = 1;
  for(int i = 1; i<=10; i++){
    for(int j =1 ; j<=10; j++){
      result = i * j;
      if(result % 2 == 0){
        print("$i x $j = $result"  " is even");
      }
      else {
        print("$i x $j = $result"  " is odd");
      }
    }
    print("\n\n");
  }
  return result;
}
String grade(int score){
  if(score >= 90 && score <= 100){
    return "A (90+)";
  }
  else if(score >= 80 && score < 90){
    return "B (80-89)";
  }
  else if(score >= 70 && score < 80){
    return "C (70-79)";
  }
  else if(score >= 60 && score < 70){
    return "D (60-69)";
  }
  else if(score >= 0 && score < 60){
    return "F (below 60)";
  }
  else{
    return "Invalid Score";
  }
}
String printName(){
String name = "Mahmoud";
return name;
}

String printName2(){
  String name = "Mahmoud  obyedalla";
  int age = 31;
  return("Name = $name, Age = $age");
}

String intToSTring(int number){
  var age = number;
  String ageString = age.toString();
  print(ageString.runtimeType);
  return ageString;
}

int twoNumbers (double a, double b){
  double division = a / b;
  int result = division.toInt();
  return result;
} 
int evenOrOdd(int number){
  if(number % 2 == 0){
    print("$number is even");
  }
  else{
    print("$number is odd");
  }
  return number;
}

int needleOrHaystack(String needle, String haystack){
    return haystack.indexOf(needle);
}

String reverseString(String str){
  String reversed = "";
  for(int i = str.length - 1; i >= 0; i--){
    reversed += str[i];
  }
  return reversed;
}
class Person {
  final String name;
  final int age;
  Person(this.name, this.age);
}

String listGeneration() {
  final people = List.generate(5, (index) => Person('Person $index', index * 10));
  return people.map((p) => 'Name: ${p.name}, Age: ${p.age}').join('; ');
}

