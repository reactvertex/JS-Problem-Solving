
function shuffle(array) {
    const newArr = [...array];
    for (let i = newArr.length -1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]]
    }
    return newArr
}

shuffle([1, 2, 3, 4, 5]);