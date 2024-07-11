import Task from "./task";

class Project {
    constructor(title) {
        this.title = title;
        this.tasks = [];
    };

    addTask(title, description, dueDate, priority) {
        const newTask = new Task(title, description, dueDate, priority);
        this.tasks.push(newTask);
        return newTask;
    }
    
    removeTask(index) {
        this.tasks.splice(index, 1);
        return this.tasks;
    }
};


class ProjectEditor {
    constructor() {
        this.projectList = [];
    };

    createProject(title) {
        const newProject = new Project(title);
        this.projectList.push(newProject)
        
        return newProject;
    };

    deleteProject(index) {
        this.projectList.splice(index, 1)
    }

};

const projectEditor = new ProjectEditor()
const defaultProject = new Project("Default");

export { projectEditor, defaultProject }