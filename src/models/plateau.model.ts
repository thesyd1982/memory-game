import { Case } from "./case.model.js";
import { Model } from "../core/model.js";


export  class Plateau extends Model {
    private _cases:any[][]

    constructor(public col:number,public line:number = col){
        super()
       
        this._cases = [...Array( line)].map((_, i) =>
			[...Array(col)].map((_, j) => null) //[{},{}]
		)
    }

    get cases (){
        return this._cases.slice()
    }
     
    set cases (cases:Case[][]){
        this._cases = cases
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