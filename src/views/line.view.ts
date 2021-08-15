import {View}from '../core/view.js'
import { Case } from '../models/case.model.js'




export class LineView extends View{

    protected _current :  HTMLDivElement
    protected static id : number = -1 
    constructor(protected _parent:HTMLDivElement ){
        
      super(_parent);
      LineView.id++;
      this._current = document.createElement("div") 
      this._current.id = `${LineView.name.split('View')[0].toLowerCase()}_${LineView.id}`

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
