import { Observer } from "./observer";
import { Subject } from "./subject";
import { ViewInterface } from "./view.interface.js";



export abstract class View implements  ViewInterface{  
    
    constructor(protected current:HTMLElement, protected parent:HTMLElement){
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
    
   

    
}