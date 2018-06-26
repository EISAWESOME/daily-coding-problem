const m1 = 111;
const m2 = 12345;
const m3 = 4;

// Less optimized, clearer version
const decode = (message) => {
  message = message.toString();
  
  const split1 = [];
  const split2 = [];
  //Split1, start at index 0
  for (var i = 0; i < message.length; i+=2) {
    // If we have enough letters left to make a par
    if(message.charAt(i+1)){
      split1.push(message.charAt(i) + message.charAt(i+1));
    } else {
      split1.push(message.charAt(i));
    }
  }

    //Split1, start at index 1
    split2.push(message.charAt(0));
    for (var i = 1; i < message.length; i+=2) {
      // If we have enough letters left to make a par
      if(message.charAt(i+1)){
        split2.push(message.charAt(i) + message.charAt(i+1))
      } else {
        split2.push(message.charAt(i))
      }
      
    }
    console.log(split1, split2)
    // base : one way to solve
    // Every time we encounter an index that is <= 26, that's another way 
    const nbWays = 1 + split1.concat(split2).filter( x => x <= 26 && x >= 10).length ;
    return nbWays
}

// Optimized, more cryptic version
const decode2 = (message) => {
  message = message.toString();
  
  const split1 = [];
  const split2 = [];
  
  split2.push(message.charAt(0));
  for (var i = 0; i < message.length; i++) {
    if(i % 2 === 0) {
      if(message.charAt(i+1)){
        split1.push(message.charAt(i) + message.charAt(i+1));
      } else {
        split1.push(message.charAt(i));
      }
    } else {
      if(message.charAt(i+1)){
        split2.push(message.charAt(i) + message.charAt(i+1))
      } else {
        split2.push(message.charAt(i))
      }
    }
  }
  console.log(split1, split2)
  const nbWays = 1 + split1.concat(split2).filter( x => x <= 26 && x >= 10).length ;
  return nbWays
}

/*
console.log(decode(m2));
console.log('---------')
*/
console.log(decode2(m2));

