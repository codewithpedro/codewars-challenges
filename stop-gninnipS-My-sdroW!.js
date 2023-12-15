function spinWords(string){
    //TODO Have fun :)
    
    const wordsArray = string.split(" ");
    let result = "";
    
    for (const word of wordsArray){
      result += " "
      result += (word.length < 5) ? word : word.split("").reverse().join("")
    }
    
    return result.substring(1);
}



//Other solutions

function spinWords(words){
    return words.split(' ').map(function (word) {
        return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}


function spinWords(string){
    return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}