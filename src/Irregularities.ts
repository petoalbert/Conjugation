import { Pronoun } from "./Pronoun";
import { Tense } from "./Tense";
import { actuar } from "./irregularities/Actuar";
import { adquirir } from "./irregularities/Adquirir";
import { agradecer } from "./irregularities/Agradecer";
import { almorzar } from "./irregularities/Almorzar";
import { andar } from "./irregularities/Andar";
import { arguir } from "./irregularities/Arguir";
import { atacar } from "./irregularities/Atacar";
import { avergonzar } from "./irregularities/Avergonzar";
import { averiguar } from "./irregularities/Averiguar";
import { caber } from "./irregularities/Caber";
import { caer } from "./irregularities/Caer";
import { coger } from "./irregularities/Coger";
import { conducir } from "./irregularities/Conducir";
import { confiar } from "./irregularities/Confiar";
import { conocer } from "./irregularities/Conocer";
import { construir } from "./irregularities/Construir";
import { contar } from "./irregularities/Contar";
import { cruzar } from "./irregularities/Cruzar";
import { dar } from "./irregularities/Dar";
import { Irregularity } from "./irregularities/Irregularity";

let irregularities = new Map<string, Irregularity>([
    ["actuar"            ,  actuar],
    ["acentuar"          ,  actuar],
    ["anticuar"          ,  actuar],
    ["atenuar"           ,  actuar],
    ["conceptuar"        ,  actuar],
    ["consensuar"        ,  actuar],
    ["continuar"         ,  actuar],
    ["desconceptuar"     ,  actuar],
    ["deshabituar"       ,  actuar],
    ["desvirtuar"        ,  actuar],
    ["devaluar"          ,  actuar],
    ["efectuar"          ,  actuar],
    ["evaluar"           ,  actuar],
    ["exceptuar"         ,  actuar],
    ["extenuar"          ,  actuar],
    ["fluctuar"          ,  actuar],
    ["graduar"           ,  actuar],
    ["habituar"          ,  actuar],
    ["insinuar"          ,  actuar],
    ["interactuar"       ,  actuar],
    ["menstruar"         ,  actuar],
    ["perpetuar"         ,  actuar],
    ["puntuar"           ,  actuar],
    ["redituar"          ,  actuar],
    ["reevaluar"         ,  actuar],
    ["revaluar"          ,  actuar],
    ["situar"            ,  actuar],
    ["tatuar"            ,  actuar],
    ["valuar"            ,  actuar],
]);

export function conjugateIrregular(verb: string, tense: Tense, pronoun: Pronoun): string | undefined {
    return irregularities.get(verb)?.forms(verb)?.get(tense)?.get(pronoun)
}
