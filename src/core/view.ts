import { Observer } from "./observer";
import { Subject } from "./subject";
import { ViewInterface } from "./view.interface.js";
import {DrawingInterface} from "./drawing.interface.js"


export abstract class View implements  ViewInterface{  
    
    constructor( protected _drawing: DrawingInterface|null ){
    }

    private observers: Observer[] = [];
    
    registerObserver(o: Observer): void {
        this.observers.push(o);
    }
    removeObserver(o: Observer): void {

        let index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }
    notifyObservers(data:object): void {
        for (let observer of this.observers) {
            observer.update(data);
        }

    }
    
    get drawing():DrawingInterface|null{ return this._drawing ;}
    set drawing(drawing:DrawingInterface|null){  this._drawing = drawing ; }

    
}