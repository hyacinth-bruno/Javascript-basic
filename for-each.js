const numbers = [1, 2, 3, 4, 5];
console.log(numbers); 

// Using forEach to console.log the element in the array
numbers.forEach(function (number){
        console.log(number);
    });

// Using forEach to console.log the element with its index in the array
// numbers.forEach((element,index)=>{
//     console.log(`The index for ${element} is ${index}`);
//     });  

//    numbers.forEach((element, index) => console.log("[", index,"]", "=", "elemet"));
    numbers.forEach((element, index) => console.log(element, index));

