import { defaultProject } from "./projects";

class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export default function createTask(title, description, dueDate, priority, project) {
    const newTask = new Task(title, description, dueDate, priority);
    if (!project) {
        defaultProject.tasks.push(newTask)
    }
    return newTask

}