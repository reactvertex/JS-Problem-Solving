function formatList(items) {
  if (items.length === 0) return '';
  if (items.lengt === 1) return items[0];

  const formatedStr = items.reduce((acc, curr, index) => {
    if (index === 0) return curr
    if (index === items.length - 1) return acc + " and " + curr
    return acc + "," +  " "+curr
  }, '')
  return formatedStr
}

formatList(["apple", "banana"]);

// <-------------useCase----------->
// ["apple"] --> "apple",
// ["apple", "banana"] ----> "apple and banana",
// ["apple", "banana", "cherry"] ----> "apple, banana and cherry"
// ["", "two", ""] ----> ", two and "