// declare an array name: numberList that contains number from 1 to 10
let numberList = [1,2,3,4,5,6,7,8,9,10];
console.log(numberList);  

// check the length of the array
console.log(numberList.length);


// using array method to add the number 11 to the end of the array
const result = numberList.push(11);
console.log(numberList);

// using array method to add the number 0 to the beginning of the array
numberList.unshift(0);
console.log(numberList);

// using array method to remove the last number of the array
//numberList.pop();
numberList.pop(4);
console.log(numberList); 
console.log(numberList, "first");