const content = document.querySelector("#content");

function renderAddTaskButton() {
    const addTaskButton = document.createElement("button");
    addTaskButton.textContent = "Add task";

    return content.append(addTaskButton);
}

export { renderAddTaskButton }