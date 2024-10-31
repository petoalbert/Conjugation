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

export const discernir: Irregularities = {
    forms: function (string) {
        let oIndex = string.lastIndexOf("e")

        let base = string.slice(0, oIndex)

        let rest = string.slice(oIndex + 1, -2) // drop ir

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, base + "ie" + rest + "o"],
                [Tu, base + "ie" + rest + "es"],
                [Usted, base + "ie" + rest + "e"],
                [Ustedes, base + "ie" + rest + "en"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "ie" + rest + "a"],
                [Tu, base + "ie" + rest + "as"],
                [Usted, base + "ie" + rest + "a"],
                [Ustedes, base + "ie" + rest + "an"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, base + "ie" + rest + "e"],
                [Usted, base + "ie" + rest + "a"],
                [Ustedes, base + "ie" + rest + "an"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, base + "ie" + rest + "as"],
                [Usted, base + "ie" + rest + "a"],
                [Ustedes, base + "ie" + rest + "an"]
            ])]
        ])
    }
}
