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

export const prohibir: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -5) // hibir

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, [base + "híbo"]],
                [Tu, [base + "híbes"]],
                [Usted, [base + "híbe"]],
                [Ustedes, [base + "híben"]],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, [base + "híba"]],
                [Tu, [base + "híbas"]],
                [Usted, [base + "híba"]],
                [Ustedes, [base + "híban"]],
            ])],
            [SubjuntivoPresente, new Map([
                [Tu, [base + "híbe"]],
                [Usted, [base + "híba"]],
                [Ustedes, [base + "híban"]],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, [base + "híbas"]],
                [Usted, [base + "híba"]],
                [Ustedes, [base + "híban"]],
            ])]
        ])
    }
}
