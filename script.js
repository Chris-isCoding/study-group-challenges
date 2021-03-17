/*
Write a function that takes in one number parameter, and returns the absolute value of said parameter.
*/

const absVal = num => Math.abs(num);

console.log(absVal(-1)); //1
console.log(absVal(-5)); //5

///////////////////////////////////////////////////////////////////////////////

/*
Create a function lastLetter that takes a word (string) and returns the last character/letter of that string.
*/

const lastLetter = str => str[str.length -1];

console.log(lastLetter("mika")); //a
console.log(lastLetter("peter")); //r

///////////////////////////////////////////////////////////////////////////////

/*
We are going to complete a function that takes in two number parameters (num1, num2), and returns whether num1 is less than or equal to num2. 
*/

const compareNums = (num1, num2) => num1 <= num2 ? true : false;

console.log(compareNums(5, 2)); //false
console.log(compareNums(2, 8)); //true
console.log(compareNums(5, 5)); //true

///////////////////////////////////////////////////////////////////////////////

/* Create a function isNegative that accepts a number argument. isNegative will return true if the number is negative and false if the number is positive.
*/

const isNegative = num => num < 0 ? true : false;

console.log(isNegative(-1)); //true
console.log(isNegative(10)); //false

///////////////////////////////////////////////////////////////////////////////
/* 
Create a function addNum which accepts a value and a number, and returns the value plus the number.
*/

const addNum = (x, y) => x + y;

console.log(addNum(10, 20)); //30

//////////////////////////////////////////////////////////////////////////////

/*
Write a function "Stringify" that takes in one parameter, and returns a string version of that parameter. 
*/

const stringify = input => input.toString();

console.log(stringify(3)); //'3'
console.log(stringify(true)); //'true'

///////////////////////////////////////////////////////////////////////////////

/*
Write a function that will iterate through an array and multiply a number by 10 if it is greater than or equal to 5.
*/

const multiplyBy10 = arr => {
  for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= 5) {
      arr[i] *= 10;
    }
  }
  return arr;
};
console.log(multiplyBy10([5, 3, 2, 10])); // [50, 3, 2, 100]

///////////////////////////////////////////////////////////////////////////////

/*
Create a function getRemainder that takes two numbers and returns the remainder (value left over from division) of dividing the larger number by the smaller one.
*/

const getRemainder = (num1, num2) => {
  //check if num 1 > num2
  if(num1 > num2) {
    //return num1 % num2
    return num1 % num2;
    //check if num1 < num2
  } else if (num1 < num2) {
    //return num2 % num1
    return num2 % num1;
  }  
};
console.log(getRemainder(6, 4)); //2
console.log(getRemainder(2, 9)); // 1

//////////////////////////////////////////////////////////////////////////////

/*
Write a function that returns true if the argument is an Array, and false if it is not.
*/

const isItAnArray = arr => Array.isArray(arr);

console.log(isItAnArray([1, 2, 3])); //true
console.log(isItAnArray("hello")); //false

//////////////////////////////////////////////////////////////////////////////

/*
We are going to write a function that returns the type of argument the function has been called with.
*/

const whatsTheType = input => typeof input;

console.log(whatsTheType(7)); // "number"
console.log(whatsTheType("mika")); //"string"
console.log(whatsTheType(true)); // "boolean"


///////////////////////////////////////////////////////////////////////////////

/*
Create a function that takes two strings as arguments and returns the number of times the first string (a single character) is found in the second string.
*/

const matchStr = (str1, str2) => {
 	let count = 0;
  for (let letter of str2) {
    if (letter === str1) {
      count++;
  	}
  }
  return count;
};

console.log(matchStr('p', 'apple')); // 2
console.log(matchStr('s', 'assiffsss')); // 5

///////////////////////////////////////////////////////////////////////////////

/*
Write a JavaScript function that returns array elements larger than a given number.
*/

const largeNums = (arr, num) => arr.filter(el => el > num);

console.log(largeNums([10, 6, 2, 200, -1, 18], 8)); //[10, 200, 18]

//////////////////////////////////////////////////////////////////////////////

/*Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

Examples:
getAbsSum([2, -1, 4, 8, 10]) ➞ 25

getAbsSum([-3, -4, -10, -2, -3]) ➞ 22

getAbsSum([2, 4, 6, 8, 10]) ➞ 30

getAbsSum([-1]) ➞ 1
*/

