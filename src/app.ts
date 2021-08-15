
import {Case} from "./models/case.model.js"
import { CaseView } from "./views/case.view.js"
import { CaseController } from "./controllers/case.controller.js"
import {Plateau} from "./models/plateau.model.js"
import { LineView } from "./views/line.view.js"
import { Line } from "./models/line.model.js"
import { CaseComponent } from './components/case.component.js';
import { LineComponent } from "./components/line.component.js"
import { LineController } from "./controllers/line.controller.js"
import { PlateauView } from './views/plateau.view.js';
import { PlateauController } from "./controllers/plateau.controller.js"
import { PlateauComponent } from './components/plateau.component.js';


let mp =  new Plateau()

let vp = new PlateauView(document.getElementById('root') as HTMLDivElement)
let pc = new PlateauController(mp,vp)

let plateauComponent = new PlateauComponent(mp,vp,pc)

 //console.log(caseComponent)

 let l = new Line();//  Line.init(10);
 let lv = new LineView(document.getElementById("plateau")as HTMLDivElement)
 let lc = new LineController(l,lv)
 
 let lineComponent = new LineComponent(l, lv,lc)
 
 let c = new Case('Qh')
 let vc = new CaseView( document.getElementById("line_0")as HTMLDivElement)
 let co = new CaseController(c,vc)
 
 let caseComponent = new CaseComponent(c,vc,co)
 
 let c1 = new Case('Ad')
 let vc1 = new CaseView( document.getElementById("line_0")as HTMLDivElement)
 let co1 = new CaseController(c1,vc1)
 
 let caseComponent1 = new CaseComponent(c1,vc1,co1)

  
 let c2 = new Case('As')
 let vc2 = new CaseView( document.getElementById("line_0")as HTMLDivElement)
 let co2 = new CaseController(c2,vc2)
 
 let caseComponent2 = new CaseComponent(c2,vc2,co2)    

lineComponent.add(caseComponent)
lineComponent.add(caseComponent1)
lineComponent.add(caseComponent2)
 
 let l1 = new Line();//  Line.init(10);

 let l1v = new LineView(document.getElementById("plateau")as HTMLDivElement)
 let l1c = new LineController(l1,l1v)
 let lineComponent1 = new LineComponent(l1, l1v,l1c)
 
 let c01 = new Case('Qh')
 let vc01 = new CaseView( document.getElementById("line_1")as HTMLDivElement)
 let co01 = new CaseController(c01,vc01)
 
 let caseComponent01 = new CaseComponent(c01,vc01,co01)
 
 let c11 = new Case('Ad')
 let vc11 = new CaseView( document.getElementById("line_1")as HTMLDivElement)
 let co11 = new CaseController(c11,vc11)
 
 let caseComponent11 = new CaseComponent(c11,vc11,co11)

  
 let c21 = new Case('As')
 let vc21 = new CaseView( document.getElementById("line_1")as HTMLDivElement)
 let co21 = new CaseController(c21,vc21)
 
 let caseComponent21 = new CaseComponent(c21,vc21,co21) 
 







 lineComponent1.add(caseComponent01)
 lineComponent1.add(caseComponent11)
 lineComponent1.add(caseComponent21)



 plateauComponent.add(lineComponent)
 
 plateauComponent.add(lineComponent1)

 console.log(plateauComponent)

 plateauComponent.draw()

 //let plateau = new Plateau();
//plateau.init()
//console.log( l )