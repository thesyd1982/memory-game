import {View}from '../core/view.js'
import { Case } from '../models/case.model.js'
import { CaseView } from './case.view.js';

;

export class LineView extends View{
    
        protected current :HTMLDivElement ; 
  
    constructor(protected parent:HTMLDivElement){
        
        
        super()
        console.log(parent , 15,'LineView')

        this.current = document.createElement("div") ;
        this.current.classList.add("line");
      
       // protected plateau:HTMLDivElement  = document.getElementById(id) as HTMLDivElement
        
    }


drawLine = (cases:Case[]) => {
 cases.forEach(
     (c) => { 
         let vc = new CaseView(this.current)
         vc.draw(c.value,c.face);
        })
      this.parent.appendChild(this.current)
};

clearLine = () => {
  this.current.innerHTML = "";
};

update(cases:Case[]){

  this.clearLine()
  this.drawLine(cases)
}


}
