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
    IndicativoImperfecto,
    IndicativoFuturoImperfecto,
    IndicativoCondicional
} = Tense

export const oler: Irregularities = {
    forms: function (string) {
        return new Map([
            [IndicativoPresente, new Map([
                [Yo, "huelo"],
                [Tu, "hueles"],
                [Usted, "huele"],
                [Ustedes, "huelen"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, "huela"],
                [Tu, "huelas"],
                [Usted, "huela"],
                [Ustedes, "huelan"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, "huele"],
                [Usted, "huela"],
                [Ustedes, "huelan"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, "huelas"],
                [Usted, "huela"],
                [Ustedes, "huelan"]
            ])]
        ])
    }
}
