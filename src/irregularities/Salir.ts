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

export const salir: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -5) // salir

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, base + "salgo"],
            ])],
            [IndicativoFuturoImperfecto, new Map([
                [Yo, base + "saldré"],
                [Tu, base + "saldrás"],
                [Usted, base + "saldrá"],
                [Nosotros, base + "saldremos"],
                [Vosotros, base + "saldréis"],
                [Ustedes, base + "saldrán"],
            ])],
            [IndicativoCondicional, new Map([
                [Yo, base + "saldría"],
                [Tu, base + "saldrías"],
                [Usted, base + "saldría"],
                [Nosotros, base + "saldríamos"],
                [Vosotros, base + "saldríais"],
                [Ustedes, base + "saldrían"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "salga"],
                [Tu, base + "salgas"],
                [Usted, base + "salga"],
                [Nosotros, base + "salgamos"],
                [Vosotros, base + "salgáis"],
                [Ustedes, base + "salgan"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, base + "sal"],
                [Usted, base + "salga"],
                [Nosotros, base + "salgamos"],
                [Ustedes, base + "salgan"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, base + "salgas"],
                [Usted, base + "salga"],
                [Nosotros, base + "salgamos"],
                [Vosotros, base + "salgáis"],
                [Ustedes, base + "salgan"],
            ])]
        ])
    }
}
