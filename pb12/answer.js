/*

          44
        3333
      222222
me  11111111

*/

const nbWays = (N) => {
  // Nb of ways to climb a 0 step stair is 1
  // Nb of ways to climb a 1 step stair is 1 as well
  if(N ===0 || N === 1)
    return 1;
  else 
    return nbWays(N-1) + nbWays(N-2);
}

console.log(nbWays(3))