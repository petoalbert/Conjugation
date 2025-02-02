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

export const zurcir: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -3) // cir

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, [base + "zo"]],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, [base + "za"]],
                [Tu, [base + "zas"]],
                [Usted, [base + "za"]],
                [Nosotros, [base + "zamos"]],
                [Vosotros, [base + "záis"]],
                [Ustedes, [base + "zan"]],
            ])],
            [ImperativoAfirmativo, new Map([
                [Usted, [base + "za"]],
                [Nosotros, [base + "zamos"]],
                [Ustedes, [base + "zan"]],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, [base + "zas"]],
                [Usted, [base + "za"]],
                [Nosotros, [base + "zamos"]],
                [Vosotros, [base + "záis"]],
                [Ustedes, [base + "zan"]],
            ])]
        ])
    }
}
