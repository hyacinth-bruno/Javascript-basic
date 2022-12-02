// loop
// 3.1 print the numbers from 1 to 100, print which are divisible by 3 or 5 but not both.
for (let i = 0; i < 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      if (i % 3 === 0 && i % 5 === 0) {
        continue;
      }
      console.log(i);
    }
  }


  for (let i = 0; i < 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        continue;
      }
      if(i%15!==0)
      console.log(i);
    }

// 3.2 take any positive number then return sum of its digits. for example number 123 => output :6
var value =  prompt("Enter a year: ");
    sum = 0;

while (value > 0) {
    sum += value % 10;
    value = Math.floor(value / 10);
}

console.log(sum);
