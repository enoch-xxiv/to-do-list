import createTask from "./modules/task";
import { defaultProject, projectEditor } from "./modules/projects";
import { addTask, listTasks } from "./modules/ui";

const test = projectEditor.createProject("test")
test.newTask("hi test")
console.log(test.tasks)

createTask("hi default")
console.log(defaultProject.tasks)


