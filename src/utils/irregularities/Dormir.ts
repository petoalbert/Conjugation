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
    SubjuntivoImperfecto
} = Tense

export const dormir: Irregularities = {
    forms: function (string) {
        let oIndex = string.lastIndexOf("o")

        let base = string.slice(0, oIndex)

        let rest = string.slice(oIndex + 1, -2) // drop ir

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, [base + "ue" + rest + "o"]],
                [Tu, [base + "ue" + rest + "es"]],
                [Usted, [base + "ue" + rest + "e"]],
                [Ustedes, [base + "ue" + rest + "en"]],
            ])],
            [IndicativoIndefinido, new Map([
                [Usted, [base + "u" + rest + "ió"]],
                [Ustedes, [base + "u" + rest + "ieron"]],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, [base + "ue" + rest + "a"]],
                [Tu, [base + "ue" + rest + "as"]],
                [Usted, [base + "ue" + rest + "a"]],
                [Nosotros, [base + "u" + rest + "amos"]],
                [Vosotros, [base + "u" + rest + "áis"]],
                [Ustedes, [base + "ue" + rest + "an"]],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, [base + "ue" + rest + "e"]],
                [Usted, [base + "ue" + rest + "a"]],
                [Nosotros, [base + "u" + rest + "amos"]],
                [Ustedes, [base + "ue" + rest + "an"]],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, [base + "ue" + rest + "as"]],
                [Usted, [base + "ue" + rest + "a"]],
                [Nosotros, [base + "u" + rest + "amos"]],
                [Vosotros, [base + "u" + rest + "áis"]],
                [Ustedes, [base + "ue" + rest + "an"]]
            ])],
            [SubjuntivoImperfecto, new Map([
                [Yo, [base + "u" + rest + "iera", base + "u" + rest + "iese"]],
                [Tu, [base + "u" + rest + "ieras", base + "u" + rest + "ieses"]],
                [Usted, [base + "u" + rest + "iera", base + "u" + rest + "iese"]],
                [Nosotros, [base + "u" + rest + "iéramos", base + "u" + rest + "iésemos"]],
                [Vosotros, [base + "u" + rest + "ierais", base + "u" + rest + "ieseis"]],
                [Ustedes, [base + "u" + rest + "ieran", base + "u" + rest + "iesen"]]
            ])]
        ])
    }
}
