import { JuegoDeCasino } from "./juegoDeCasino";

export class BlackJack extends JuegoDeCasino{
    nombre:string;
    precioDeFicha:number;

    constructor(nombre:string,precioDeFicha:number,turno:boolean,premioMax: number, premioMin: number){
        super(nombre,precioDeFicha,turno,premioMax, premioMin);
        this.nombre=nombre;
        this.precioDeFicha=precioDeFicha;
    }
    
}