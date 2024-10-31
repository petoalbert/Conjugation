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

export const elegir: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -4) // egir

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, base + "ijo"],
                [Tu, base + "iges"],
                [Usted, base + "ige"],
                [Ustedes, base + "igen"],
            ])],
            [IndicativoIndefinido, new Map([
                [Usted, base + "igió"],
                [Ustedes, base + "igieron"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "ija"],
                [Tu, base + "ijas"],
                [Usted, base + "ija"],
                [Nosotros, base + "ijamos"],
                [Vosotros, base + "ijáis"],
                [Ustedes, base + "ijan"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, base + "ige"],
                [Usted, base + "ija"],
                [Nosotros, base + "ijamos"],
                [Ustedes, base + "ijan"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, base + "ijas"],
                [Usted, base + "ija"],
                [Nosotros, base + "ijamos"],
                [Vosotros, base + "ijáis"],
                [Ustedes, base + "ijan"]
            ])]
        ])
    }
}
