import { Pronoun } from "../Pronoun"
import { Tense } from "../Tense"
import { Irregularities } from "./Irregularity"

const { Yo, Tu, Usted, Nosotros, Vosotros, Ustedes } = Pronoun
const {
    IndicativoPresente,
    IndicativoImperfecto,
    IndicativoIndefinido,
    IndicativoFuturoImperfecto,
    IndicativoCondicional,
    SubjuntivoPresente,
    ImperativoAfirmativo,
    ImperativoNegativo
} = Tense

export const almorzar: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -5) // orzar

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, base + "uerzo"],
                [Tu, base + "uerzas"],
                [Usted, base + "uerza"],
                [Ustedes, base + "uerzan"],
            ])],
            [IndicativoIndefinido, new Map([
                [Yo, base + "orcé"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "uerce"],
                [Tu, base + "uerces"],
                [Usted, base + "uerce"],
                [Nosotros, base + "uercemos"],
                [Vosotros, base + "uercéis"],
                [Ustedes, base + "uercen"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, base + "uerza"],
                [Usted, base + "uerce"],
                [Nosotros, base + "uercemos"],
                [Ustedes, base + "uercen"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, "no" + base + "uerces"],
                [Usted, "no" + base + "uerce"],
                [Nosotros, "no" + base + "uercemos"],
                [Vosotros, "no" + base + "uercéis"],
                [Ustedes, "no " + base + "uercen"]
            ])]
        ])
    }
}
