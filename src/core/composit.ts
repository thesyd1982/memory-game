import { Model } from "./model.js"
import { View } from "./view.js"
import {Controller}from "./controller.js"


import { Component } from "./component.js"

export abstract class Composit extends Component {

    protected _components:Component[] = []
    
    constructor( protected _model:Model,protected _view:View ,protected _controller:Controller){
        
        super(_model,_view,_controller)
        
    }

    add(component:Component){
        //let s = JSON.stringify(component)
      // let c:Component = JSON.parse(s)
        let c:Component = Object.assign({}, component);
       //c.id =  this._components.length
       this._components.push(c);
        // console.log(this._components.length-1 , "20 coposit")
       
       
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