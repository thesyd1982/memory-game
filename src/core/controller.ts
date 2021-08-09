import { Model } from "./model.js";
import { View } from "./view.js";
import {Observer }from './observer'

export  abstract class Controller implements Observer{

 constructor(protected view:View, protected model:Model){
  
    this.view.registerObserver(this);
 }
   abstract update(data: object): void ;
}