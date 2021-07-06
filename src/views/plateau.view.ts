import {View}from '../core/view.js'
import { Plateau } from '../models/plateau.model.js'
import { Case } from '../models/case.model.js'
export class PlateauView extends View{
//   private _plateau: Plateau;
  
//     constructor(plateau:Plateau){
//         super(plateau)
//         this._plateau = plateau
      
//     }
 

//      grid = document.getElementById("plateau") as HTMLDivElement;

//  drawGrid = () => {
    
//     this._plateau.cases.map((line :Case[]) => this.grid.appendChild(this.drawLine(line)));
// };

// drawLine = (ligne:Case[]) => {
//   let line = document.createElement("div");
//   line.classList.add("line");
//   ligne.map((b) => line.appendChild(this.drawBoxe(b)));
//   return line;
// };

//  drawBoxe = (c : Case) => {
//   let div = document.createElement("div");
//   div.classList.add("boxe");
//   div.addEventListener('click',(e)=>{
    
//     console.log("teste click:",c.x,c.y)
//   })
//   div.innerText = `_${c.x}

// ${c.y}`;
// !c.status?div.classList.add("front"):div.classList.add("back")

//   return div;
// };

// clearGrid = () => {
//   this.grid.innerHTML = "";
// };

// update(cases:Case[][]){
//   this._plateau.cases = cases
//   this.clearGrid()
//   this.drawGrid()
// }

}