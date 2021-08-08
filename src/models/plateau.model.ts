import { Case } from "./case.model.js";
import { Model } from "../core/model.js";

const nombre_ligne = 8 

export  class Plateau extends Model {
    private _cases:any[][]
    
    constructor(public col:number = 8 ,public line:number = col){
        super()
       
        this._cases = [...Array( line)].map((_, i) =>
			[...Array(col)].map((_, j) => null) //expamle [[null,null],[null,null]]
		)
    }

    get cases (){
        return this._cases
    }
     
    set cases (cases:Case[][]){
        this._cases = cases
    }

    addCase(cellule:Case , x:number , y:number  ){
            this._cases[x][y] = cellule
    } 
    init(){
        this._cases = [...Array( this.line)].map((_, i) =>
			[...Array(this.col)].map((_, j) => new Case("king_heart")) //expamle [[null,null],[null,null]]
		)
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

}   