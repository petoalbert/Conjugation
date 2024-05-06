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

export const venir: Irregularities = {
    forms: function (string) {
        return new Map([
            [IndicativoPresente, new Map([
                [Yo, "vengo"],
                [Tu, "vienes"],
                [Usted, "viene"],
                [Ustedes, "vienen"],
            ])],
            [IndicativoIndefinido, new Map([
                [Yo, "vine"],
                [Tu, "viniste"],
                [Usted, "vino"],
                [Nosotros, "vinimos"],
                [Vosotros, "vinisteis"],
                [Ustedes, "vinieron"],
            ])],
            [IndicativoFuturoImperfecto, new Map([
                [Yo, "vendré"],
                [Tu, "vendrás"],
                [Usted, "vendrá"],
                [Nosotros, "vendremos"],
                [Vosotros, "vendréis"],
                [Ustedes, "vendrán"],
            ])],
            [IndicativoCondicional, new Map([
                [Yo, "vendría"],
                [Tu, "vendrías"],
                [Usted, "vendría"],
                [Nosotros, "vendríamos"],
                [Vosotros, "vendríais"],
                [Ustedes, "vendrían"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, "venga"],
                [Tu, "vengas"],
                [Usted, "venga"],
                [Nosotros, "vengamos"],
                [Vosotros, "vengáis"],
                [Ustedes, "vengan"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, "ven"],
                [Usted, "venga"],
                [Nosotros, "vengamos"],
                [Ustedes, "vengan"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, "vengas"],
                [Usted, "venga"],
                [Nosotros, "vengamos"],
                [Vosotros, "vengáis"],
                [Ustedes, "vengan"],
            ])]
        ])
    }
}
