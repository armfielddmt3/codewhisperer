// Create a class named CodeWhisperer
class CodeWhisperer {
    constructor() {
        this.projects = [];
    }

    // Method: add a project to the CodeWhisperer's portfolio
    addProject(project) {
        this.projects.push(project);
        console.log(`Added project "${project}" to the CodeWhisperer's portfolio.`);
    }

    // Method: remove a project from the CodeWhisperer's portfolio
    removeProject(project) {
        const index = this.projects.indexOf(project);
        if (index !== -1) {
            this.projects.splice(index, 1);
            console.log(`Removed project "${project}" from the CodeWhisperer's portfolio.`);
        } else {
            console.log(`Project "${project}" is not found in the CodeWhisperer's portfolio.`);
        }
    }

    // Method: list all projects in the CodeWhisperer's portfolio
    listProjects() {
        console.log("Projects in the CodeWhisperer's portfolio:");
        this.projects.forEach(project => {
            console.log(project);
        });
    }
}

// Create an instance of CodeWhisperer named myCodeWhisperer
const myCodeWhisperer = new CodeWhisperer();

// Add projects to the CodeWhisperer's portfolio
myCodeWhisperer.addProject("Web Application");
myCodeWhisperer.addProject("Mobile App");
myCodeWhisperer.addProject("Data Analysis Tool");

// List all projects in the CodeWhisperer's portfolio
myCodeWhisperer.listProjects();

// Remove a project from the CodeWhisperer's portfolio
myCodeWhisperer.removeProject("Mobile App");

// List all projects in the CodeWhisperer's portfolio after removal
myCodeWhisperer.listProjects();
