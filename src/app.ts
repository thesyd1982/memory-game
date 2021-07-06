
import {Case} from "./models/case.model.js"
import { CaseView } from "./views/case.view.js"
import { CaseController } from "./controllers/case.controller.js"
import {Plateau} from "./models/plateau.model.js"

let p = new Plateau(12,4)
console.log(p);

console.log(p.generateCouple("AS"))
console.log(p.generateTriple("AS"))
console.log(p.generateClones(10,"AS"))

let c = new Case('AD')
let vc = new CaseView(document.getElementById("plateau")as HTMLElement)


// let vp = new PlateauView(p)
let co = new CaseController(vc,c)

// vp. drawGrid()

// vp.update(new Plateau(9).cases)