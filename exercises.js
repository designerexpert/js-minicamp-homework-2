// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if (x>y) {
	return x;
  }
  return y;
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  switch(language) {
	case 'German':
		return 'Guten Tag!';
	case 'English':
		return 'Hello!';
	case 'Spanish':
		return 'Hola!';
	default:
		return 'Hello!';
  }
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  return (num === 10 || num === 5);
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  return (num < 50 && num > 20);
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  return (Math.floor(num) === num);
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
	if ((num % 3 === 0) && (num % 5 === 0)) {
		return 'fizzbuzz';
	}
	else if (num % 3 === 0) {
		return 'fizz';
	}
	else if (num % 5 === 0) {
		return 'buzz';
	} 
	return num;
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
	for (var x = 2; x < num; x++){
		if (num % x === 0) {
			return false; //return false if its divisible by x but not equal to x
		}
	}
	return num > 1;
}

function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
   return arr[arr.length - 1];
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
	for (var x = 0; x <= arr.length-1; x++) {
		arr[x] = arr[x] + 1;
	}
	return arr;
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  var myMessage = ''; //initialize a variable to be used for return message
	if (words.length === 1) { //if the array only has 1 string in it, there is no reason to add spaces, just return that string
		myMessage = (words[0]);
		return myMessage;
	} else { //if the array has more than 1 string in it, then add a blank space after the first item
		myMessage = (words[0] + ' ');
	}
	for (var x = 1; x < words.length; x++) { //loop from the first string of the array until the last one.
		if (x === words.length - 1) { //When loop reaches the last string in the array, do not add extra space to it and return the result.
			myMessage = (myMessage + words[x]);
			return myMessage;
		}
		myMessage = (myMessage + words[x] + ' ');
	}
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
	for (var x = 0; x < arr.length; x++) {
		if (arr[x] === item) {
			return true;
		}
	}
	return false;
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
	var returnedSum = 0;
	for (var x = 0; x < numbers.length; x++) {
		returnedSum = (returnedSum + numbers[x]);
	}
	return returnedSum;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
	var testsSum = 0;
	for (var x = 0; x < testScores.length; x++) {
		testsSum = (testsSum + testScores[x]);
	}
	return (testsSum / testScores.length);
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
	var largest = 0;
	for (var x = 0; x < numbers.length; x++) {
		if (numbers[x] > largest) {
			largest = numbers[x];
		}
	}
	return largest;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
