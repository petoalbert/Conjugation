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

export const pagar: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -3) // gar

        return new Map([
            [IndicativoIndefinido, new Map([
                [Yo, base + "gué"]
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "gue"],
                [Tu, base + "gues"],
                [Usted, base + "gue"],
                [Nosotros, base + "guemos"],
                [Vosotros, base + "guéis"],
                [Ustedes, base + "guen"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Usted, base + "gue"],
                [Nosotros, base + "guemos"],
                [Ustedes, base + "guen"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, base + "gues"],
                [Usted, base + "gue"],
                [Nosotros, base + "guemos"],
                [Vosotros, base + "guéis"],
                [Ustedes, base + "guen"],
            ])]
        ])
    }
}
