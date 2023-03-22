export class JuegoDeCasino{
    nombre: string;
    precioDeFicha:number;
    turno:boolean;
    premioMax: number;
    premioMin: number;

    constructor(nombre:string,precioDeFicha:number,turno:boolean,premioMax: number, premioMin: number,){
        this.nombre = nombre;
        this.precioDeFicha = precioDeFicha;
        this.turno=turno;
        this.premioMax=premioMax;
        this.premioMin=premioMin;
    }
    info():JuegoDeCasino{
        return this;
    }
    defaultScreen():void{
        console.log(`Estas por jugar ${this.nombre}. Inserte una ficha.`);
    }
    isFree():void{
        if(this.turno === false){
            this.turno=true;
            console.log(`La maquina esta ocupada.`)
        } else {
            console.log(`La maquina esta libre.`);
        }
    }
   /*  insertarFicha(precioDeFicha:number){
        if(precioDeFicha){
            console.log(`> Play`)
        } else{
            console.log(`La cantidad de fichas es incorrecta. Intente de nuevo.`)
        }
    } */

}