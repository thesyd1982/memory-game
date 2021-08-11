import { Controller } from "../core/controller.js";
import { Case } from "../models/case.model.js";
import { CaseView } from "../views/case.view.js";

export class CaseController extends Controller{
    constructor(   protected model:Case,protected view:CaseView){
        super(model, view)
       
    }
    update(data: object): void {
        //set model
        this.model.face = !this.model.face
        // update view
        this.view.draw(this.model.value, this.model.face)
        
     }
} 
