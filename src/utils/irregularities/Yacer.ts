import { Pronoun } from "../Pronoun"
import { Tense } from "../Tense"
import { Irregularities } from "./Irregularity"

const { Yo, Tu, Usted, Nosotros, Vosotros, Ustedes } = Pronoun
const {
    IndicativoPresente,
    SubjuntivoPresente,
    ImperativoAfirmativo,
    ImperativoNegativo,
    IndicativoIndefinido,
    IndicativoFuturoImperfecto,
    IndicativoCondicional
} = Tense

export const yacer: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -5) // yacer

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, [base + "yazco"]],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, [base + "yazca"]],
                [Tu, [base + "yazcas"]],
                [Usted, [base + "yazca"]],
                [Nosotros, [base + "yazcamos"]],
                [Vosotros, [base + "yazcáis"]],
                [Ustedes, [base + "yazcan"]],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, [base + "yaz"]],
                [Usted, [base + "yazca"]],
                [Nosotros, [base + "yazcamos"]],
                [Ustedes, [base + "yazcan"]],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, [base + "yazcas"]],
                [Usted, [base + "yazca"]],
                [Nosotros, [base + "yazcamos"]],
                [Vosotros, [base + "yazcáis"]],
                [Ustedes, [base + "yazcan"]],

            ])]
        ])
    }
}
