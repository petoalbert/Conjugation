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
    IndicativoImperfecto,
    IndicativoFuturoImperfecto,
    IndicativoCondicional
} = Tense

export const jugar: Irregularities = {
    forms: function (string) {
        return new Map([
            [IndicativoPresente, new Map([
                [Yo, "juego"],
                [Tu, "juegas"],
                [Usted, "juega"],
                [Ustedes, "juegan"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, "juegue"],
                [Tu, "juegues"],
                [Usted, "juege"],
                [Nosotros, "jugemos"],
                [Vosotros, "jugéis"],
                [Ustedes, "juegen"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, "juega"],
                [Usted, "juegue"],
                [Nosotros, "juguemos"],
                [Ustedes, "jueguen"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, "juegues"],
                [Usted, "juege"],
                [Nosotros, "jugemos"],
                [Vosotros, "jugéis"],
                [Ustedes, "juegen"],
            ])]
        ])
    }
}
