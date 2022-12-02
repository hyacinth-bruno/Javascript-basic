// Function
// 2.1 Write a function named greeting and console Hello
function greeting() {
    console.log("hello");
  }
  greeting();

// 2.2 Write a function named greeting, which contains a parameter called name, and in the function, there would be console.log("Hi" + name)
function greeting(userName) {
    console.log("Hi" + " userName");
  }
  greeting();


// 2.3 Write a function to calculate the sum of  two numbers (there would be 2 parameters in the function)
function sum(num1, num2) {
    const result = num1 + num2;
     console.log(result);
   }
   sum(1, 2);

// 2.4 Write a function to double value of number (there would be 2 parameter in the function)
function doubleValue(a, b) {
    return a * b;
}
doubleValue(2,3);

// Arrow Function
greeting = (userName) => {
    console.log("Hi" + " userName");
  }
greeting();

// convert those function above to arrow function
greetings = () => console.log("Hello");
greetings();

man = (a,b) => a + b;
man(10,20);

greet = (username) => console.log("Hi" + " Username")
greet();


