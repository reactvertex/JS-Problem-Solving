function countVowels(str) {
    const valumeList = ["a", "e", "i", "o", "u"]
    let count = 0
    str.split('').map((val) => {
        if (valumeList.includes(val.toLowerCase())) {
            count = count + 1
        }
    })
    return count
}

countVowels("JavaScript");

// result: 3
