const a = 3;
// write a if-else condition to check if a is bigger or smaller to 5
function leapYear(year) {
    if ((year % 4 == 0 )|| (year % 400 ==0)) {
      console.log(year + " is a Leap year" + "<br>");
  
    } else {
      console.log(a + " is not a Leap year" + "<br>");
    }
  }
  
  const year = prompt("Enter a year: ");
  leapYear(year);



  const a = 3;
if (a>5) console.log("a is greater than 5");
else if (a==5){
    console.log("a is equal 5")
}
else console.log("number .....")


const num = prompt("Enter a number: ");;
if (num>5) console.log("a is greater than 5");
else if (num==5){
    console.log("a is equal 5")
}
else console.log("number .....")
