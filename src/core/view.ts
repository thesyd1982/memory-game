import { Observer } from "./observer";
import { Subject } from "./subject";

export class View implements  Subject{  
    private observers: Observer[] = [];
    constructor() {
    }
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