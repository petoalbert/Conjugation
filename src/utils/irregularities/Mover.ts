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

export const mover: Irregularities = {
    forms: function (string) {
        let oIndex = string.lastIndexOf("o")

        let base = string.slice(0, oIndex)

        let rest = string.slice(oIndex + 1, -2) // drop er

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, base + "ue" + rest + "o"],
                [Tu, base + "ue" + rest + "es"],
                [Usted, base + "ue" + rest + "e"],
                [Ustedes, base + "ue" + rest + "en"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "ue" + rest + "a"],
                [Tu, base + "ue" + rest + "as"],
                [Usted, base + "ue" + rest + "a"],
                [Ustedes, base + "ue" + rest + "an"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, base + "ue" + rest + "e"],
                [Usted, base + "ue" + rest + "a"],
                [Ustedes, base + "ue" + rest + "an"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, base + "ue" + rest + "as"],
                [Usted, base + "ue" + rest + "a"],
                [Ustedes, base + "ue" + rest + "an"]
            ])]
        ])
    }
}
