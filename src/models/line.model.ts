import { Case } from "./case.model.js";
import { Model } from "../core/model.js";
import {cards} from "../data/cards.js";

export  class Line extends Model {
    
    
    
    constructor( protected _cases:Case[] = []  )
    {
        super()
      
	}

    public get cases () :Case[]{
        return this._cases
    }
     
    public set cases (cases:Case[]){
        this._cases = cases
    }

    add(cellule:Case , caseIndex:number  ){
            this._cases[caseIndex] = cellule
    } 
    
   public static init(numberOfCase:number) {
    let cases:Case[] = []
        // cases = [...Array(numberOfCase)].map((_) => {
        //    let randomCase = Case.randCase()

        let i=numberOfCase
        while(i--)
        {
            let randomCase = Case.randCase()
            while(cases.includes(randomCase) )   
                randomCase = Case.randCase()
            cases.push(randomCase)
       }

       //)
       return new Line( cases );
   }


}   