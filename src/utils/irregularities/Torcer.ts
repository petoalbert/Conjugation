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

export const torcer: Irregularities = {
    forms: function (string) {
        let oIndex = string.lastIndexOf("o")

        let base = string.slice(0, oIndex)

        let rest = string.slice(oIndex + 1, -3) // drop cer

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, [base + "ue" + rest + "zo"]],
                [Tu, [base + "ue" + rest + "ces"]],
                [Usted, [base + "ue" + rest + "ce"]],
                [Ustedes, [base + "ue" + rest + "cen"]],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, [base + "ue" + rest + "za"]],
                [Tu, [base + "ue" + rest + "zas"]],
                [Usted, [base + "ue" + rest + "za"]],
                [Nosotros, [base + "o" + rest + "zamos"]],
                [Vosotros, [base + "o" + rest + "záis"]],
                [Ustedes, [base + "ue" + rest + "zan"]],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, [base + "ue" + rest + "ce"]],
                [Usted, [base + "ue" + rest + "za"]],
                [Nosotros, [base + "o" + rest + "zamos"]],
                [Ustedes, [base + "ue" + rest + "zan"]],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, [base + "ue" + rest + "zas"]],
                [Usted, [base + "ue" + rest + "za"]],
                [Nosotros, [base + "o" + rest + "zamos"]],
                [Vosotros, [base + "o" + rest + "záis"]],
                [Ustedes, [base + "ue" + rest + "zan"]],
            ])]
        ])
    }
}
