function customAssign(target, ...sources) {
        if (target === null || target === undefined) {
                throw new TypeError('Cannot convert undefined or null to object');
        }

        const obj = Object(target);

        sources.forEach(source => {
                if (source === null || source === undefined) return;

                Object.keys(source).forEach(key => {
                        obj[key] = source[key];
                });
        });

        return obj;
}
customAssign({ a: 1 }, { b: 2 }, { c: 3 });

module.exports = customAssign
