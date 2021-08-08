import { Model } from "./model.js"
import { View } from "./view.js"
import {Controller}from "./controller.js"


import { Component } from "./component.js"

export class Composit extends Component {

    protected _components:Component[] = []
    
    constructor( protected _model:Model,protected _view:View ,protected _controller:Controller){
        
        super(_model,_view,_controller)
    }

    add(component:Component){
        this._components.push(component);
    } 

    remove(component:Component){
        this._components = this._components.filter((c)=>{
            return c !== component
        })
    } 

    getChild(index:number):Component{ 
        return this._components[index] 
    }
    getChildren():Component[]{
        return this._components
    }
   
}