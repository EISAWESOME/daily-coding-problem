#!/usr/bin/env python3
# Not timed
import pickle

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def serialize(node: Node ) -> str:
  return pickle.dumps(node)
def deserialize(nodeString: str) -> Node:
  return pickle.loads(nodeString)

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
print(deserialize(serialize(node)).left.left.val == 'left.left')