import { Plateau } from "../models/plateau.model.js"
import { PlateauView } from "../views/plateau.view.js"
import {PlateauController}from "../controllers/plateau.controller.js"
import {Component} from "../core/component.js"

export class PlateauComponent extends Component{
    constructor(protected _plateauModel : Plateau,protected _plateauView: PlateauView, protected _plateauController: PlateauController)
    {
        super(_plateauModel,_plateauView,_plateauController)
        this.draw()
    }

    draw(){}
}