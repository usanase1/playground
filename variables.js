let userName =" Usanase";
const birthYear = 1999;
let currentYear = 2025;
let userAge = currentYear - birthYear;
let message = `My name is ${userName} , and I'm ${userAge}years old`
console.log(message)
 const ages = (age) =>{
    let bYear = currentYear - age;
    console.log(`User birth year ${bYear}`)
   
 }
 ages(20)
  
 let user =  { name:"Germaine", age:19 ,country:"Rwanda"}
 console.log(user)
   

let colors = ["black" , "blue" ,"white"," red", "green"]
// array destructuring
const [fColor , sColor] = colors;
console.log(fColor)
console.log(sColor)

//let nums = [6,7,20,11,5]
const numbers =(...nums)=>{
   return nums.reduce((total, number) => total + number , 0);
};
const result = numbers(10, 2,7,9,18)
console.log(result);

const arr1 = [6,1,7]
const arr2 = [10,11,12]
const mergeArray = [...arr1, ...arr2]
console.log(`merged array : ${mergeArray}`)

const fetchData = () => {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       let success = true;
       if (success) {
         resolve("Data fetched successfully!");
       } else {
         reject("Error fetching data");
       }
     }, 2000);
   });
 };
 
 fetchData()
   .then((message) => console.log(message))
   .catch((error) => console.log(error));