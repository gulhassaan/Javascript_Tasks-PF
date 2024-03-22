/**Task 56 */
function FormatCommas(dividend, divisor) {
  const result = numberCommas((dividend / divisor).toFixed(2));
  return result;
}

function numberCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
console.log("Task 56");
console.log(FormatCommas(1234, 100));

/**Task 57 */
console.log("Task 57");
function createCopies(strvalue, copies) {
  if (copies <= 0) {
    return "Invalid number of copies.";
  }

  return strvalue.repeat(copies);
}
console.log(createCopies("Hassaan", 2));

/**Task 58 */
console.log("Task 58");
function createUpdatedString(originalString) {
  if (originalString.length < 3) {
    return "Original string length must be 3 and above.";
  }
  const lastThreeCharacters = originalString.slice(-3);
  const updatedString = lastThreeCharacters.repeat(4);

  return updatedString;
}
console.log(createUpdatedString("hassaan"));

/**Task 59 */
function half(strvalue) {
  if (strvalue.length % 2 == 0) {
    return strvalue.slice(0, strvalue.length / 2);
  }
  return strvalue;
}
console.log(half("Javascript"));

/**Task 60 */

function firstLast(strvalue) {
  return strvalue.substring(1, strvalue.length - 1);
}
console.log("Task 60");
console.log(firstLast("hassaan"));

/**Task 66 */
function cityName(strvalue) {
  if (strvalue.startsWith("Los")) {
    return "Los Angeles";
  } else if (str.startsWith("New")) {
    return "New York";
  } else {
    return "";
  }
}
console.log("Task 66");
console.log(cityName("Los Angeles"));

/**Task 70 */
function rotateLeft(arr) {
  if (arr.length !== 3) {
    console.log("Array length must be 3");
    return;
  }

  let firstElement = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = firstElement;

  return arr;
}
console.log("Task 70");
let array = [1, 2, 3];
console.log("Original array:", array);
console.log("Array after rotating left:", rotateLeft(array));

/**Task 71 */
function findfirstlast(arr) {
  var last = arr.length - 1;

  return arr[0] == 1 || arr[last] == 1;
}
console.log("Task 71");
console.log(findfirstlast([1, 3, 4, 5, 4]));

/**Task 72 */
function checkfirstlast(arr) {
  var first = arr[0];
  var last = arr[arr.length - 1];

  if (first == last) {
    console.log("First and Last element of array is equal");
  } else {
    console.log("First and Last element of array is not equal");
  }
}
console.log("Task 72");
checkfirstlast([1, 2, 1]);

/**Task 73 */
console.log("Task 73");
function reverseArray(arr) {
  if (arr.length !== 3) {
    return "Array length must be 3";
  }

  return [arr[2], arr[1], arr[0]];
}
console.log(reverseArray([1, 2, 3]));

/**Task 74 */
console.log("Task 74");
function setMaxToAll(arr) {
  let maximum = Math.max(arr[0], arr[arr.length - 1]);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = maximum;
  }

  console.log("Updated array:", arr);
}
setMaxToAll([1, 2, 3, 4, 5]);

/**Task 75 */
console.log("Task 75");
function middle(arr1, arr2) {
  arr1_mid = arr1[1];
  arr2_mid = arr2[1];
  var arr3 = [];
  arr3.push(arr1_mid, arr2_mid);
  console.log("New array is : ", arr3);
}
middle([1, 2, 3], [3, 2, 1]);

/**Task 76 */
console.log("Task 76");
function firstlastnew(arr) {
  var first = arr[0];
  var last = arr[arr.length - 1];
  var newarr = [];
  newarr.push(first, last);
  console.log("New array is : ", newarr);
}
firstlastnew([1, 2, 3]);

/**Task 77 */
console.log("Task 77");
function containarray(arr) {
  if (arr.length !== 2) {
    return "Array length must be 2";
  }
  return arr.includes(1) || arr.includes(3);
}
console.log(containarray([1, 2]));

/**Task 78 */
console.log("Task 78");
function notcontainarray(arr) {
  if (arr.length !== 2) {
    return "Array length must be 2";
  }
  return !(arr.includes(1) || arr.includes(3));
}
console.log(notcontainarray([1, 2]));

/**Task 83 */
console.log("Task 83");
function findLong(strings) {
  var maxstr = "";
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > maxstr.length) {
      maxstr = strings[i];
    }
  }
  return maxstr;
}
console.log(
  "Longest string is :",
  findLong(["Programmers", "Force", "Hassaan"])
);

/**Error Handling  */
/**Task 1 */

console.log("ERROR HANDLING");
console.log("TASK 01");
function number(num) {
  if (!Number.isInteger(num)) {
    throw err("Invalid Input");
  }
  console.log("valid number");
}

try {
  number(12);
} catch (e) {
  console.log("error : ", e.message);
}

/**Task 2 */
console.log("TASK 02");
try {
    let Obj;
    console.log(Obj.property); // Accessing property of undefined object
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Caught TypeError: The property is undefined.");
    } else {
        console.log("Caught an error:", error.message);
    }
}


/**Task 3 */
console.log("TASK 03");
function divideNum(num1, num2) {
    if (num2 === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return num1 / num2;
}
try {
    console.log("Division of two numbers is :", divideNum(10, 2));
} catch (error) {
    console.log("Error:", error.message);
}


/**TAsk 4 */
console.log("TASK 04")
function positiveNum(number)
{
    if(number < 0)
    {
        throw  Error("Number is negative")
    }
    return number;
}

try {
    console.log(positiveNum(-2))
} catch (error) {
    console.log("Error : " , error.message)    
}

/**Task 5 */
console.log("TASK 05")
function emptyarray(arr)
{ 
    if(arr.length == 0)
    {
        throw Error("Array is empty")
    }
    return arr
}

try {
    console.log(emptyarray([]))
} catch (error) {
    console.log("Error : " , error.message)
}

/**Task 6 */
console.log("TASK 06")
function emptystr(str)
{ 
    if(str.length == 0)
    {
        throw Error("String is empty")
    }
    return str
}

try {
    console.log(emptystr(""))
} catch (error) {
    console.log("Error : " , error.message)
}


/**Task 07 */
console.log("Task 07")
try {
    let arr = [1, 2, 3, 4, 5];
    console.log("Element at index", 10, "is : ", arr[7]);
} catch (error) {
    if (error instanceof RangeError) {
        console.error("Error: Invalid index");
    } else {
        console.error("An unexpected error occurred:", error);
    }
}


/**Task 09 */
console.log("Task 09")
function handleerror(url) {
    try {
        return decodeURI(url)
    } catch (error) {
        if (error instanceof URIError) {
            console.error('URIError:', error.message);
        } else {
            console.error('Error:', error.message);
        }
    }
}

console.log(handleerror('https://hassaangul.carrd.co/'));


/**Task 10 */
console.log("TASK 10");
function divideNum(num1, num2) {
    if (num2 === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return num1 / num2;
}
try {
    console.log("Division of two numbers is :", divideNum(10, 2));
} catch (error) {
    console.log("Error:", error.message);
}
finally{
    console.log("Finally Program Succeeded")
}

/**Task 11 */
console.log("TASK 11");
try {
    eval('alert("Hello, world!")');
} catch (error) {
    if (error instanceof EvalError) {
        console.log('Caught an EvalError:', error.message);
    } else {
        throw error;
    }
}


/**Task 12 */
console.log("TASK 12");
let b;
try {
    console.log("Caught Undefined error : " , b);
} catch (error) {
    console.error('Caught an error:', error.message);
}

