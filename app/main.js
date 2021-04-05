//This file is for the initial html selection, it does not need any editing...

//IMPORT LINES//
import Controller from "./Controllers/Controller.js";

//implement controllers with the class currently called App//
class App {
  valuesController = new Controller();
}

//renames App to lowercase string "app"...... used for app.thing.thing
window["app"] = new App();
