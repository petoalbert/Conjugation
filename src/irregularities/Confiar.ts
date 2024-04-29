import { Pronoun } from "../Pronoun"
import { Tense } from "../Tense"
import { Irregularity } from "./Irregularity"

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

export const confiar: Irregularity = {
    forms: function (string) {
        let base = string.slice(0, -3) // iar

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, base + "ío"],
                [Tu, base + "ías"],
                [Usted, base + "ía"],
                [Ustedes, base + "ían"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "íe"],
                [Tu, base + "íes"],
                [Usted, base + "íe"],
                [Ustedes, base + "íen"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, base + "ía"],
                [Usted, base + "íe"],
                [Ustedes, base + "íen"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, "no" + base + "íes"],
                [Usted, "no" + base + "íe"],
                [Ustedes, "no " + base + "íen"]
            ])]
        ])
    }
}
