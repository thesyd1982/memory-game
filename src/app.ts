
import {Case} from "./models/case.model.js"
import { CaseView } from "./views/case.view.js"
import { CaseController } from "./controllers/case.controller.js"
import {Plateau} from "./models/plateau.model.js"

let p = new Plateau(12,4)


let c = new Case('king_heart')
let vc = new CaseView(document.getElementById("plateau")as HTMLElement)
let co = new CaseController(vc,c)
