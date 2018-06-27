const i1 = [2, 4, 6, 2, 5];
const i2 = [5, 1, 1, 5];

const nonAdjSum = (input) => {
  let incl = 0;
  let excl = 0;
  let new_excl;
  input.forEach( (el) => {
    new_excl = excl > incl ? excl : incl;
    incl = excl + el;
    excl = new_excl;
  })

  return excl > incl ? excl : incl;

}

console.log(nonAdjSum(i1));