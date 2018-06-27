#!/usr/bin/env python3

def autocomplete(query):
  set = ['dog', 'deer', 'deal']
  return list(filter(lambda el: el.startswith(query), set))  

print(autocomplete('de'))
