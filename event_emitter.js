class EventEmitter {
    constructor() {
        this.eventNames = {};
    }

    on(eventName, callback) {
        if (!this.eventNames[eventName]) {
            this.eventNames[eventName] = [];
        }
        this.eventNames[eventName].push(callback);
    }

    once(eventName, callback) {
        const onceWrapper = (...args) => {
            callback(...args);
            this.off(eventName, onceWrapper);
        };
        this.on(eventName, onceWrapper);
    }

    off(eventName, callbackToRemove) {
        if (!this.eventNames[eventName]) return;
        this.eventNames[eventName] = this.eventNames[eventName].filter(
            listener => listener !== callbackToRemove
        );
    }

    emit(eventName, ...args) {
        if (this.eventNames[eventName]) {
            this.eventNames[eventName].forEach(listener => listener(...args));
        }
    }
}
