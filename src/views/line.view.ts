import {View}from '../core/view.js'
import { Case } from '../models/case.model.js'




export class LineView extends View{

    protected _current :  HTMLDivElement
    constructor(protected _parent:HTMLDivElement ){
        
      super(_parent);
      this._current = document.createElement("div") 
      this._current.id = "line"

      this._current.classList.add("line");  
      this._parent.appendChild(this._current);
    }


draw = (cases:Case[]) => {
       
      /*  this._parent.appendChild(this._current)

  console.log(this._current , 18 , "line.view")
  cases.forEach(
     (c) => { 
         let vc = new CaseView( this._current)
         vc.draw(c.value,c.face);
        })*/
     
        

};

clear= () => {
 // this._current.innerHTML = "";
};

update(cases:Case[]){

  this.draw(cases)
}


}
