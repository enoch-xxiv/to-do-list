class toDo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export default function createToDo(title, description, dueDate, priority) {
    return new toDo(title, description, dueDate, priority)
}