#!/usr/bin/env python3
# Time : 7:12
def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair

def car(pair):
  # Returns first element of the pair
  def f(a, b):
    print(a)
  pair(f)

def cdr(pair):
  # Returns last element of the pair
  def f(a, b):
    print(b)
  pair(f)

car(cons(3, 4))
cdr(cons(3, 4))
