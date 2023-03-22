import { BlackJack } from "./blackjack";
import { JuegoDeCasino } from "./juegoDeCasino";
import { TragaMonedas } from "./tragaMonedas";
export class Casino {
    nombre: string;
    blackjack: BlackJack;
    tragamoneda: TragaMonedas;
    constructor(nombre: string, blackjack: BlackJack, tragamoneda: TragaMonedas) {
        this.nombre = nombre;
        this.blackjack = blackjack;
        this.tragamoneda = tragamoneda;
    }
}
//Herencia: trae caracteristicas, padre a hijo
//Composcion: Clase creada de otras mas pequeñas