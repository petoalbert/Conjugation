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

export const contar: Irregularities = {
    forms: function (string) {
        let oIndex = string.lastIndexOf("o")

        let base = string.slice(0, oIndex)

        let rest = string.slice(oIndex + 1, -2) // drop ar

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, [base + "ue" + rest + "o"]],
                [Tu, [base + "ue" + rest + "as"]],
                [Usted, [base + "ue" + rest + "a"]],
                [Ustedes, [base + "ue" + rest + "an"]],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, [base + "ue" + rest + "e"]],
                [Tu, [base + "ue" + rest + "es"]],
                [Usted, [base + "ue" + rest + "e"]],
                [Ustedes, [base + "ue" + rest + "en"]],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, [base + "ue" + rest + "a"]],
                [Usted, [base + "ue" + rest + "e"]],
                [Ustedes, [base + "ue" + rest + "en"]],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, [base + "ue" + rest + "es"]],
                [Usted, [base + "ue" + rest + "e"]],
                [Ustedes, [base + "ue" + rest + "en"]]
            ])]
        ])
    }
}
