import {View}from '../core/view.js'
// import { Plateau } from '../models/plateau.model.js'
// import { Case } from '../models/case.model.js'
// import { CaseView } from './case.view';

export class PlateauView extends View{
    
        protected _current :  HTMLDivElement
        constructor(protected _parent:HTMLDivElement ){
            
          super(_parent);
          this._current = document.createElement("div") 
          this._current.id = "plateau"
    
          this._current.classList.add("plateau");  
          this._parent.appendChild(this._current);
        }

    draw():void{
        
    }
 } 
    
//     protected plateau:HTMLDivElement = document.getElementById("plateau") as HTMLDivElement
  
//     constructor(){
//         super()
        
//     }
 

    

//  drawGrid = (cases:Case[][] ) => {
    
//     // cases.map((line :Case[]) => this.plateau.appendChild(this.drawLine(line)));
// };

// drawLine = (ligne:Case[]) => {
//   let line = document.createElement("div");
  
//   line.classList.add("line");
  
//   ligne.map((c,index) => {
//     line.id = `line-${index}`
//     line.appendChild(this.drawBoxe(line.id,c))});
   
//   return line;
// };

//   drawBoxe = (id:string , c : Case) => {
// //   let div = document.createElement("div");
// //   div.classList.add("boxe");
// //   div.addEventListener('click',(e)=>{
    
// //     console.log("teste click:",c.x,c.y)
// //   })
// //   div.innerText = `_${c.x}

// // ${c.y}`;
// // !c.status?div.classList.add("front"):div.classList.add("back")
// let parent = document.getElementById(id) as HTMLImageElement
// return new CaseView(parent).drawCase(c.value,c.face)

  
//  };

// clearGrid = () => {
//   this.grid.innerHTML = "";
// };

// update(cases:Case[][]){
//   this._plateau.cases = cases
//   this.clearGrid()
//   this.drawGrid()
// }

// }