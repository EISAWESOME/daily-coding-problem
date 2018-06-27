
class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Same tree as example
const tree =                        new Node(0,

                          new Node(1),              new  Node(0,

                                            new Node(1,                 // 0

                                        1,              1) ,            new Node(0)));



const countUnival = (root) => {
  let nbUnival = 0;

  const processNode = (node, value) => {

    if(node.right || node.left) {
      if( node.right) {
        if(node.right.val === value) {
          if(processNode(node.right, value)){
            nbUnival++;
          }
        } else {
          return processNode(node.right, value);
        }
      }

      if(node.left) {
        if(node.left.val === value) {
          if(processNode(node.left, value)) {
            nbUnival++;
          }
        } else {
          return processNode(node.left, value);
        }   
      }
  
    } else {
      nbUnival++;
      return true;
    }
  }
  processNode(root, root.val);
  return nbUnival;

}
console.log(countUnival(tree));