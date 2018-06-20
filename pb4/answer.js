
// Time : 3:47
const input1 = [3, 4, -1, 1];
const input2 = [1, 2, 0];

const pb4 = (input) => {
  // Filter out negative elements
  const onlyPositives = input.filter( el => el > 0 );
  let i = 1;
  // Maximum possible value is the highest positive number + 1 
  while(i <= Math.max(...onlyPositives) +1 ){
    if(!onlyPositives.includes(i))
      //Starts at 1, returns whenever an integer is missing
      return i;
    i++;
  }  
}

console.log(pb4(input1));
console.log(pb4(input2));