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
    IndicativoCondicional,
    SubjuntivoImperfecto
} = Tense

export const decir: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -5) // decir

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, [base + "digo"]],
                [Tu, [base + "dices"]],
                [Usted, [base + "dice"]],
                [Ustedes, [base + "dicen"]],
            ])],
            [IndicativoIndefinido, new Map([
                [Yo, [base + "dije"]],
                [Tu, [base + "dijiste"]],
                [Usted, [base + "dijo"]],
                [Nosotros, [base + "dijimos"]],
                [Vosotros, [base + "dijisteis"]],
                [Ustedes, [base + "dijeron"]],
            ])],
            [IndicativoFuturoImperfecto, new Map([
                [Yo, [base + "diré"]],
                [Tu, [base + "dirás"]],
                [Usted, [base + "dirá"]],
                [Nosotros, [base + "dirémos"]],
                [Vosotros, [base + "diréis"]],
                [Ustedes, [base + "dirán"]],
            ])],
            [IndicativoCondicional, new Map([
                [Yo, [base + "diría"]],
                [Tu, [base + "dirías"]],
                [Usted, [base + "diría"]],
                [Nosotros, [base + "diríamos"]],
                [Vosotros, [base + "diríais"]],
                [Ustedes, [base + "dirían"]],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, [base + "diga"]],
                [Tu, [base + "digas"]],
                [Usted, [base + "diga"]],
                [Nosotros, [base + "digamos"]],
                [Vosotros, [base + "digáis"]],
                [Ustedes, [base + "digan"]],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, [base + "di"]],
                [Usted, [base + "diga"]],
                [Nosotros, [base + "digamos"]],
                [Ustedes, [base + "digan"]],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, [base + "digas"]],
                [Usted, [base + "diga"]],
                [Nosotros, [base + "digamos"]],
                [Vosotros, [base + "digáis"]],
                [Ustedes, [base + "digan"]]
            ])],
            [SubjuntivoImperfecto, new Map([
                [Yo, [base + "dijera", base + "dijese"]],
                [Tu, [base + "dijeras", base + "dijeses"]],
                [Usted, [base + "dijera", base + "dijese"]],
                [Nosotros, [base + "dijéramos", base + "dijésemos"]],
                [Vosotros, [base + "dijerais", base + "dijeseis"]],
                [Ustedes, [base + "dijeran", base + "dijesen"]]
            ])]
        ])
    }
}
