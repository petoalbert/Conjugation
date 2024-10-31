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

export const valer: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -5) // valer

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, base + "valgo"],
            ])],
            [IndicativoFuturoImperfecto, new Map([
                [Yo, base + "valdré"],
                [Tu, base + "valdrás"],
                [Usted, base + "valdrá"],
                [Nosotros, base + "valdremos"],
                [Vosotros, base + "valdréis"],
                [Ustedes, base + "valdrán"],
            ])],
            [IndicativoCondicional, new Map([
                [Yo, base + "valdría"],
                [Tu, base + "valdrías"],
                [Usted, base + "valdría"],
                [Nosotros, base + "valdríamos"],
                [Vosotros, base + "valdríais"],
                [Ustedes, base + "valdrían"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "valga"],
                [Tu, base + "valgas"],
                [Usted, base + "valga"],
                [Nosotros, base + "valgamos"],
                [Vosotros, base + "valgáis"],
                [Ustedes, base + "valgan"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Usted, base + "valga"],
                [Nosotros, base + "valgamos"],
                [Ustedes, base + "valgan"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, base + "valgas"],
                [Usted, base + "valga"],
                [Nosotros, base + "valgamos"],
                [Vosotros, base + "valgáis"],
                [Ustedes, base + "valgan"],
            ])]
        ])
    }
}