const getAbsSum = arr => {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += Math.abs(arr[i]);
  }	
	return sum;
};


const getAbsSum = arr => {
  return arr.reduce((accum, currVal) => Math.abs(accum) + Math.abs(currVal),0);
};

const getAbsSum = arr => {
  let sum = 0;
  arr.forEach(num => sum += Math.abs(num));
  return sum;
};

console.log(getAbsSum([2, -1, 4, 8, 10])); //➞ 2
console.log(getAbsSum([-3, -4, -10, -2, -3])); //➞ 2
console.log(getAbsSum([2, 4, 6, 8, 10])); //➞ 3
console.log(getAbsSum([-1])); //➞ 1

/////////////////////////////////////////////////////////////////////////////

/*
Write a function addN which accepts an array and a number. The function adds the argument n to each number in the array arr and returns a new arr.
*/

const addN = (arr, num) => arr.map(el => el + n);

console.log(addN([1, 2, 3], 2)); // [3, 4, 5]

///////////////////////////////////////////////////////////////////////////////

/* 
Write a function that takes in a string, and reverses the string
// Examples
  // "Abraham Lincoln" ➞ "Lincoln Abraham"
  // "Hank Aaron" ➞ "Aaron Hank"
*/

const reversedStr = str => str.split(' ').reverse().join(' ');

console.log(reversedStr("Abraham Lincoln")); //"Lincoln Abraham"
console.log(reversedStr("Hank Aaron")); // "Aaron Hank"
///////////////////////////////////////////////////////////////////////////////

/*
Write a function that takes two arguments, a string and a number.
  The function should return a single string that contains the original string,
  repeated the number of times specified by the second argument,
  or an empty string if the number is negative. *** Use a while loop ***
 
Examples
  'car', 4 -> 'carcarcarcar'
  'bar', 3 -> 'barbarbar'
*/

const repeatString = (str, num) => {
  let finalStr = '';
  if (num <= 0) {
    return finalStr;
  }
  while (num > 0) {
    finalStr += str;
    num--;
  }
  return finalStr;
};
//recursive
function repeatString (str, num, result = '') {
  if(num === 0) return result;
  return repeatString(str, num - 1, result += str)
};
console.log(repeatString('car', 4));
console.log(repeatString('bar', 3));

///////////////////////////////////////////////////////////////////////////////

/* Write a function that takes a string of words and return the length of the longest word(s)
 
Examples
  'Hi, where is the airport?' -> 7
  'Thanks for stopping by!' -> 8
*/

const longestWordLength = (str) => {
  //use replace and regex to remove all non-word characters
  const stringWithoutSpecChar = str.replace(/\W/g, ' ');
  //declare a var longestWord and set it equal to 0
  let longestWord = 0;
  //declare a var wordArray and use split method
  const wordArray = stringWithoutSpecChar.split(' ');
  //iterate through wordArray
  for (let i = 0; i < wordArray.length; i++) {
  //check if the length of current item in the array is > than longestWord
    if (wordArray[i].length > longestWord) {
  //set longestWord to the length of current item being looped over in the arr
      longestWord = wordArray[i].length;
    }
  }
  //return longestWord
  return longestWord;
};
 
console.log(longestWordLength('Hi, where is the airport?')); // 7
console.log(longestWordLength('Thanks for stopping by!')); // 8

///////////////////////////////////////////////////////////////////////////////
/*
Write a function that takes a string and returns a string with its letters in alphabetical order.
 
Examples
  "hello" ➞ "olleh"
  "goobye" ➞ "eyboog"
  "now" ➞ "won"
  "javascript" ➞ "aacijprstv"
*/
 const alphaOrder = str => {
 
  //split the string into an array
  const strToArr = str.split('');
  //sort the letters in the array
  const revArr = strToArr.sort();
  //join the array back into a string
  const sortedStr = revArr.join('');
  //return the alphabetized array
  return sortedStr;
  //chained
    //return str.split('').sort().join('');
  };
 
  console.log(alphaOrder("hello")); // "olleh"
  console.log(alphaOrder("goodbye")); //"eyboog"

