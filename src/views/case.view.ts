import { View } from "../core/view.js";


export class CaseView extends  View  {
    
    protected child:HTMLImageElement 

    constructor(protected parent :HTMLElement  ){
        super()
        this.child = document.createElement("img");
        
        this.child.addEventListener('click',(e)=>{
            this.notifyObservers(e)
        })
    }
    drawCase = ( value:string , face:boolean) => {
        this.clearCase()
        this.child.classList.add("boxe");
        
        if(face){
            this.child.classList.add("front")
            this.child.src = `img/${value}.png`;
        }
        else{    
            this.child.classList.add("back")
            this.child.src = 'img/back.png'
    }
        this.parent.appendChild(this.child)
       
  };

  clearCase = () => {
      this.child.classList.remove("front", "back")
      this.child.innerHTML = '';
      
  };

}