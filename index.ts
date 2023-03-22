//Crear una superclase JuegoDeCasino.
//Crear dos clases que hereden de ella (pueden ser juegos puntuales, craps, tragamonedas, ruleta, BlackJack, etc…)
//Luego, aplicar composición entre una clase Casino y las dos clases hijas de JuegodeCasino.

import { JuegoDeCasino } from "./juegoDeCasino";
import { TragaMonedas } from "./tragaMonedas";
import { Casino } from "./casino";
import { BlackJack } from "./blackjack";

let blackjack=new BlackJack('Blackjack',10,false,21,0);
let tragM: TragaMonedas = new TragaMonedas('Tragamonedas',10,false,50,0);
let casino1 =new Casino('El Casino',blackjack,tragM);
//console.log(casino1);
/* console.log(tragM.info());
tragM.isFree();
tragM.isFree();
console.log(tragM.info());
tragM.defaultScreen(); */
//tragM.playAlt(2); //Off
tragM.play(20);
