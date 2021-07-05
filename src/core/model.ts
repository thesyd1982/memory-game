import { Observer } from "./observer";
import { Subject } from "./subject";

export abstract class Model implements Subject{
    private observers: Observer[] = [];
    private data!: object
    
    registerObserver(o: Observer): void {
        this.observers.push(o);
        //throw new Error("Method not implemented.");
    }
    removeObserver(o: Observer): void {

        let index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
        //throw new Error("Method not implemented.");
    }
    notifyObservers(): void {
        for (let observer of this.observers) {
            observer.update(this.data);
        }
        //throw new Error("Method not implemented.");
    }

    setData(data: object) {
        console.log('Model has changed: new Model data: ' + data);
        this.data = data;
        this.notifyObservers();
    }

    get getName():string {
       return this.constructor.name
    }
}