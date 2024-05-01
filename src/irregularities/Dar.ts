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

export const dar: Irregularities = {
    forms: function (string) {
        return new Map([
            [IndicativoPresente, new Map([
                [Yo, "doy"],
                [Vosotros, "dais"],
            ])],
            [IndicativoIndefinido, new Map([
                [Yo, "di"],
                [Tu, "diste"],
                [Usted, "dio"],
                [Nosotros, "dimos"],
                [Vosotros, "disteis"],
                [Ustedes, "dieron"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, "dé"],
                [Usted, "dé"],
                [Vosotros, "deis"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Usted, "dé"]
            ])]
        ])
    }
}
