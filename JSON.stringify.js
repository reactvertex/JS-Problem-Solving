function JSONStringify(value) {
    // Your implementation
    if (value === null || value === undefined || typeof value === 'function') return 'null';

    if (typeof value === 'string') return `"${value}"`
    if (typeof value === 'number' || typeof value === 'boolean') return String(value);

    if (Array.isArray(value)) {
        const arrRes = value.map((val) => JSONStringify(val));
        return `[${arrRes.join(',')}]`;
    }

    if (typeof value === 'object') {
        const entries = Object.entries(value)
            .filter(([_, val]) => val !== undefined && typeof val !== 'function') 
            .map(([key, val]) => `"${key}":${JSONStringify(val)}`);
        return `{${entries.join(',')}}`;
    }

}

//For the purpose of user debugging.
// const str = "hello"
const obj = { name: "Alice", age: 30 }
const arr = [undefined, 5, 6, "10"]
JSONStringify(obj);

module.exports = JSONStringify
