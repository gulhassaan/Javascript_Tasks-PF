/**Task 1 */
var currentdate = new Date(); 
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayName = days[currentdate.getDay()];
var hours = currentdate.getHours();
var meridian = (hours >= 12) ? "PM" : "AM";
hours = (hours % 12 == 0) ? 12 : hours % 12;
var minutes = currentdate.getMinutes();
var seconds = currentdate.getSeconds();
var datetime = "Today is: " + dayName + ".<br>Current time is: " + hours + " " + meridian + " : " + minutes + " : " + seconds;

// Display the date and time in the HTML element
document.getElementById("datetime").innerHTML = datetime;


/**Task 4 */
var length_tri = 5; 
var width_tri = 6; 
var height_tri = 7; 

// Calculate the semi-perimeter of the triangle
var s = (length_tri + width_tri + height_tri) / 2;

var area = Math.sqrt(s * ((s - length_tri) * (s - width_tri) * (s - height_tri)));
var measurement = "Length : " + length_tri + "<br> Width : " + width_tri + "<br> Height :" + height_tri + "<br>";
var areaoftriangle = "Sides of triangle are : " + measurement + "<br>Area of Triangle is : <br>" + area;

document.getElementById("trianglearea").innerHTML = areaoftriangle;


/**Task 5 */
function rotateStringRight(string) {
    let rotatedString = string;

    setInterval(() => {
        // that remove last character
        const lastChar = rotatedString.charAt(rotatedString.length - 1);
        rotatedString = lastChar + rotatedString.slice(0, -1);
        document.getElementById('rotatedString').innerText = rotatedString; 
    }, 500); //  half second
}

const originalString = 'ProgrammersForce ';
rotateStringRight(originalString);


/**Task 6 */
document.getElementById("checkButton").addEventListener("click", checkLeapYear);
function checkLeapYear() {
    const year = document.getElementById("Input").value;
    const isLeapYear = (year % 4 === 0 );

    if (isLeapYear) {
        document.getElementById("result").innerText = year + " is a leap year.";
    } else {
        document.getElementById("result").innerText = year + " is not a leap year.";
    }
}


/**Task 7 */
// Function to check if 1st January is a Sunday between 2014 and 2050
function isFirstJanuarySunday() {
    let checkofsunday = '';
    for (let year = 2014; year <= 2050; year++) {
      const date = new Date(year, 0, 1); // 0 for January, 1 for the 1st day     
      if (date.getDay() === 0) {
        checkofsunday = checkofsunday + `<br>1st January ${year} is a Sunday.`;
      }
    }
    return checkofsunday;
  }
  

  document.getElementById("checksunday").innerHTML = isFirstJanuarySunday();


  /**Task 8*/
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Function to check the user's guess
function checkGuess() {
  const guess = parseInt(document.getElementById('guessInput').value);
  const result = document.getElementById('guess');

  if (guess === randomNumber) {
    result.textContent = 'Good Work!, It is Matched';
  } else {
    result.textContent = 'Oops !, Not matched';
  }
}


/**Task 10 */
function multiply() {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  
  
    var multiplicationResult = num1 * num2;
    document.getElementById('task10').innerHTML = "Multiplication: " + multiplicationResult;

}

function divide() {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  
    var divisionResult = num1 / num2;
    document.getElementById('task10').innerHTML = "Division: " + divisionResult;
}

/**Task 11 */
function FahrenheitConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputFahrenheit").innerHTML=(valNum*1.8)+32;
}
function CelciusConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
}

/**Task 12 */

var geturl = window.location.href;
document.getElementById("GetURL").innerHTML=geturl;

/**Task 13 */

var name = "HassaanGul";
var value = 1;

this[name]=value;
document.getElementById("user-def-name").innerHTML= this.name;
console.log("Task 13")
console.log(this.name)


/**Task 14 */
var filename1 = "file.txt";
var filename2 = "file.js";
var filename3 = "file.php";
document.getElementById("file-extension").innerHTML=filename1.split('.').pop() +'<br>' 
                                                  + filename2.split('.').pop() + '<br>'
                                                  + filename3.split('.').pop();

/**Task 15 */
document.getElementById("task15_btn").addEventListener('click' , GetDifference);

function GetDifference(){
var get_difference = document.getElementById("get_difference").value;
 if(get_difference <= 13)
 {
  document.getElementById("task15").innerHTML= get_difference + " is less then 13";
 } 
 else{
    document.getElementById("task15").innerHTML=  (get_difference - 13)*2;
 }
}                                                  

