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

export const oir: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -3) // oir

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, base + "oigo"],
                [Tu, base + "oyes"],
                [Usted, base + "oye"],
                [Nosotros, base + "oimos"],
                [Ustedes, base + "oyen"],
            ])],
            [IndicativoIndefinido, new Map([
                [Tu, base + "oíste"],
                [Usted, base + "oyó"],
                [Nosotros, base + "oímos"],
                [Vosotros, base + "oísteis"],
                [Ustedes, base + "oyeron"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "oiga"],
                [Tu, base + "oigas"],
                [Usted, base + "oiga"],
                [Nosotros, base + "oigamos"],
                [Vosotros, base + "oigáis"],
                [Ustedes, base + "oigan"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, base + "oye"],
                [Usted, base + "oiga"],
                [Nosotros, base + "oigamos"],
                [Vosotros, base + "oíd"],
                [Ustedes, base + "oigan"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, base + "oigas"],
                [Usted, base + "oiga"],
                [Nosotros, base + "oigamos"],
                [Vosotros, base + "oigáis"],
                [Ustedes, base + "oigan"],
            ])]
        ])
    }
}
