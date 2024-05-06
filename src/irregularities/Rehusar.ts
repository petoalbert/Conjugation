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

export const rehusar: Irregularities = {
    forms: function (string) {
        let oIndex = string.lastIndexOf("u")

        let base = string.slice(0, oIndex)

        let rest = string.slice(oIndex + 1, -2) // drop ar

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, base + "ú" + rest + "a"],
                [Tu, base + "ú" + rest + "as"],
                [Usted, base + "ú" + rest + "a"],
                [Ustedes, base + "ú" + rest + "an"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "ú" + rest + "e"],
                [Tu, base + "ú" + rest + "es"],
                [Usted, base + "ú" + rest + "e"],
                [Ustedes, base + "ú" + rest + "en"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, base + "ú" + rest + "a"],
                [Usted, base + "ú" + rest + "e"],
                [Ustedes, base + "ú" + rest + "en"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, base + "ú" + rest + "es"],
                [Usted, base + "ú" + rest + "e"],
                [Ustedes, base + "ú" + rest + "en"],
            ])]
        ])
    }
}
