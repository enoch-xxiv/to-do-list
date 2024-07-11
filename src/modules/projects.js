import createTask from "./task";

class Project {
    constructor(title) {
        this.title = title;
        this.tasks = [];
    };

    listTasks() {
        return this.tasks;
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
        return this.tasks;
    }

    newTask(title, description, dueDate, priority) {
        const task = createTask(title, description, dueDate, priority, true);
        this.tasks.push(task);
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
const defaultProject = new Project("default");

export { Project, projectEditor, defaultProject }