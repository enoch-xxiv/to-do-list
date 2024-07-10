import { defaultProject } from "./projects";

class toDo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export default function createToDo(title, description, dueDate, priority) {
    const newToDo = new toDo(title, description, dueDate, priority)
    defaultProject.toDos.push(newToDo)

    return newToDo
}