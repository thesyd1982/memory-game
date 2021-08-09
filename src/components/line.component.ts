import { Line } from "../models/line.model.js"
import { LineView } from "../views/line.view.js"
import {LineController}from "../controllers/line.controller.js"

import { Composit } from '../core/composit';

export class LineComponent extends Composit{
    constructor(protected _lineModel : Line,protected _lineView: LineView, protected _lineController: LineController)
    {
        super(_lineModel,_lineView,_lineController)
    }
}
