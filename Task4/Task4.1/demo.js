var message = prompt("Enter the message", "")
var CaseSens = confirm("Do you want to consider Case Sensitivity", "")
let repeatedCharacter = prompt("Which character you want to search for? ", "");
let repeatedCharacterNum = 0;

//Patterns for both cases
let Casepattern = new RegExp(repeatedCharacter, "g");
let NonCasepattern = new RegExp(repeatedCharacter, "ig");

// Check if pattern is not found or the entered message is empty
if (message.length === 0 || !repeatedCharacter) {
   document.write("Pattern was not found, entered message is empty or no character was entered")
}

//Check if CaseSens is true
else if(CaseSens){
     repeatedCharacterNum = message.match(Casepattern).length
}
else {
    repeatedCharacterNum = message.match(NonCasepattern).length;
}
repeatedCharacterNum? document.writeln(repeatedCharacterNum) : null


//                              !! Another solution using indexOf() !!
/* using indexOf()
let message = prompt("Enter the message", "")
let repeatedCharacter = prompt("Which character you want to search for? ", "");
let count = 0;
let index = message.indexOf(repeatedCharacter); // Output will be the index of the first match or -1 if not found

while (index !== -1) {
  count++;
  index = message.indexOf(repeatedCharacter, index + 1); // Start searching from the next index to avoid duplicates
}

document.write(count);

*/ 
