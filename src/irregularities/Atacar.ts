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

export const atacar: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -3) // car

        return new Map([
            [IndicativoIndefinido, new Map([
                [Yo, base + "qué"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "que"],
                [Tu, base + "ques"],
                [Usted, base + "que"],
                [Nosotros, base + "quemos"],
                [Vosotros, base + "quéis"],
                [Ustedes, base + "quen"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Usted, base + "que"],
                [Nosotros, base + "quemos"],
                [Ustedes, base + "quen"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, "no" + base + "ques"],
                [Usted, "no" + base + "que"],
                [Nosotros, "no" + base + "quemos"],
                [Vosotros, "no" + base + "quéis"],
                [Ustedes, "no " + base + "quen"]
            ])]
        ])
    }
}
