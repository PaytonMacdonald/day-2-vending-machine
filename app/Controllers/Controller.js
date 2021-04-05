//This file is the messenger, it only does draw function 
//and sends off functions for services to handle
//DRAW WILL ONLY GO HERE

//IMPORT LINES//
import { ProxyState } from "../AppState.js";
import { valuesService } from "../Services/Services.js";


//Private//this line adds the initial draw of a whole lotta HTML
function _draw() {
  let codeNum = ProxyState.codeNum;
  let money = ProxyState.money
  let values = ProxyState.values;
  let template = ''
  values.forEach(v => template += v.Template)
  document.getElementById("app").innerHTML =
  /*html*/`
  <div class="container-fluid">
    <div class="row d-flex justify-content-center mt-4">
        <div class="col-3 card text-center">
            <span><img src="/assets/img/test-square-vending.png" alt=""></span>
        </div>
    </div>
    <div class="row d-flex flex-column m-3">
        <div class="col d-flex justify-content-center">
            <button class="m-1" className="btn btn-info" onclick="app.valuesController.addCodeNum(1)">
                1
            </button>
            <button class="m-1" className="btn btn-info" onclick="app.valuesController.addCodeNum(2)">
                2
            </button>
            <button class="m-1" className="btn btn-info" onclick="app.valuesController.addCodeNum(3)">
                3
            </button>
            <span class="ml-3">${codeNum}</span>
        </div>
        <div class="col d-flex justify-content-center m-3">
            <button className="btn btn-info" onclick="app.valuesController.addQuarter()">
                Insert Quarter
            </button>
            <span class="ml-3">$${money}</span>
        </div>
    </div>
  </div>
  `
}

//Public this sends off the messages for services to handle
export default class ValuesController {
  constructor() {
    ProxyState.on("values", _draw);
    _draw()
  }

  addValue() {
    valuesService.addValue()
  }


  addQuarter() {
    valuesService.addQuarter()
    _draw()
  }
  addCodeNum() {
    valuesService.addCodeNum()
    _draw()
  }

}
