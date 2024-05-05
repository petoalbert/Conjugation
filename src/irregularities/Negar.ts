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

export const negar: Irregularities = {
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
            [IndicativoIndefinido, new Map([
                [Usted, base + "e" + rest + "ué"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "ieue" + rest + "ue"],
                [Tu, base + "ie" + rest + "ues"],
                [Usted, base + "ie" + rest + "ue"],
                [Nosotros, base + "e" + rest + "uemos"],
                [Vosotros, base + "e" + rest + "uéis"],
                [Ustedes, base + "ie" + rest + "uen"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, base + "ie" + rest + "a"],
                [Usted, base + "ie" + rest + "ue"],
                [Nosotros, base + "u" + rest + "uemos"],
                [Ustedes, base + "ue" + rest + "uen"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, base + "ie" + rest + "ues"],
                [Usted, base + "ie" + rest + "ue"],
                [Nosotros, base + "e" + rest + "uemos"],
                [Vosotros, base + "e" + rest + "uéis"],
                [Ustedes, base + "ie" + rest + "uen"],
            ])]
        ])
    }
}
