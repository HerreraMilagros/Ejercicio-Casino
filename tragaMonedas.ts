import { JuegoDeCasino } from "./juegoDeCasino";

export class TragaMonedas extends JuegoDeCasino {
    nombre: string;
    precioDeFicha: number;

    constructor(nombre: string, precioDeFicha: number, turno: boolean, premioMax: number, premioMin: number) {
        super(nombre, precioDeFicha, turno, premioMax, premioMin);
        this.nombre = nombre;
        this.precioDeFicha = precioDeFicha;
    }

    //v0.1 opcional
    /*  private getRandom() {
         let min = Math.ceil(this.premioMin);
         let max = Math.floor(this.premioMax);
         return Math.floor(Math.random() * (max - min) + min);
     } */
    private getRandom() {
        return Math.floor(Math.random() * (this.premioMax - this.premioMin));
    }

    //opcional
    /*  play(): number {
         console.log(`...`);
         let premio = this.getRandom();
         console.log(`Has ganado ${premio} fichas.`);
         return premio;
     } */ 

    play(insertFicha: number): number {
        console.log(`...`);
        let subPremio = this.getRandom();
        let premio = insertFicha * subPremio;
        console.log(`Has ganado ${premio} fichas.`);
        return premio;
    }
    ///Validacion Shmalidacion: No funciona
    /*   playAlt(precioDeFicha:number):any{
          console.log(`...`);
          if (!this.precioDeFicha) {
              return `La cantidad de fichas es incorrecta. Intente de nuevo.`
          } else {
              console.log(`> Play`)
              let premio = this.getRandomInt();
              console.log(`Has ganado ${premio} fichas.`)
              return premio;
          }
      }*/

}