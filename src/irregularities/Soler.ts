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
    IndicativoCondicional
} = Tense

// TODO disable conjugation for futuro/condicional/imperativo
export const soler: Irregularities = {
    forms: function (string) {
        return new Map([
            [IndicativoPresente, new Map([
                [Yo, "suelo"],
                [Tu, "sueles"],
                [Usted, "suele"],
                [Ustedes, "suelen"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, "suela"],
                [Tu, "suelas"],
                [Usted, "suela"],
                [Ustedes, "suelan"],
            ])]
        ])
    }
}
