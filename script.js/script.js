
//JavaScript Variables

/*EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? 
//Store the following into variables: job title, geographic location, annual salary, company name. 
//Output your fortune to the console like so: "You will be a X in Y, making $N for Z." */

let jobTitle = 'Designer'
let myHomeCity = 'Toronto'
let annualSalary = 100000
let monthlySalary = annualSalary / 12
let companyName = 'Neon'

console.log (`You will be a ${jobTitle} in ${myHomeCity}, making $${annualSalary} for${companyName} .`)

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. 
//Store their birth year in a variable. Calculate their age based on the stored values. 
//Output them to the console like so: "They are NN years old.", substituting the values.

let currentYear = 2020
let birthYear = 1992


console.log (`They are ${currentYear} - ${birthYear} years old,`)


//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. 
//Store a maximum age into a variable. Store an estimated amount per day (as a number). 
//Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".

let maxCurrentAge = 27
let maxAge = 100
let amountPerDay = 5

console.log (`You will need ${(maxCurrentAge) * 365*5} to last you until the ripe old age of ${maxAge}`)

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. 
//Store a radius into a variable. Calculate the circumference based on the radius, 
//and output "The circumference is NN". Calculate the area based on the radius, 
//and output "The area is NN"

let radius = 3 
let circumference = math.PI * 2*radius
let area = math.PI * radius * radius

console.log (`The circumference is ${The circumference is}`);
console.log(`The area is ${area}`);

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. 
//Store a celsius temperature into a variable. 
//Convert it to fahrenheit and output "NN°C is NN°F".  
//Now store a fahrenheit temperature into a variable. 
//Convert it to celsius and outut "NN°F is NN°C."

let celsius = 80
let fahrenheit = 70

console.log (`The celsius is ${celsius}°C is ${(celsius*9/5)+32}°F`);
console.log (`The fahrenheit is ${fahrenheit}°C is ${(fahrenheit - 32) * 5/9)}°F`);

//JavaScript Function Scope & Practice
// EXERCISE 1
// Write a function named squareNumber that will take one argument (a number), 
//square that number, and return the result. It should also log a string like 
//"The result of squaring the number 3 is 9."

function sqNum(num) {
    ​
    
      console.log(`The square root of ${num} is: ${num * 2}`)
    ​
           return num ** 2
    ​
    } 
    
    let numToSq = 4
    sqNum(numToSq)
        
    sqNum(2)
    ​
    let storeTheResult = sqNum(3)
   
    console.log(`When we send in ${numToSq}, we get ${sqNum(numToSq)}`)

// EXERCISE 2
// Write a function named halfNumber that will take one argument (a number), 
//divide it by 2, and return the result. It should also log a string like 
//"Half of 5 is 2.5.".



function halfNumber(num) {
  
  let halfNumber = num/2; 
console.log(`Half of ${halfNumber} + ${num} is ${halfNumber}`);

return halfNumber; 

}

halfNumber (5);

// EXERCISE 3
// Write a function named percentOf that will take two numbers, 
//figure out what percent the first number represents of the second number, 
//and return the result. It should also log a string like "2 is 50% of 4."

function percentOf(num1, num2) {
  
   let percent = num1/num2 * 100 ;
  console.log(num1 + 'is' + percent + '% of' + num2);
  return percent;
}

percentOf (10, 20); 

// EXERCISE 4
// Write a function named areaOfCircle that will take one argument (the radius), 
//calculate the area based on that, and return the result. 
//It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.


function areaOfCircle(radius) {
  let area =  MathPI * squareNumber (radius); 
  console.log(`The area of circle ${areaOfCircle} with radius + radius + 'is' + area`);
    return area; 
  
}
areaOfCircle (2);

// EXERCISE 5
// Write a function named runAll that will take one argument (a number) 
//and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area (#3) is of the squared result (#2)

function runAll(num) {

  let halfNumber = halfOf (num);
  let square = numToSq (halfNumber);
  let area = areaOfCircle  (squared);
  let result = percentOf (area, squared);

  return half = (`The number ${num} halved of ${halfNumber}. The result of ${halfNumber} is squared by ${numToSq}.
  The area ${area} is squared of the area of circle ${areaOfCircle}. The result of the  % ${percentOf} is defined in its area and is squared. `)
}