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

export const seguir: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -6) // seguir

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, [base + "sigo"]],
                [Tu, [base + "sigues"]],
                [Usted, [base + "sigue"]],
                [Ustedes, [base + "siguen"]],
            ])],
            [IndicativoIndefinido, new Map([
                [Usted, [base + "siguió"]],
                [Ustedes, [base + "siguieron"]],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, [base + "siga"]],
                [Tu, [base + "sigas"]],
                [Usted, [base + "siga"]],
                [Nosotros, [base + "sigamos"]],
                [Vosotros, [base + "sigáis"]],
                [Ustedes, [base + "sigan"]],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, [base + "sigue"]],
                [Usted, [base + "siga"]],
                [Nosotros, [base + "sigamos"]],
                [Ustedes, [base + "sigan"]],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, [base + "sigas"]],
                [Usted, [base + "siga"]],
                [Nosotros, [base + "sigamos"]],
                [Vosotros, [base + "sigáis"]],
                [Ustedes, [base + "sigan"]],
            ])],
            [SubjuntivoImperfecto, new Map([
                [Yo, [base + "siguiera", base + "siguiese"]],
                [Tu, [base + "siguieras", base + "siguieses"]],
                [Usted, [base + "siguiera", base + "siguiese"]],
                [Nosotros, [base + "siguiéramos", base + "siguiésemos"]],
                [Vosotros, [base + "siguierais", base + "siguieseis"]],
                [Ustedes, [base + "siguieran", base + "siguiesen"]],
            ])]
        ])
    }
}
