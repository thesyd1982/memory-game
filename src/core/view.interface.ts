import { Observer } from "./observer";
export interface ViewInterface {  
    
    registerObserver(o: Observer): void ;
    removeObserver(o: Observer): void ;
    notifyObservers(data:object): void ;
     
}