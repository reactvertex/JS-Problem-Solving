function deepClone(obj) {

    if (obj === null || typeof obj !== 'object') {
        return obj; 
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    const clone = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;

}


deepClone({ a: { b: { c: 3 } } });
