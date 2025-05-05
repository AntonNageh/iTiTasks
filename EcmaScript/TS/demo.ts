
interface User {
    name: string;
    age: number;
}

const Person: User = {
    name: "John",
    age: 30
}
//console.log(Person.name); // Output: John



// This will cause an error because age is required
//const Person2: User = {
    name: "John"
//} 


//--------------------------------------------------------------------------------------------------------------------------


//Create an interface Profile with optional properties username (string) and email (string).
//required create an object with both properties.

interface Profile {
    username?: string;
    email?: string;
}

const UserProfile: Profile = {
    username: "johndoe",
    email: "W2hY7@example.com"
}
const UserProfile2: Profile = {
    username: "johndoe"
}
const UserProfile3: Profile = {
    email: "test@ex.com"

}
//console.log(UserProfile, " , " , UserProfile2, " , " , UserProfile3); 

//--------------------------------------------------------------------------------------------------------------------------

//Use Record to create an object where keys are "red", "green", and "blue", and values are their corresponding hex color codes (strings). 
//Test by accessing the red key.

const colors: Record<string, string> = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
}
//console.log(colors.red); // #FF0000


//--------------------------------------------------------------------------------------------------------------------------



interface Person {
    name: string;
    age: number;
    email?: string; 
}
//   create a new type with only the name and email properties.
//   Test by creating an object with these properties.

type PersonWithNameAndEmail = Pick<Person, "name" | "email">;
const person: PersonWithNameAndEmail = {
    name: "John",
    email: "W2hY7@example.com"
}
//console.log(person," , " ,person.name); // Output: { name: 'John', email: "W2hY7@example.com" } , John

//--------------------------------------------------------------------------------------------------------------------------

//Use the same Person interface from the previous question.
//create a new type without the age property.
//Test by creating an object with only name and email.

// The Omit utility type is a built-in TypeScript utility type that allows you to create a new type by omitting certain properties from an existing type.
type PersonWithoutAge = Omit<Person, "age">;
const personWithoutAge: PersonWithoutAge = {
    name: "John",
    email: "W2hY7@example.com"
}

//another solution
type PersonWithoutAge2 = Pick<Person, "name" | "email">;

const personWithoutAge2: PersonWithoutAge2 = {
    name: "Anton",
    email: "123@example.com"
}
//console.log(personWithoutAge); // Output: { name: 'John', email: 'W2hY7@example.com' }
//console.log(personWithoutAge2); // Output: { name: 'Anton', email: '123@example.com' }

//--------------------------------------------------------------------------------------------------------------------------

//Create a union type Colors = "red" | "green" | "blue" | "yellow".
//create a new type without "yellow".
//Test by assigning a value of the new type.

type Colors = "red" | "green" | "blue" | "yellow";
type ColorsWithoutYellow = Exclude<Colors, "yellow">;

const colorWithoutYellow: ColorsWithoutYellow = "red"; //red|green|blue are valid but yellow is not valid (excluded)
//console.log(colorWithoutYellow); // Output: red


//--------------------------------------------------------------------------------------------------------------------------

//Use the same Colors union type from the previous question.
// create a new type with only "red" and "blue".
// Test by assigning a value of the new type.

type ColorsOnlyRedAndBlue = Extract<Colors, "red" | "blue">;

const colorOnlyRedAndBlue: ColorsOnlyRedAndBlue = "red"; //red|blue are valid but green and yellow are not valid (excluded)
//console.log(colorOnlyRedAndBlue); // Output: red

//--------------------------------------------------------------------------------------------------------------------------

//Create a union type MaybeString = string | null | undefined.
// create a new type without null or undefined.
// Test by assigning a value of the new type.

type MaybeString = string | null | undefined;
type NonNullString = Exclude<MaybeString, null | undefined>;

const nonNullString: NonNullString = "hello";
//console.log(nonNullString); // Output: hello


