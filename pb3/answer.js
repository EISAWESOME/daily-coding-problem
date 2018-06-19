// Time : 5:12
class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const node = new Node('root', new Node('left', new Node('left.left')), new  Node('right'))

const serialize = (node) => {
  //console.log(JSON.stringify(node));
  return JSON.stringify(node);
}

const deserialize = (nodeString) => {
  const jsonObject = JSON.parse(nodeString);
  //console.log(jsonObject);
  return Object.assign(new Node, jsonObject)
}

console.log(deserialize(serialize(node)).left.left.val === 'left.left')