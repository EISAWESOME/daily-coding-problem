

// Time : 06:18
const pb1 = ( list ) => {
  let product = 1;
  
  
  for(let i=0;  i< list.length; i++) {
    // Product of every element in the input array
    product *= list[i];
  }  

  for(let i=0;  i< list.length; i++) {
    // Divide by current index and push
    list[i] = product / list[i];
  }

  return list;
}

console.log(pb1([1, 2, 3, 4, 5]));

// Bonus Time : 02:34
const pb1_bonus = ( list ) => {
  const ret = [];
  let product = 1;
  for(let i=0;  i< list.length; i++) {
    
    for(let j=0;  j< list.length; j++) {
      if(j !== i) 
        product *= list[j];
    }
    
    ret[i] = product;
    product = 1;
  }

  return ret;
}

console.log(pb1_bonus([1, 2, 3, 4, 5]));