import { defaultProject, projectEditor } from "./modules/projects";

const test = projectEditor.createProject("test")
test.addTask("hi test")

defaultProject.addTask("yo", "wagwan", "gegadigi", "high")

console.table(defaultProject.tasks)
console.table(test.tasks)



