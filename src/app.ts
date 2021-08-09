
import {Case} from "./models/case.model.js"
import { CaseView } from "./views/case.view.js"
import { CaseController } from "./controllers/case.controller.js"
import {Plateau} from "./models/plateau.model.js"
import { LineView } from "./views/line.view.js"
import { Line } from "./models/line.model.js"
import { CaseComponent } from './components/case.component.js';

let p = new Plateau(12,4)


let c = new Case('king_heart')

let vc = new CaseView( document.createElement('img') , document.getElementById("plateau")as HTMLDivElement)
let co = new CaseController(vc,c)

 let caseComponent = new CaseComponent(c,vc,co)



 console.log(caseComponent)

 // let l = new Line();
// l.init(10);
// let lv = new LineView(document.getElementById("plateau")as HTMLDivElement)
// lv.drawLine(l.cases)
//let plateau = new Plateau();
//plateau.init()
//console.log( l )