# Daily Coding Problem
One problem a day.
This repo will contains the answers.
I'm timing only the first solve

---

## 1
> This problem was asked by Uber

Given an array of integers, return a new array such that each element at index `i` of the new array is the product of all the numbers in the original array except the one at `i`.

For example, if our input was `[1, 2, 3, 4, 5]`, the expected output would be `[120, 60, 40, 30, 24]`. If our input was `[3, 2, 1]`, the expected output would be `[2, 3, 6]`.

Follow-up: what if you can't use division?

### Solution

[JS](pb1/answer.js) (6:18, Bonus 2:34)

---

## 2
>This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given `[10, 15, 3, 7]` and `k` of `17`, return `true` since 10 + 7 is 17.

Bonus: Can you do this in one pass?

### Solution

[JS](pb2/answer.js) (3:34)

---

## 3
>This problem was recently asked by Google.

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.
For example, given the following Node class
```python
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```
The following test should pass:
```python
node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
```

### Solution

[JS](pb3/answer.js) (5:12)

[Python](pb3/answer.py) (Not timed)

---

## 4
>This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
For example, the input `[3, 4, -1, 1]` should give `2`. The input `[1, 2, 0]` should give `3`.
You can modify the input array in-place.

### Solution

[JS](pb4/answer.js) (3:47)

---

## 5 
> This problem was asked by Jane Street.

`cons(a, b)` constructs a pair, and `car(pair)` and `cdr(pair)` returns the first and last element of that pair. For example, `car(cons(3, 4))` returns `3`, and cdr`(cons(3, 4))` returns `4`.
Given this implementation of cons:
```python
def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair
```
Implement car and cdr.

### Solution

[Python](pb5/answer.py) (7:12)

[JS](pb5/answer.js) (Not timed)

---

## 6
> This problem was asked by Google.

An XOR linked list is a more memory efficient doubly linked list. Instead of each node holding `next` and `prev` fields, it holds a field named both, which is an XOR of the next node and the previous node. Implement an XOR linked list; it has an `add(element)` which adds the element to the end, and a `get(index)` which returns the node at index.
If using a language that has no pointers (such as Python), you can assume you have access to get_pointer and dereference_pointer functions that converts between nodes and memory addresses.

---

## 7 
> This problem was asked by Facebook.

Given the mapping `a = 1, b = 2, ... z = 26`, and an encoded message, count the number of ways it can be decoded.
For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.
You can assume that the messages are decodable. For example, '001' is not allowed.


### Solution

[JS](pb7/answer.js) (Not timed, very long)

---

## 8
> This problem was asked by Google.

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.
Given the root to a binary tree, count the number of unival subtrees.
For example, the following tree has 5 unival subtrees:

```
   0
  / \
 1   0
    / \
   1   0
  / \
 1   1
```

### Solution

[JS](pb8/answer.js) (Not timed)

---

## 9 

> This problem was asked by Airbnb.

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.
For example, `[2, 4, 6, 2, 5]` should return `13`, since we pick 2, 6, and 5. `[5, 1, 1, 5]` should return `10`, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?

[JS](pb9/answer.js) (Cheated)

---

## 10 
> This problem was asked by Apple.

Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.

### Solution
[Python](pb10/answer.py) (1:17)

[JS](pb10/answer.js) (Trivial)

---

## 11
> This problem was asked by Twitter.

Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string `de` and the set of strings `[dog, deer, deal]`, return `[deer, deal]`.
Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

### Solution
[JS](pb11/answer.js) (1:28)

[Python](pb11/answer.py)

---

## 12
> This problem was asked by Amazon.

There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.
For example, if N is 4, then there are 5 unique ways:
```
1, 1, 1, 1
2, 1, 1
1, 2, 1
1, 1, 2
2, 2
```
What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if `X = {1, 3, 5}`, you could climb 1, 3, or 5 steps at a time.

### Solution
[JS](pb12/answer.js) (Partial solution only)

---

## 13
> This problem was asked by Amazon.

Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.
For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".

### Solution
[JS](pb13/answer.js) (10:47)

---

## 14
> This problem was asked by Google.

The area of a circle is defined as `πr²`. Estimate `π` to 3 decimal places using a Monte Carlo method.
Hint: The basic equation of a circle is `x² + y² = r²`.

### Solution
[Python](pb14/answer.py) (19:37)


---

## 15
> This problem was asked by Dropbox.

Spreadsheets often use this alphabetical encoding for its columns: "A", "B", "C", ..., "AA", "AB", ..., "ZZ", "AAA", "AAB", ....
Given a column number, return its alphabetical column id. For example, given 1, return "A". Given 27, return "AA".

### Solution
[JS](pb15/answer.js) (9:18)
