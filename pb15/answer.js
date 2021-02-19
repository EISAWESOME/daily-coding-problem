
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


const getAlphaColId = (numId) => {    

    let b26 = numId.toString(26);

    let split = b26.split("");

    return split.map(id => alphabet.charAt(id - 1)).join("");
};

console.log(getAlphaColId(27));