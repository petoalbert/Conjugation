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

export const querer: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -6) // querer

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, [base + "quiero"]],
                [Tu, [base + "quieres"]],
                [Usted, [base + "quiere"]],
                [Ustedes, [base + "quieren"]],
            ])],
            [IndicativoIndefinido, new Map([
                [Yo, [base + "quise"]],
                [Tu, [base + "quisiste"]],
                [Usted, [base + "quiso"]],
                [Nosotros, [base + "quisimos"]],
                [Vosotros, [base + "quisisteis"]],
                [Ustedes, [base + "quisieron"]],
            ])],
            [IndicativoFuturoImperfecto, new Map([
                [Yo, [base + "querré"]],
                [Tu, [base + "querrás"]],
                [Usted, [base + "querrá"]],
                [Nosotros, [base + "querremos"]],
                [Vosotros, [base + "querréis"]],
                [Ustedes, [base + "querrán"]],
            ])],
            [IndicativoCondicional, new Map([
                [Yo, [base + "querría"]],
                [Tu, [base + "querrías"]],
                [Usted, [base + "querría"]],
                [Nosotros, [base + "querríamos"]],
                [Vosotros, [base + "querríais"]],
                [Ustedes, [base + "querrían"]],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, [base + "quiera"]],
                [Tu, [base + "quieras"]],
                [Usted, [base + "quiera"]],
                [Ustedes, [base + "quieran"]],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, [base + "quiere"]],
                [Usted, [base + "quiera"]],
                [Ustedes, [base + "quieran"]],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, [base + "quieras"]],
                [Usted, [base + "quiera"]],
                [Ustedes, [base + "quieran"]],
            ])],
            [SubjuntivoImperfecto, new Map([
                [Yo, [base + "quisiera", base + "quisiese"]],
                [Tu, [base + "quisieras", base + "quisieses"]],
                [Usted, [base + "quisiera", base + "quisiese"]],
                [Nosotros, [base + "quisiéramos", base + "quisiésemos"]],
                [Vosotros, [base + "quisierais", base + "quisieseis"]],
                [Ustedes, [base + "quisieran", base + "quisiesen"]],
            ])]
        ])
    }
}