///////////////////////////////////////////////////////////////////////////////
/*
Write a function that takes in an array of integers. Determine whether the sum of its element in the array is even or odd.

The output should be a string ("odd" or "even").

If the input array is empty, consider it as an array with a zero ([0]).

Examples
evenOrOdd([0]) ➞ "even"
evenOrOdd([1]) ➞ "odd"
evenOrOdd([]) ➞ "even"
evenOrOdd([0, 1, 5]) ➞ "even"
*/

const evenOrOdd = arr => {
	//check if the array is empty
	if(arr.length === 0) {
		return "even";
	}
  //use reduce to get sum of the array
	const total = arr.reduce((accum, currVal) => {
		return accum + currVal;
	});
  //check if total is even or odd with modulo
	if(total % 2 === 0) {
		return "even";
	} else if (total % 2 !== 0) {
		return "odd";
	}
};

//one liner
const evenOrOdd = arr =>
	arr.reduce((acc, cur) => acc + cur, 0) % 2 !== 0 ? 'odd' : 'even';

console.log(evenOrOdd([0])); // ➞ "even"
console.log(evenOrOdd([1])); // ➞ "odd"
console.log(evenOrOdd([])); // ➞ "even"
console.log(evenOrOdd([0, 1, 5])); // ➞ "even"

////////////////////////////  HOF      ////////////////////////////////// 

/*
Create a function that takes an array and returns the types of values (data types) in a new array.

Examples
console.log(arrayValuesTypes([1, 2, "null", []])); //➞ ["number", "number", "string", "object"]

arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
➞ ["number", "string", "string", "object", "object", "boolean", "number"]

*/

const arrayValuesTypes = arr => arr.map(el => typeof el);
console.log(arrayValuesTypes([1, 2, "null", []])); //➞ ["number", "number", "string", "object"]
console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null])); //➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]
console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]));
//➞ ["number", "string", "string", "object", "object", "boolean", "number"]

///////////////////////////// HOF ////////////////////////////////////////////

/*
Write a function that reverses all the words in a sentence that start with a particular letter.

Examples
specialReverse("word searches are super fun", "s")
➞ "word sehcraes are repus fun"

specialReverse("first man to walk on the moon", "m")
➞ "first nam to walk on the noom"

specialReverse("peter piper picked pickled peppers", "p")
➞ "retep repip dekcip delkcip sreppep"
*/

const specialReverse = (str, letter) => {
  //split string into an array
  const strToArr = str.split(' ');
  //use map method to iterate over array
  const searchArr = strToArr.map(word => {
    //check if current word starts with letter
    if(word.startsWith(letter)){
      //split word into array of individual letter and reverse the order, join together
      return word.split('').reverse().join('');
    } else {
      //if false, return word
      return word;
    }
  });
  //return arr thats converted back to a string
  return searchArr.join(' ');
};
console.log(specialReverse("word searches are super fun", "s")); //➞ "word sehcraes are repus fun"
console.log(specialReverse("first man to walk on the moon", "m")); //➞ "first nam to walk on the noom"
console.log(specialReverse("peter piper picked pickled peppers", "p")); //➞ "retep repip dekcip delkcip sreppep"

//////////////////////////////////////////////////////////////////////////////

/*
Write a function that takes in an array and returns a new array with duplicates removed
Ex: deleteDups(['a','a','a']) -> ['a']
*/

const deleteDups = array => {
  return array.reduce((uniqueArr, item) => {
    uniqueArr.includes(item) ? uniqueArr : uniqueArr.push(item);
    return uniqueArr;
  }, []);
};


//using filter
const deleteDups = array => {
  //using filter method to chdeck if the index of current ele is equal to the current index
  	//The indexOf method returns the first index it finds of the provided element from our array.
  return array.filter((el, index) => array.indexOf(el) === index);
};

//using new Set and spread syntax into an array
console.log([...new Set(['a', 'a', 'a'])]);
console.log([...new Set([1, 2, 2, 3, 6, 6, 'hello', 'world', 'world'])]);

/////////////////////////////////////////////////////////////////////////////

/*
Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
filterArray([1, 2, "a", "b"]) ➞ [1, 2]
filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
*/

const filterArray = array => {
  return array.filter(el => {
   return typeof el !== "string"
  });
};
console.log(filterArray([1, 2, "a", "b"])); //➞ [1, 2]
console.log(filterArray([1, "a", "b", 0, 15])); //➞ [1, 0, 15]
console.log(filterArray([1, 2, "aasf", "1", "123", 123])); //➞ [1, 2, 123]
/*
