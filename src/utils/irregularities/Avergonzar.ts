import { Pronoun } from "../Pronoun"
import { Tense } from "../Tense"
import { Irregularities } from "./Irregularity"

const { Yo, Tu, Usted, Nosotros, Vosotros, Ustedes } = Pronoun
const {
    IndicativoPresente,
    IndicativoIndefinido,
    SubjuntivoPresente,
    ImperativoAfirmativo,
    ImperativoNegativo
} = Tense

export const avergonzar: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -6) // gonzar

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, [base + "güenzo"]],
                [Tu, [base + "güenzas"]],
                [Usted, [base + "güenza"]],
                [Ustedes, [base + "güenzan"]],
            ])],
            [IndicativoIndefinido, new Map([
                [Yo, [base + "goncé"]],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, [base + "güence"]],
                [Tu, [base + "güences"]],
                [Usted, [base + "güence"]],
                [Nosotros, [base + "güencemos"]],
                [Vosotros, [base + "güencéis"]],
                [Ustedes, [base + "güencen"]],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, [base + "güenza"]],
                [Usted, [base + "güence"]],
                [Nosotros, [base + "güencemos"]],
                [Ustedes, [base + "güencen"]],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, [base + "güences"]],
                [Usted, [base + "güence"]],
                [Nosotros, [base + "güencemos"]],
                [Vosotros, [base + "güencéis"]],
                [Ustedes, [base + "güencen"]]
            ])]
        ])
    }
}
