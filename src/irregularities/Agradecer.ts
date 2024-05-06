import { Pronoun } from "../Pronoun"
import { Tense } from "../Tense"
import { Irregularities } from "./Irregularity"

const { Yo, Tu, Usted, Nosotros, Vosotros, Ustedes } = Pronoun
const {
    IndicativoPresente,
    SubjuntivoPresente,
    ImperativoAfirmativo,
    ImperativoNegativo
} = Tense

export const agradecer: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -3) // cer

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, base + "zco"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "zca"],
                [Tu, base + "zcas"],
                [Usted, base + "zca"],
                [Nosotros, base + "zcamos"],
                [Vosotros, base + "zcáis"],
                [Ustedes, base + "zcan"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Usted, base + "zca"],
                [Nosotros, base + "zcamos"],
                [Ustedes, base + "zcan"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, base + "zcas"],
                [Usted, base + "zca"],
                [Nosotros, base + "zcamos"],
                [Vosotros, base + "zcáis"],
                [Ustedes, base + "zcan"]
            ])]
        ])
    }
}
