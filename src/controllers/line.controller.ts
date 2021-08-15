import { Controller } from "../core/controller.js";
import { Line } from "../models/line.model.js";
import { LineView } from "../views/line.view.js";

export class LineController extends Controller{
    constructor(   protected model:Line,protected view:LineView){
        super(model,view)
       
    }
    update(data: object): void {
       
        //throw new Error("Method not implemented.");
       
        // updateview
     }
} 
