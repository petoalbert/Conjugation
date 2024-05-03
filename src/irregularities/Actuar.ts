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

export const actuar: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -3) // uar

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, base + "úo"],
                [Tu, base + "úas"],
                [Usted, base + "úa"],
                [Ustedes, base + "úan"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "úe"],
                [Tu, base + "úes"],
                [Usted, base + "úe"],
                [Ustedes, base + "úen"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, base + "úa"],
                [Usted, base + "úe"],
                [Ustedes, base + "úen"]
            ])],
            [ImperativoNegativo, new Map([
                [Tu, base + "úes"],
                [Usted, base + "úe"],
                [Ustedes, base + "úen"]
            ])]
        ])
    }
}
