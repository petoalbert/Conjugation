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

export const distinguir: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -4) // guir

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, base + "go"]
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "ga"],
                [Tu, base + "gas"],
                [Usted, base + "ga"],
                [Nosotros, base + "gamos"],
                [Vosotros, base + "gáis"],
                [Ustedes, base + "gan"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Usted, base + "ga"],
                [Nosotros, base + "gamos"],
                [Ustedes, base + "gan"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, base + "gas"],
                [Usted, base + "ga"],
                [Nosotros, base + "gamos"],
                [Vosotros, base + "gáis"],
                [Ustedes, base + "gan"]
            ])]
        ])
    }
}
