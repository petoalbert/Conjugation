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

export const rogar: Irregularities = {
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
            [IndicativoIndefinido, new Map([
                [Yo, [base + "o" + rest + "ué"]],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, [base + "ue" + rest + "ue"]],
                [Tu, [base + "ue" + rest + "ues"]],
                [Usted, [base + "ue" + rest + "ue"]],
                [Nosotros, [base + "o" + rest + "uemos"]],
                [Vosotros, [base + "o" + rest + "uéis"]],
                [Ustedes, [base + "ue" + rest + "uen"]],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, [base + "ue" + rest + "a"]],
                [Usted, [base + "ue" + rest + "ue"]],
                [Nosotros, [base + "o" + rest + "uemos"]],
                [Ustedes, [base + "ue" + rest + "uen"]],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, [base + "ue" + rest + "ues"]],
                [Usted, [base + "ue" + rest + "ue"]],
                [Nosotros, [base + "o" + rest + "uemos"]],
                [Vosotros, [base + "o" + rest + "uéis"]],
                [Ustedes, [base + "ue" + rest + "uen"]],
            ])]
        ])
    }
}
