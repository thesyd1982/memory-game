import {Observer} from './observer.js'
export interface Subject{
    registerObserver(o: Observer):void;
    removeObserver(o: Observer):void;
    notifyObservers(data:object):void;
}


