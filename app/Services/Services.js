//This file cook of the kitchen
//it handles the javascript logic
//this is where logic all goes, all functions built here except draws

//IMPORT LINES//
import { ProxyState } from "../AppState.js";
import Value from "../Models/Model.js";

class ValuesService {

  //write functions in this class
  addValue() {
    console.log('hello world')
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }


  addQuarter() {
    ProxyState.money += ProxyState.quarter
    console.log(ProxyState.money)
  }

  addCodeNum(num) {
    num = num
    console.log(num)
  }



}

//This exports the class above
export const valuesService = new ValuesService();

