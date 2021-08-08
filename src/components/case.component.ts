import { Case } from "../models/case.model.js"
import { CaseView } from "../views/case.view.js"
import {CaseController}from "../controllers/case.controller.js"
import {Component} from "../core/component.js"

export class CaseComponent extends Component{
    constructor( protected _caseModel : Case,protected _caseView: CaseView, protected _caseController: CaseController)
    {
        super(_caseModel,_caseView,_caseController)
    }
}