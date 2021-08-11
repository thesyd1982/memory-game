import { Model } from "./model.js"
import { View } from "./view.js"
import {Controller}from "./controller.js"


export abstract class Component {
    
    protected _name =  this.constructor.name;
    public id:number = -1  ;

    constructor( protected _model:Model,protected _view:View ,protected _controller:Controller)
    {
        this.view.registerObserver(this._controller);
        
       
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
    
    public get _id(){return this._id}
    
    public set _id(id:number){this._id = id}
    

    get name(){
       return  this._name 
    }


    public abstract  draw():void;
 
}