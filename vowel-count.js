// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// My Solution
function getCount(str) {
    const obj = {a: 0, e: 0, i:0, o:0, u: 0}
    let i = 0;
    for (const letter of str) {
      if (obj.hasOwnProperty(letter)) i++
    }
    
    return i;
}

// Other solutions

function getCountOne(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

function getCountTwo(str) {
    return str.replace(/[^aeiou]/gi, '').length;
}