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

export const pedir: Irregularities = {
    forms: function (string) {
        let oIndex = string.lastIndexOf("e")

        let base = string.slice(0, oIndex)

        let rest = string.slice(oIndex + 1, -2) // drop ir

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, [base + "i" + rest + "o"]],
                [Tu, [base + "i" + rest + "es"]],
                [Usted, [base + "i" + rest + "e"]],
                [Ustedes, [base + "i" + rest + "en"]],
            ])],
            [IndicativoIndefinido, new Map([
                [Usted, [base + "i" + rest + "ió"]],
                [Ustedes, [base + "i" + rest + "ieron"]],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, [base + "i" + rest + "a"]],
                [Tu, [base + "i" + rest + "as"]],
                [Usted, [base + "i" + rest + "a"]],
                [Nosotros, [base + "i" + rest + "amos"]],
                [Vosotros, [base + "i" + rest + "áis"]],
                [Ustedes, [base + "i" + rest + "an"]],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, [base + "i" + rest + "e"]],
                [Usted, [base + "i" + rest + "a"]],
                [Nosotros, [base + "i" + rest + "amos"]],
                [Ustedes, [base + "i" + rest + "an"]],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, [base + "i" + rest + "as"]],
                [Usted, [base + "i" + rest + "a"]],
                [Nosotros, [base + "i" + rest + "amos"]],
                [Vosotros, [base + "i" + rest + "áis"]],
                [Ustedes, [base + "i" + rest + "an"]]
            ])],
            [SubjuntivoImperfecto, new Map([
                [Yo, [base + "i" + rest + "iera", base + "i" + rest + "iese"]],
                [Tu, [base + "i" + rest + "ieras", base + "i" + rest + "ieses"]],
                [Usted, [base + "i" + rest + "iera", base + "i" + rest + "iese"]],
                [Nosotros, [base + "i" + rest + "iéramos", base + "i" + rest + "iésemos"]],
                [Vosotros, [base + "i" + rest + "ierais", base + "i" + rest + "ieseis"]],
                [Ustedes, [base + "i" + rest + "ieran", base + "i" + rest + "iesen"]]
            ])]
        ])
    }
}
