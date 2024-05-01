import { Pronoun } from "../Pronoun"
import { Tense } from "../Tense"
import { Irregularity } from "./Irregularity"

const { Yo, Tu, Usted, Nosotros, Vosotros, Ustedes } = Pronoun
const {
    IndicativoPresente,
    IndicativoImperfecto,
    IndicativoIndefinido,
    IndicativoFuturoImperfecto,
    IndicativoCondicional,
    SubjuntivoPresente,
    ImperativoAfirmativo,
    ImperativoNegativo
} = Tense

export const actuar: Irregularity = {
    forms: function (string) {
        let base = string.slice(0, -3) // uar

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, base + "úo"],
                [Tu, base + "úas"],
                [Usted, base + "úa"],
                [Ustedes, base + "úan"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "úe"],
                [Tu, base + "úes"],
                [Usted, base + "úe"],
                [Ustedes, base + "úen"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, base + "úa"],
                [Usted, base + "úe"],
                [Ustedes, base + "úen"]  
            ])],
            [ImperativoNegativo, new Map([
                [Tu, "no" + base + "úes"],
                [Usted, "no" + base + "úe"],
                [Ustedes, "no " + base + "úen"]    
            ])]
        ])
    }
}