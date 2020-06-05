// - Alogrithms -
/* Big O Notation Section */

function addUpTo(n) {
	let total = 0;
	for( i = 1; i <= n; i++ ) {
		total += i;
	}
	return total;
}

console.log(addUpTo(5));

// the same function in other approach
function addUpTo(n) {
	return n * (n + 1) / 2;
}

console.log(addUpTo(5));

let t1 = performance.now();
addUpTo(100000000);
let t2 = performance.now();
console.log(`Time elabsed: ${(t2 - t1) / 1000} seconds`);

// which one is better? the second function is faster!

// The BIG O of objects - when you don't need any ordering, objects are an excellent choice
let instructor = {
	firstName: 'Kali',
	isInstructor: true,
	favoriteNumbers: [1, 2, 3]
}

console.log(instructor.hasOwnProperty('firstName')); // true

// when are arrays slow? when youn add elements at the beginning of the array

// The BIG O of arrays - when you need any ordering, arrays are an excellent choice
let names = ["Jhon", "Michael", "Yudi"];

// frequency counter pattern -
function same(arr1, arr2) {
	if( arr1.length !== arr2.length ) return false;

	for( let i = 0; i < arr1.length; i++ ) {
		let correctIndex = arr2.indexOf(arr1[i] ** 2);
		if( correctIndex === -1 ) return false;
		arr2.splice(correctIndex, 1);
	}
	return true;
}

console.log(same([1, 2, 3], [9, 1, 4])); // true
console.log(same([1, 2, 3], [9, 1])); // false
console.log(same([1, 2, 3], [4, 1, 4])); // false

// frequency counter ANAGRAM challenge -
function validAnagram(str1, str2) {
	if( str1.length !== str2.length ) return false;

	const lookUp = {};

	for( let i = 0; i < str1.length; i++ ) {
		let letter = str1[i];
		// if letter exists, increment, otherwise set to 1
		lookUp[letter] ? lookUp[letter] += 1 : lookUp[letter] = 1;
	}

	for( let i = 0; i < str2.length; i++ ) {
		let letter = str2[i];
		// can't find letter or letter is zero then it's not an anagram
		if( !lookUp[letter] ) {
			return false;
		} else {
			lookUp[letter] -= 1;
		}
	}

	return true;
}

console.log(validAnagram('iceman', 'cenima')); // true


/* Recursion Section */
function countDown(num) {
    if ( num <= 0 ) {
        console.log('All Done!');
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

console.log(countDown(5)); // 5 4 3 2 1, num = 0 ? 'All Done!' printed

// add numbers
function sumRange(num1) {
    if ( num1 === 1 ) return 1;
    return num1 + sumRange( num1 - 1 );
}

console.log(sumRange(4)); // 4 + 3 + 2 + 1 = 10

// factorial
function factorial(num2) {
    if ( num2 === 1 ) return 1;
    return num2 * factorial( num2 - 1 );
}

console.log(factorial(4)); // 4 * 3 * 2 * 1 = 24

// collect odds from an array
function collectOddValues(arr) {
    let result = [];
    function helper(helperInput) {
        if ( helperInput.length === 0 ) return;
        if ( helperInput[0] % 2 !== 0 ) result.push(helperInput[0]);
        helper(helperInput.slice(1));
    }
    helper(arr);

    return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6])); // 1, 3, 5

// power
function power(base, exponent) {
    if ( exponent === 0 ) return 1;
    return base * power(base, exponent - 1 );
}

console.log(power(2, 5)); // 2^5 = 32

// product of array
function productOfArray(arr) {
    if( arr.length === 0 ) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 4]));

// FIBONACCI 
function fib(n) {
    if ( n <= 2 ) return 1;
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(10));

// reverse a string
function reverseStr(str) {
    if ( str.length <= 1 ) return str;
    return reverseStr(str.slice(1)) + str[0];
}

console.log(reverseStr('Jhon'));

// palindrome str
function isPalindrome(str) {
    if ( str.length === 1 ) return true;
    if ( str.length === 2 ) return str[0] === str[1];
    if ( str[0] === str.slice(-1) ) return isPalindrome(str.slice(1, -1));
    return false;
}

console.log(isPalindrome('MaM'));


/* Searching Algorithms Section */
// Linear search
function linearSearch(arr, val) {
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] === val ) return `${val} is FOUND at index ${i}`;
    }

    return `${val} is NOT FOUND in ${arr}`;
}

console.log(linearSearch([1, 2, 3, 4, 5], 3));

// Binary Search
//- Binary Seacrh is much faster form of searching
//- Rather than eliminate one element at a time, you can eliminate half of the remaining elements at a time
//- Binary search only works on sorted arrays!

// Original Solution
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 30)); // found at index 7

// Naive Search
function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}

console.log(naiveSearch("lorie loled", "lol"));


/* Bubble Sort Section */

function sortNumbers(n1, n2) {
    return n1 - n2;
}

// built in JS sorting methods...
console.log([2, 55, 22, 43, 10, 5, 9].sort(sortNumbers));

// Bubble sort - Before we sort, we must swap

// ES5
function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// ES6
function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// from smallest to biggest
function bubbleSort(arr) {
    for (var i = arr.length; i > 0; i--) {
        for (var j = 0; j < i - 1; j++) {
            //  j + 1 is the next element after j in the array
            if (arr[j] > arr[j + 1]) {
                // SWAP!
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// ES6 version!
function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    for (var i = arr.length; i > 0; i--) {
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

// Optimized BubbleSort with noSwaps
function bubbleSortOptimized(arr) {
    var noSwaps;
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    for (var i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([7, 1, 63, 33, -21, 12, 9]));
console.log(bubbleSortOptimized([8, 1, 2, 3, 4, 5, 6, 7]));


/* Selection Sort Section */
function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        // assume that the 1st element in the array is the smallest one
        var smallest = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = temp;
    }
    return arr;
}

console.log(selectionSort([12, 5, 33, -10, 41, 12]));

/* Insertion Sort Section */
function insertionSort(arr) {
    // i = 1 to iterate from the 2nd element
    for (var i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([4, -1, -5, 12, 44, 25, 6]));

/* Merge Sort Section */
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    let midPoint = Math.floor(arr.length / 2);
    let leftSide = mergeSort(arr.slice(0, midPoint)); // slice the first half of the array
    let rightSide = mergeSort(arr.slice(midPoint));

    return merge(leftSide, rightSide);
}

console.log(mergeSort([50, 51, 3, 99, 5, 10]));


/* Quick Sort Section */
function pivot(arr, start = 0, end = arr.length - 1) {
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    let pivot = arr[start];
    let swapIndex = start;

    // loop from the 2nd element in the array => i = start + 1, the pivot took the 1st element
    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }

    swap(arr, start, swapIndex);

    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);

        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

console.log(quickSort([4, 6, 2, 1, 8, 66, 24]));

/* Radix Sort Section */

// In order to implement radix sort, it's helpful to build a few helper functions first:
// getDigit(num, place) - returns the digit in num at the given place
// digitCount(num) - returns the number of digits in num
// mostDigits(nums) - given an array of numbers, returns the number of digits in the largest numbers in the list
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;

    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;

    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }

    return maxDigits;
}

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);

    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);

        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        
        nums = [].concat(...digitBuckets);
    }

    return nums;
}

console.log(radixSort([12, 4, 532, 76582, 4733]));
