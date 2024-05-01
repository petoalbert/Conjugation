import { Pronoun } from "../Pronoun"
import { Tense } from "../Tense"
import { Irregularities } from "./Irregularity"

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

export const conducir: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -3) // cir

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, base + "zco"],
            ])],
            [IndicativoIndefinido, new Map([
                [Yo, base + "je"],
                [Tu, base + "jiste"],
                [Usted, base + "jo"],
                [Nosotros, base + "jimos"],
                [Vosotros, base + "jisteis"],
                [Ustedes, base + "jeron"],
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
