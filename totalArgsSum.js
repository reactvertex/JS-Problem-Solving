function sum(...args) {
    if (args.length) {
        return  args.reduce((acc, curr) => {
            acc = curr + acc;
            return acc
        }, 0)
    } else {
        return 0
    }
}

sum(100, 200, 300, 400); //1000
sum()  //0
sum(5, -5, 10, 20) //30


