import { Line } from "../models/line.model.js"
import { LineView } from "../views/line.view.js"
import {LineController}from "../controllers/line.controller.js"
import {Component} from "../core/component.js"

export class LineComponent extends Component{
    constructor(protected _lineModel : Line,protected _lineView: LineView, protected _lineController: LineController)
    {
        super(_lineModel,_lineView,_lineController)
    }
}
