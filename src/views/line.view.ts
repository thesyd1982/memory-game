import {View}from '../core/view.js'
import { Case } from '../models/case.model.js'
import { CaseView } from './case.view.js';

;

export class LineView extends View{
    
    constructor(protected _current:HTMLDivElement, protected _parent:HTMLDivElement ){
        
      super(_current,_parent);
      this._current.classList.add("line");  
    }


draw = (cases:Case[]) => {
 cases.forEach(
     (c) => { 
         let vc = new CaseView(document.createElement('img'), this._current)
         vc.draw(c.value,c.face);
        })
      this._parent.appendChild(this._current)
};

clear= () => {
  this._current.innerHTML = "";
};

update(cases:Case[]){
  this.clear()
  this.draw(cases)
}


}
