import { Controller } from "../core/controller.js";
import { Plateau } from "../models/plateau.model.js";
import { PlateauView } from "../views/plateau.view.js";

export class PlateauController extends Controller{
    constructor(   protected model:Plateau ,protected view:PlateauView){
        super(model ,view)
        
    }
    update(data: object): void {
       
        //throw new Error("Method not implemented.");
       
        // updateview
     }
} 
