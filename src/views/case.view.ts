import { View } from "../core/view.js";
import { CaseDrawing } from "./case.drawing.js";
import { DrawingInterface } from '../core/drawing.interface';


export class CaseView extends  View  {
    
    protected _current:HTMLImageElement 

    constructor(protected _parent :HTMLElement   ){
        
        super(null)
        this._current= document.createElement("img");
        
        this._current.addEventListener('click',(e)=>{
            this.notifyObservers(e)
        })

        this._drawing = new CaseDrawing(this)

       
    }
   

  clearCase = () => {
      this._current.classList.remove("front", "back")
      this._current.innerHTML = '';
      
  };

  get current(){
      return this._current;
  }
  set current(current :HTMLImageElement ){
      this._current = current
  }

  get parent(){
    return this.parent;
}
set parent(parent :HTMLDivElement ){
    this.parent = parent
}


}