/**task 16 */
function tripe(){
var number1 = parseInt(document.getElementById("number1").value);
var number2 = parseInt(document.getElementById("number2").value);

if(number1 === number2)
{
  document.getElementById("task16").innerHTML= "Both numbers are equal so their triple is : " + 3* (number1+number2);
}else{
  document.getElementById("task16").innerHTML="Both numbers are not equal";
}
}
document.getElementById("check_triple").addEventListener("click" , tripe)

/**Task 17 */
function calculateDifference() {
  var number = parseInt(document.getElementById("numberInput").value);
  // Calculate the absolute difference
  var absoluteDifference = Math.abs(number - 19);
  if (number > 19) {
    absoluteDifference *= 3;
    document.getElementById("task17").innerHTML = "The absolute difference is: " + absoluteDifference;
  }else{
  document.getElementById("task17").innerHTML="Not greater than 19";
  }
}

/**Task 18 */
function checkFor50(nu1,nu2) {

  var res = nu1+nu2;
  if (nu1 === 50 || nu2 === 50 || res === 50) {
    return true;
} else {
   return false;
}

}
console.log("Task 18")
console.log(checkFor50(20,30));


/**Task 19 */

function checknumber(number) {
  return ((Math.abs(100 - number) <= 20) || (Math.abs(400 - number) <= 20));
}
console.log("Task 19")
console.log(checknumber(200))


/**Task 21 */
function addPy(str) {
  if (str.startsWith("Py")) {
      return str; 
  } else {
      return "Py" + str; 
  }
}
console.log("Task 21")
console.log(addPy("Hello")); 
console.log(addPy("Python")); 

/**Task 22 */
function removeCharAt(str, position) {
  if (position < 0 || position >= str.length) {
      return "Invalid position";
  }
  
  return str.slice(0, position) + str.slice(position + 1);
}
console.log("Task 22")
console.log(removeCharAt("Hello World", 5)); 

/**Task 25 */
function isMultipleOf3Or7(number) {
  if (number <= 0) {
      return false;
  }
  if (number % 3 === 0 || number % 7 === 0) {
      return true;
  } else {
      return false;
  }
}
console.log("Task 25");
const numberToCheck = 21; 
if (isMultipleOf3Or7(numberToCheck)) {
  console.log(numberToCheck + " is a multiple of 3 or 7.");
} else {
  console.log(numberToCheck + " is not a multiple of 3 or 7.");
}

/**Task 30 */
function checkAndRemoveScript(strvalue) {
  if (strvalue.length >= 5 && strvalue.substring(4, 10) === "Script") {
      return strvalue.substring(0, 4);
  } else {
      return strvalue;
  }
}
console.log("Task 30")
console.log(checkAndRemoveScript("JavaScript"));

/**Task 37 */
function uppercase(strvalue) {
  if (strvalue.length < 3) {
      return strvalue.toUpperCase();
  } else {
    return strvalue;
  }
}
console.log("Task 37")
console.log(uppercase("he"));  


/**Task 47 */
console.log("Task 47")
function numberInRange(num) {
  return num >= 40 && num <= 10000;
}
const num_ran =40;
if (numberInRange(num_ran)) {
  console.log(num_ran + " exists in the range 40..10000.");
} else {
  console.log(num_ran + " does not exist in the range 40..10000.");
}


/**Task 48 (*/
console.log("Task 48")
function string_reverse(str) {
  return str.split("").reverse().join("");
}
console.log(string_reverse("ProgrammersForce"));


/**Task 50 */
function capitalizeFirstLetter(str) {
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}
console.log(capitalizeFirstLetter("hello world" )); 

/**Task 51 */
function convert_minutes(totalMinutes) {
  var hours = Math.floor(totalMinutes / 60);
  var minutes = totalMinutes % 60;

  return hours + " hours and " + minutes + " minutes";
}
console.log("Task 51")
console.log(convert_minutes(100)); 

/**Task 52 */
function alphabet(strvalue) {
  var chars = strvalue.split('');
  chars.sort();
  var result = chars.join('');

  return result;
}
console.log("Task 52");
console.log(alphabet("hello world"));


/**Task 53 */
function getalphabet(strvalue)
{
  return (/a...b/).test(strvalue) 
}
console.log("Task 53");
console.log(getalphabet("heroacccb"));

/**Task 54 */
function countVowels(strvalue) {
  return strvalue.replace(/[^aeiou]/g, "").length;
}
console.log("Number of vowels in the string:", countVowels("Hello world"));


/**Task 55 */
function find_PT(strvalue){
  const count_t = (strvalue.match(/t/g) || []).length;
  const count_p = (strvalue.match(/p/g) || []).length;

  return count_p===count_t
}

console.log(find_PT("appletype"))





