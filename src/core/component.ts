import { Model } from "./model.js"
import { View } from "./view.js"
import {Controller}from "./controller.js"


export abstract class Component {

    constructor( protected _model:Model,protected _view:View ,protected _controller:Controller)
    {
        this.view.registerObserver(this._controller)
       
    }

    get model (){
        return this._model
    } 
    set model (model){
        this._model = model;
    } 

    get view (){
        return this._view
    } 
    set view (view){
        this._view = view;
    }

    get controller (){
        return this._controller;
    } 

    set controller (controller){
        this._controller= controller;
    }

    public abstract  draw():void;
 
}