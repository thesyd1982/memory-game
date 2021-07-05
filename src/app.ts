//import {Plateau} from "./models/plateau.js"
import {Case} from "./models/case.js"
//import { PlateauView } from "./views/plateauView.js"
import { CaseView } from "./views/caseView.js"
import { Controller } from "./core/controller.js"
import { CaseController } from "./controllers/caseController.js"


// let p = new Plateau(6)

let c = new Case('./img/back.png')
let vc = new CaseView(document.getElementById("plateau")as HTMLElement)


// let vp = new PlateauView(p)
let co = new CaseController(vc,c)

// vp. drawGrid()

// vp.update(new Plateau(9).cases)