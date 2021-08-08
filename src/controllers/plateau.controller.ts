import { Controller } from "../core/controller.js";
import { Plateau } from "../models/plateau.model.js";
import { PlateauView } from "../views/plateau.view.js";

export class PlateauController extends Controller{
    constructor( protected view:PlateauView,  protected model:Plateau){
        super(view,model)
        
    }
    update(data: object): void {
       
        //throw new Error("Method not implemented.");
       
        // updateview
     }
} 
