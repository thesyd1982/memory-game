import { Observer } from "./observer";
import { Subject } from "./subject";

export abstract class View implements  Subject{  
    
    static id:number=-1 
    
    constructor(protected _parent:HTMLElement){
        View.id++
    }

    private observers: Observer[] = [];
    
    registerObserver(o: Observer): void {
        this.observers.push(o);
    }
    removeObserver(o: Observer): void {

        let index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }
    notifyObservers(data:object|null): void {
        for (let observer of this.observers) {
            observer.update(data);
        }

    }
    
   

    
}