#!/usr/bin/env python3
# Time : 1:17
import time

def func():
  print('YO')

def schedule(fn, ms):
  time.sleep(ms / 1000)
  fn()

schedule(func, 5000)