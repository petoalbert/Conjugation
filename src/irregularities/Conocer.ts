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

export const conocer: Irregularity = {
    forms: function (string) {
        let base = string.slice(0, -3) // cer

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, base + "zco"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "zca"],
                [Tu, base + "zcas"],
                [Usted, base + "zca"],
                [Nosotros, base + "zcamos"],
                [Vosotros, base + "zcáis"],
                [Ustedes, base + "zcan"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Usted, base + "zca"],
                [Nosotros, base + "zcamos"],
                [Ustedes, base + "zcan"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, "no" + base + "zcas"],
                [Usted, "no" + base + "zca"],
                [Nosotros, "no" + base + "zcamos"],
                [Vosotros, "no" + base + "zcáis"],
                [Ustedes, "no " + base + "zcan"]
            ])]
        ])
    }
}
