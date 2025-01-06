function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Accessing the first element
console.log(greeter(user[0]));

// Solution 2: Joining array elements into a string
console.log(greeter(user.join(" ")));

// Solution 3: Using a type that accepts either string or array of strings
function greeter2(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(" ");
  }
}
console.log(greeter2(user));
console.log(greeter2("Jane"));