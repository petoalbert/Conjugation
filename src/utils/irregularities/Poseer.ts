import { Pronoun } from "../Pronoun"
import { Tense } from "../Tense"
import { Irregularities } from "./Irregularity"

const { Yo, Tu, Usted, Nosotros, Vosotros, Ustedes } = Pronoun
const {
    IndicativoIndefinido,
    SubjuntivoImperfecto
} = Tense

export const poseer: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -2) // er

        return new Map([
            [IndicativoIndefinido, new Map([
                [Tu, [base + "íste"]],
                [Usted, [base + "yó"]],
                [Nosotros, [base + "ímos"]],
                [Vosotros, [base + "ísteis"]],
                [Ustedes, [base + "yeron"]],
            ])],
            [SubjuntivoImperfecto, new Map([
                [Yo, [base + "yera", base + "yese"]],
                [Tu, [base + "yeras", base + "yeses"]],
                [Usted, [base + "yera", base + "yese"]],
                [Nosotros, [base + "yéramos", base + "yésemos"]],
                [Vosotros, [base + "yerais", base + "yeseis"]],
                [Ustedes, [base + "yeran", base + "yesen"]],
            ])]
        ])
    }
}
