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
        let base = string.slice(0, -4) // ecer

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, base + "ezco"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "ezca"],
                [Tu, base + "ezcas"],
                [Usted, base + "ezca"],
                [Nosotros, base + "ezcamos"],
                [Vosotros, base + "ezcáis"],
                [Ustedes, base + "ezcan"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Usted, base + "ezca"],
                [Nosotros, base + "ezcamos"],
                [Ustedes, base + "ezcan"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, base + "ezcas"],
                [Usted, base + "ezca"],
                [Nosotros, base + "ezcamos"],
                [Vosotros, base + "ezcáis"],
                [Ustedes, base + "ezcan"]
            ])]
        ])
    }
}
