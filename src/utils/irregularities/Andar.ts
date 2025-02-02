import { Pronoun } from "../Pronoun"
import { Tense } from "../Tense"
import { Irregularities } from "./Irregularity"

const { Yo, Tu, Usted, Nosotros, Vosotros, Ustedes } = Pronoun
const { IndicativoIndefinido, SubjuntivoImperfecto } = Tense

export const andar: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -2) // ar

        return new Map([
            [IndicativoIndefinido, new Map([
                [Yo, [base + "uve"]],
                [Tu, [base + "uviste"]],
                [Usted, [base + "uvo"]],
                [Nosotros, [base + "uvimos"]],
                [Vosotros, [base + "uvisteis"]],
                [Ustedes, [base + "uvieron"]]
            ])],
            [SubjuntivoImperfecto, new Map([
                [Yo, [base + "uviera", base + "uviese"]],
                [Tu, [base + "uvieras", base + "uvieses"]],
                [Usted, [base + "uviera", base + "uviese"]],
                [Nosotros, [base + "uviéramos", base + "uviésemos"]],
                [Vosotros, [base + "uvierais", base + "uvieseis"]],
                [Ustedes, [base + "uvieran", base + "uviesen"]]
            ])]
        ])
    }
}
