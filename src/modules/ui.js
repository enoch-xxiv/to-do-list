import { defaultProject, Project } from "./projects";

const content = document.querySelector("#content");

function addTask() {
    const addTaskButton = document.createElement("button");
    addTaskButton.textContent = "Add task";

    return content.append(addTaskButton);
}

export { addTask }