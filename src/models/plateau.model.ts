import { Case } from "./case.model.js";
import { Model } from "../core/model.js";
import {Line} from "./line.model.js";


export  class Plateau extends Model {
   
    
    constructor(protected _lines : Line[] = []){
        super()
    }

    get lines (){
        return this._lines
    }
     
    set lines (lines:Line[]){
        this._lines = lines
    }

    addLine(line:Line , line_index:number){
            this._lines[line_index] = line
    } 

    public static init(line_length:number,numberOfLine:number){
        const  lines = []
        let currentLine =  Line.init(line_length)
        let currentCases = currentLine.cases
        
        for(let i = 0 ; i< numberOfLine ; i++){
            
            lines.push(new Line([...currentCases.sort(()=> Math.random()-0.5 )])) 
        }
        
        return new Plateau(lines);
       
    }
    
    generateClones = (n:number,value:string)=> {

       const c = new Case(value);
       let clones= []
       for(let i =0 ;i < n; i++  ) clones.push(c.clone());
       
       return  clones;
    }

    generateCouple = (value:string)=>this.generateClones(2,value)
    generateTriple = (value:string)=>this.generateClones(3,value)

    //generateCasesList = (n:number) => n

    shuffle = (array:any) => [... array.sort(()=> Math.random()-0.5 )] 
    

}   