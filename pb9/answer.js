const i1 = [2, 4, 6, 2, 5];
const i2 = [5, 1, 1, 5];

const nonAdjSum = (input) => {
  const orig = [...input];
  const nbMax = input.length % 2 ===0 ? Math.trunc(input.length / 2) : Math.trunc(input.length / 2) +1;
  input.sort((a,b) => {
    if(a>b)
      return -1
    return 1
  })
  
  console.log(nbMax)
  console.log(orig)
  console.log(input)
}

console.log(nonAdjSum(i1));