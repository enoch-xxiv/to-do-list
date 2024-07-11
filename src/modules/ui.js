const content = document.querySelector("#content");

function renderCurrentProject(Project) {
    const projectTitle = document.querySelector("#current-project")
    projectTitle.textContent = `Current Project: ${Project.title}`

    const taskSection = document.querySelector("#tasks")
    Project.tasks.forEach(task => {
        let taskSectionItem = document.createElement("p")
        taskSectionItem.textContent = `${task.title}`
        taskSection.appendChild(taskSectionItem)
    });
}



export { renderCurrentProject }