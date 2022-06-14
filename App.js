// Importing body
import { Body } from "./assets/js/Body";
// Instantiating Body
let body = new Body();
// App class
class App {
    // Constructor method
    constructor() { }
    // Render method
    render() {
        console.log("Application Executed!")
        return body.render();
    }
}
// Exporting components
export { App };