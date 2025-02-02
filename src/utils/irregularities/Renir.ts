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

export const renir: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -5) // reñir

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, [base + "riño"]],
                [Tu, [base + "riñes"]],
                [Usted, [base + "riñe"]],
                [Ustedes, [base + "riñen"]],
            ])],
            [IndicativoIndefinido, new Map([
                [Usted, [base + "riñó"]],
                [Ustedes, [base + "riñeron"]],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, [base + "riña"]],
                [Tu, [base + "riñas"]],
                [Usted, [base + "riña"]],
                [Nosotros, [base + "riñamos"]],
                [Vosotros, [base + "riñáis"]],
                [Ustedes, [base + "riñan"]],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, [base + "riñe"]],
                [Usted, [base + "riña"]],
                [Nosotros, [base + "riñamos"]],
                [Ustedes, [base + "riñan"]],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, [base + "riñas"]],
                [Usted, [base + "riña"]],
                [Nosotros, [base + "riñamos"]],
                [Vosotros, [base + "riñáis"]],
                [Ustedes, [base + "riñan"]],
            ])],
            [SubjuntivoImperfecto, new Map([
                [Yo, [base + "riñera", base + "riñese"]],
                [Tu, [base + "riñeras", base + "riñeses"]],
                [Usted, [base + "riñera", base + "riñese"]],
                [Nosotros, [base + "riñéramos", base + "riñésemos"]],
                [Vosotros, [base + "riñerais", base + "riñeseis"]],
                [Ustedes, [base + "riñeran", base + "riñesen"]],
            ])]
        ])
    }
}
