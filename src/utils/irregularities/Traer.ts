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

export const traer: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -2) // er

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, [base + "igo"]],
            ])],
            [IndicativoIndefinido, new Map([
                [Yo, [base + "je"]],
                [Tu, [base + "jiste"]],
                [Usted, [base + "jo"]],
                [Nosotros, [base + "jimos"]],
                [Vosotros, [base + "jisteis"]],
                [Ustedes, [base + "jeron"]],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, [base + "iga"]],
                [Tu, [base + "igas"]],
                [Usted, [base + "iga"]],
                [Nosotros, [base + "igamos"]],
                [Vosotros, [base + "igáis"]],
                [Ustedes, [base + "igan"]],
            ])],
            [ImperativoAfirmativo, new Map([
                [Usted, [base + "iga"]],
                [Nosotros, [base + "igamos"]],
                [Ustedes, [base + "igan"]],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, [base + "igas"]],
                [Usted, [base + "iga"]],
                [Nosotros, [base + "igamos"]],
                [Vosotros, [base + "igáis"]],
                [Ustedes, [base + "igan"]],
            ])],
            [SubjuntivoImperfecto, new Map([
                [Yo, [base + "jera", base + "jese"]],
                [Tu, [base + "jeras", base + "jeses"]],
                [Usted, [base + "jera", base + "jese"]],
                [Nosotros, [base + "jéramos", base + "jésemos"]],
                [Vosotros, [base + "jerais", base + "jeséis"]],
                [Ustedes, [base + "jeran", base + "jesen"]]
            ])]
        ])
    }
}
