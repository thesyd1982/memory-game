import { Model } from "./model.js";
import { View } from "./view.js";
import {Observer }from './observer'

export  abstract class Controller implements Observer{

 constructor(protected model:Model ,protected view:View ){
  
 }
   abstract update(data: object): void ;
}