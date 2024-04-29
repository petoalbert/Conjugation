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

export const andar: Irregularity = {
    forms: function (string) {
        let base = string.slice(0, -2) // ar

        return new Map([
            [IndicativoIndefinido, new Map([
                [Yo, base + "uve"],
                [Tu, base + "uviste"],
                [Usted, base + "uvo"],
                [Nosotros, base + "uvimos"],
                [Vosotros, base + "uvisteis"],
                [Ustedes, base + "uvieron"]
            ])]
        ])
    }
}
