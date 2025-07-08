function debounce(fn, delay) {
    let timeroutId;
    return function (...args) {
        let context = this;
        if (timeroutId) clearInterval(timeroutId);
        timeroutId = setInterval(() => {
            fn.apply(context, args)
        }, delay)
    }
}

debounce();

module.exports = debounce
