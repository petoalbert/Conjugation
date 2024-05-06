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

export const seguir: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -6) // seguir

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, base + "sigo"],
                [Tu, base + "sigues"],
                [Usted, base + "sigue"],
                [Ustedes, base + "siguen"],
            ])],
            [IndicativoIndefinido, new Map([
                [Usted, base + "siguió"],
                [Ustedes, base + "siguieron"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "siga"],
                [Tu, base + "sigas"],
                [Usted, base + "siga"],
                [Nosotros, base + "sigamos"],
                [Vosotros, base + "sigáis"],
                [Ustedes, base + "sigan"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, base + "sigue"],
                [Usted, base + "siga"],
                [Nosotros, base + "sigamos"],
                [Ustedes, base + "sigan"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, base + "sigas"],
                [Usted, base + "siga"],
                [Nosotros, base + "sigamos"],
                [Vosotros, base + "sigáis"],
                [Ustedes, base + "sigan"],
            ])]
        ])
    }
}
