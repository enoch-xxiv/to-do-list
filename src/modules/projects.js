class Project {
    constructor(title) {
        this.title = title;
        this.toDos = [];
    };
};

class ProjectEditor {
    constructor() {
        this.projectList = [];
    };

    addProject(title) {
        const newProject = new Project(title);
        this.projectList.push(newProject)
        
        return this.projectList
    };
};

const defaultProject = new Project("default");

export { Project, ProjectEditor, defaultProject }