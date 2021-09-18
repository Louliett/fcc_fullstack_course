"use strict";

//The problem with this algorithm is that for a bigger interval of numbers,
//It will require a bigger range of prime numbers provided beforehand.

function smallestCommons(arr) {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23];
    let originalArr = makeArray(arr[0], arr[1]);
    let found;
    let commonDivisors = [];
  
    for (let i = 0; i < primes.length; i++) {
      found = originalArr.find(element => element % primes[i] === 0);
  
      while (found !== undefined) {
        commonDivisors.push(primes[i]);
        originalArr = divideArrayElementsByNumber(originalArr, primes[i]);
        found = originalArr.find(element => element % primes[i] === 0);
        if(found === undefined) {
          break;
        }
      }
  
      if(originalArr.every(isEveryOne)) {
        break;
      }
    }
  
    return commonDivisors.reduce((acc, curr) => {
      return acc * curr;
    });
  }
  
  const isEveryOne = (currentValue) => currentValue === 1;
  
  function divideArrayElementsByNumber(arr, number) {
    let newArr = arr.map(item => {
      return (item % number === 0) ? item / number : item;
    });
    return newArr;
  }
  
  
  function makeArray(a, b) {
    let start = 0;
    let end = 0;
    (a < b) ? (start = a) && (end = b) : (start = b) && (end = a);
    let arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  }
  
  console.log(smallestCommons([23, 18]));