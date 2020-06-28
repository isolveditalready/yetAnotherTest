let task = {
    title: 'My Title',
    description: 'My Description'
};

Object.defineProperty(task, 'toString2', {
    value: function () {
        return `${this.title} ${this.description}`
    },
    writable: true,
    enumerable: false,
    configuration: true
});

task.toString = 'hi';

console.log(`${task.toString2()}`)


var urgentTask = Object.create(task);

Object.defineProperty(task, 'toString2', {
    value: function () {
        return `${this.title} is urgent`
    },
    writable: true,
    enumerable: false,
    configuration: true
});

console.log(`${urgentTask.toString2()}`)