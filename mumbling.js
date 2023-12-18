//Mumbling

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
	// your code
  let result = '';
  
  for (let i=0; i<s.length; i++){
    for (let j=0; j<i+1; j++) {
      if (j === 0) {
        result += s[i].toUpperCase();
     } else {
       result += s[i].toLowerCase();
     }
    }
    
    if (i !== s.length-1) result += "-";
  }
  
  return result;
}

// Other solutions

function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}