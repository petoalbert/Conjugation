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

export const reir: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -3) // eír

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, [base + "ío"]],
                [Tu, [base + "íes"]],
                [Usted, [base + "íe"]],
                [Nosotros, [base + "ímos"]],
                [Ustedes, [base + "íen"]],
            ])],
            [IndicativoIndefinido, new Map([
                [Tu, [base + "íste"]],
                [Usted, [base + "ió"]],
                [Nosotros, [base + "ímos"]],
                [Vosotros, [base + "ísteis"]],
                [Ustedes, [base + "ieron"]],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, [base + "ía"]],
                [Tu, [base + "ías"]],
                [Usted, [base + "ía"]],
                [Nosotros, [base + "iamos"]],
                [Vosotros, [base + "iáis"]],
                [Ustedes, [base + "ían"]],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, [base + "íe"]],
                [Usted, [base + "ía"]],
                [Nosotros, [base + "iamos"]],
                [Vosotros, [base + "eíd"]],
                [Ustedes, [base + "ían"]],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, [base + "ías"]],
                [Usted, [base + "ía"]],
                [Nosotros, [base + "iamos"]],
                [Vosotros, [base + "iáis"]],
                [Ustedes, [base + "ían"]],
            ])],
            [SubjuntivoImperfecto, new Map([
                [Yo, [base + "iera", base + "iese"]],
                [Tu, [base + "ieras", base + "ieses"]],
                [Usted, [base + "iera", base + "iese"]],
                [Nosotros, [base + "iéramos", base + "iésemos"]],
                [Vosotros, [base + "ierais", base + "ieseis"]],
                [Ustedes, [base + "ieran", base + "iesen"]],
            ])]
        ])
    }
}
