import { Pronoun } from "../Pronoun"
import { Tense } from "../Tense"
import { Irregularities } from "./Irregularity"

const { Yo, Tu, Usted, Ustedes } = Pronoun
const {
    IndicativoPresente,
    SubjuntivoPresente,
    ImperativoAfirmativo,
    ImperativoNegativo
} = Tense

export const confiar: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -3) // iar

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, base + "ío"],
                [Tu, base + "ías"],
                [Usted, base + "ía"],
                [Ustedes, base + "ían"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "íe"],
                [Tu, base + "íes"],
                [Usted, base + "íe"],
                [Ustedes, base + "íen"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, base + "ía"],
                [Usted, base + "íe"],
                [Ustedes, base + "íen"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, base + "íes"],
                [Usted, base + "íe"],
                [Ustedes, base + "íen"]
            ])]
        ])
    }
}
