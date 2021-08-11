import { View } from "../core/view.js";

export class CaseView extends  View  {
    protected _current : HTMLImageElement;
    

     constructor( protected _parent :HTMLDivElement){
         
         super(_parent)
         
         this._current = document.createElement('img')
         this._current.classList.add("card");
         this._current.classList.add("back")
         this._current.src = 'img/back.png'
         
        this._current.addEventListener('click',(e)=>{
            this.notifyObservers(e.target)
        })

        this._parent.appendChild(this._current)
    }

    draw = ( value:string , face:boolean) => {
        
        if(face){
            this._current.classList.remove('back')
            this._current.classList.add("front")
            this._current.src = `img/${value}.svg`;
        }
        else{ 
            this._current.classList.remove('front')   
            this._current.classList.add("back")
            this._current.src = 'img/back.png'
    }
     //bonneteau   
   // this._parent.appendChild(this._current)   
  };

  clear=() => {
      this._current.classList.remove("front", "back")
      //this._current.innerHTML = '';
      
  };

}