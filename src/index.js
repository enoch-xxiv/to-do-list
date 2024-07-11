import { defaultProject, projectEditor } from "./modules/projects";
import { renderCurrentProject } from "./modules/ui";


defaultProject.addTask("yo")
defaultProject.addTask("wash my hair")
defaultProject.addTask("go to the shops")

renderCurrentProject(defaultProject)

