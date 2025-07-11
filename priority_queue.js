class PriorityQueue {
    tasks = [];

    enqueue(value, priority) {
        const task = {
            name: value,
            priority: priority,
        };
        this.tasks.push(task);
        this.tasks.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        if (this.isEmpty()) return null;

        this.tasks.sort((a, b) => a.priority - b.priority);
        const task = this.tasks.shift();
        return task.name;
    }

    peek() {
        if (this.isEmpty()) return null;

        this.tasks.sort((a, b) => a.priority - b.priority);
        return this.tasks[0].name;
    }

    isEmpty() {
        return this.tasks.length === 0;
    }

    size() {
        return this.tasks.length;
    }
}



module.exports = { PriorityQueue }
