import { Case } from "./case.model.js";
import { Model } from "../core/model.js";



export  class Line extends Model {
    
    protected _cases:Case[] = [] 
    
    constructor(public x:number = 8)
    {
        super()
      
	}

    public get cases () :Case[]{
        return this._cases
    }
     
    public set cases (cases:Case[]){
        this._cases = cases
    }

    addCase(cellule:Case , x:number  ){
            this._cases[x] = cellule
    } 
    
    init(x:number){
        this._cases = [...Array(x)].map((_) => new Case("king_heart")) //expamle [ KH,KH ... ]
         
    }


}   