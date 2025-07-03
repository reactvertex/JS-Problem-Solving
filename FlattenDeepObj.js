function flattenObject(obj, parentKey = "", result={}) {
    for (const key in obj) {
        if (!obj.hasOwnProperty(key)) continue;

        const newKey = parentKey ? `${parentKey}.${key}` : key;

        if (obj[key] !== null && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            flattenObject(obj[key], newKey, result);
        } else {
            result[newKey] = obj[key];
        }
    }
    return result;
}

flattenObject({ a: { b: 1 } });

