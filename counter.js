var cache = 0;
function makeCounter(initialValue = 0) {
    // Your implementation
    cache = initialValue
    return {
        increment: function (){
             return cache = cache + 1 
        },
        decrement: function(){
             return  cache = cache -  1
        },
        reset: function (){
            return cache = initialValue
        }
    }
}

const counter = makeCounter(5)
console.log(counter.increment());  
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.decrement());


// result
// 6
// 7
// 6
// 5
// 4

