import { Plateau } from "../models/plateau.model.js"
import { PlateauView } from "../views/plateau.view.js"
import {PlateauController}from "../controllers/plateau.controller.js"
import { Composit } from "../core/composit.js"

export class PlateauComponent extends Composit{
    constructor(protected _plateauModel : Plateau,protected _plateauView: PlateauView, protected _plateauController: PlateauController)
    {
        super(_plateauModel,_plateauView,_plateauController)
        //this.draw()
    }

    draw =()=> this._components.forEach(c =>c.draw())
        
    
}