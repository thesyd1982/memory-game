
import {Case} from "./models/case.model.js"
import { CaseView } from "./views/case.view.js"
import { CaseController } from "./controllers/case.controller.js"
import {Plateau} from "./models/plateau.model.js"
import { LineView } from "./views/line.view.js"
import { Line } from "./models/line.model.js"
import { CaseComponent } from './components/case.component.js';
import { LineComponent } from "./components/line.component.js"
import { LineController } from "./controllers/line.controller.js"

let p =  Plateau.init(8,3)

console.log(p)








 //console.log(caseComponent)

 let l = new Line();//  Line.init(10);

 let lv = new LineView(document.getElementById("plateau")as HTMLDivElement)
 let lc = new LineController(l,lv)
 let lineComponent = new LineComponent(l, lv,lc)
 
 


 let c = new Case('Qh')
 let vc = new CaseView( document.getElementById("line")as HTMLDivElement)
 let co = new CaseController(c,vc)
 let caseComponent = new CaseComponent(c,vc,co)
 
 let c1 = new Case('Ad')
 let vc1 = new CaseView( document.getElementById("line")as HTMLDivElement)
 let co1 = new CaseController(c1,vc1)


 let caseComponent1 = new CaseComponent(c1,vc1,co1)

  
 let c2 = new Case('As')
 let vc2 = new CaseView( document.getElementById("line")as HTMLDivElement)
 let co2 = new CaseController(c2,vc2)


 let caseComponent2 = new CaseComponent(c2,vc2,co2)    



 
 lineComponent.add(caseComponent)
 lineComponent.add(caseComponent1)
 lineComponent.add(caseComponent2)
 

console.log(lineComponent)

 lineComponent.draw()
 //let plateau = new Plateau();
//plateau.init()
//console.log( l )