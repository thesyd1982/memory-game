import { View } from "../core/view.js";

export class CaseView extends  View  {
    
     constructor(protected _current :HTMLImageElement ,  protected _parent :HTMLDivElement){
        super(_current , _parent)
        this._current.addEventListener('click',(e)=>{
            this.notifyObservers(e)
        })
    }

    draw = ( value:string , face:boolean) => {
        this.clear()
        this._current.classList.add("card");
        
        if(face){
            this._current.classList.add("front")
            this._current.src = `img/${value}.svg`;
        }
        else{    
            this._current.classList.add("back")
            this._current.src = 'img/back.png'
    }
        this._parent.appendChild(this._current)
       
  };

  clear=() => {
      this._current.classList.remove("front", "back")
      this._current.innerHTML = '';
      
  };

}