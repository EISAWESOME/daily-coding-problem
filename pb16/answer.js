// Time : 12:41

const roll = (arrNum, arrProb) => {

    let ret = "";

    let rnd = Math.random();


    if(arrNum.length === arrProb.length) {
        let sumProb = arrProb.reduce((acc, cur) => acc += cur, 0);
        let isProbValid = sumProb === 1;
    
        if (isProbValid) {            
    
            let fused = arrNum.map((n, idx) => {
                return {
                    val: n,
                    prob: arrProb[idx]
                }
            }).sort((a, b) => {
                return b.prob - a.prob;
            });
    
            fused.reduce((acc, cur) => {
    
                acc += cur.prob;
    
                cur.prob = acc;
    
                return acc;
            }, 0);  
    
            let match = fused.find(f => f.prob >= rnd);    
            
            ret = `Rolled ${rnd}, returning ${match.val}`;    
    
        } else {
            ret = "Probabilities does not add up to 1 !";
        }
    } else {
        ret = "Arrays are not the same length !";
    }

    return ret;
};


let num = [1, 2, 3, 4];
let prob = [0.1, 0.5, 0.2, 0.2];

console.log(roll(num, prob));