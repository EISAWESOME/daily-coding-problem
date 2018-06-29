// Time : 10:47

const kdistinct = (string, k) => {
  const allSubString = [];

  for(let i=0; i < string.length; i++) {
    let currentSubString = "";
    let distinctCounter = 0;
    for(let j=i; j < string.length; j++) {     
      if(!currentSubString.includes(string.charAt(j))) {
        distinctCounter++;
        if(distinctCounter > k) {
          break;
        }
      }
      currentSubString += string.charAt(j);  
    }
    allSubString.push(currentSubString);
  }
  return allSubString.reduce(function(a, b) { 
    return a.length > b.length ? a : b
  }, '');
}

const s = "abcba";
const k = 2;
console.log(kdistinct(s, k))
