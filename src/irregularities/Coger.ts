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

export const coger: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -3) // ger

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, base + "jo"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "ja"],
                [Tu, base + "jas"],
                [Usted, base + "ja"],
                [Nosotros, base + "jamos"],
                [Vosotros, base + "jáis"],
                [Ustedes, base + "jan"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Usted, base + "ja"],
                [Nosotros, base + "jamos"],
                [Ustedes, base + "jan"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, "no" + base + "jas"],
                [Usted, "no" + base + "ja"],
                [Nosotros, "no" + base + "jamos"],
                [Vosotros, "no" + base + "jáis"],
                [Ustedes, "no " + base + "jan"]
            ])]
        ])
    }
}
