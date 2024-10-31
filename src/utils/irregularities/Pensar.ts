import { Pronoun } from "../Pronoun"
import { Tense } from "../Tense"
import { Irregularities } from "./Irregularity"

const { Yo, Tu, Usted, Nosotros, Vosotros, Ustedes } = Pronoun
const {
    IndicativoPresente,
    SubjuntivoPresente,
    ImperativoAfirmativo,
    ImperativoNegativo,
    IndicativoIndefinido
} = Tense

export const pensar: Irregularities = {
    forms: function (string) {
        let oIndex = string.lastIndexOf("e")

        let base = string.slice(0, oIndex)

        let rest = string.slice(oIndex + 1, -2) // drop ar

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, base + "ie" + rest + "o"],
                [Tu, base + "ie" + rest + "as"],
                [Usted, base + "ie" + rest + "a"],
                [Ustedes, base + "ie" + rest + "an"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "ie" + rest + "e"],
                [Tu, base + "ie" + rest + "es"],
                [Usted, base + "ie" + rest + "e"],
                [Ustedes, base + "ie" + rest + "en"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, base + "ie" + rest + "a"],
                [Usted, base + "ie" + rest + "e"],
                [Ustedes, base + "ie" + rest + "en"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, base + "ie" + rest + "es"],
                [Usted, base + "ie" + rest + "e"],
                [Ustedes, base + "ie" + rest + "en"],
            ])]
        ])
    }
}
