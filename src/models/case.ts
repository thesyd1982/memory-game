import { Model } from "../core/model.js";

export class Case extends Model {
    
    constructor(protected _value:string , protected _face:boolean =false ){

        super()
    }
    get face (){
        return this._face
    }
    set face (f){
        this._face =f
    }

    get value (){
        return this._value
    }
    set value (v){
        this._value =v
    }

    toggle(){
        this._face =!this._face
    }
}  