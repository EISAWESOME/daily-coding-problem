//Time : 1:28

const autocomplete = (query) => {
  const set = ['dog', 'deer', 'deal'];
  return set.filter(el => el.startsWith(query) )
}

console.log(autocomplete('de'));