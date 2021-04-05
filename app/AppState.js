//This kind of like the storage section
//this is where functions and values and constructed classes dwell

//IMPORT LINES//
import Soda from "./Models/Model.js"
import Value from "./Models/Model.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

// new Soda('A', 1, 0.75)
// new Soda('A', 2, 1.00)
// new Soda('A', 3, 1.25)



//this is the AppState, you put all your values 
//constructed things from models go in here
class AppState extends EventEmitter {

  money = 0.00
  quarter = 0.25
  codeNum = 0

  sodaRed = new Soda(1, 0.75)
  sodaBlue = new Soda(2, 1.00)
  sodaGreen = new Soda(3, 1.25)










  // this is just an example don't worry about this
  /** @type {Value[]} */
  values = []
}


























//Dont worry about this yet... this is MAGIC right now
export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
