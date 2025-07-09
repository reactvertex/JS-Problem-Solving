function detectType(value) {
     if (value === null) return "null";
    if (Array.isArray(value)) return "array";

    const type = typeof value;

    switch (type) {
        case "string":
        case "number":
        case "boolean":
        case "undefined":
        case "symbol":
        case "function":
        case "object":
            return type;
        default:
            return "unknown";
    }
}
//For the purpose of user debugging.
detectType();

module.exports = detectType
