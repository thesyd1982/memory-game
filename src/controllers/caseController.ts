import { Controller } from "../core/controller.js";
import { Case } from "../models/case.js";
import { CaseView } from "../views/caseView.js";

export class CaseController extends Controller{
    constructor( protected view:CaseView,  protected model:Case){
        super(view,model)
        this.view.drawCase(model.value,model.face)
    }
    update(data: object): void {
        console.log(data);
        //throw new Error("Method not implemented.");
        console.log('avant', this.model.face)
        this.model.face = !this.model.face
        console.log('apres', this.model.face)
        this.view.drawCase(this.model.value, this.model.face)
        // updateview
     }
} 
