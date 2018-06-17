
// Time : 03:34
const pb2 = (list, k) => {
  for(let i=0; i < list.length; i++){
    for(let j=0; j < list.length; j++){
      if(list[i] + list[j] === k)
        return true;
    }
  }
  return false;
}


const input = [10, 15, 3, 7];
const k = 17;
console.log(pb2(input, k))