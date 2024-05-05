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

export const poner: Irregularities = {
    forms: function (string) {
        return new Map([
            [IndicativoPresente, new Map([
                [Yo, "pongo"],
            ])],
            [IndicativoIndefinido, new Map([
                [Yo, "puse"],
                [Tu, "pusiste"],
                [Usted, "puso"],
                [Nosotros, "pusimos"],
                [Vosotros, "pusisteis"],
                [Ustedes, "pusieron"],
            ])],
            [IndicativoFuturoImperfecto, new Map([
                [Yo, "pondré"],
                [Tu, "pondrás"],
                [Usted, "pondrá"],
                [Nosotros, "pondremos"],
                [Vosotros, "pondréis"],
                [Ustedes, "pondrán"],
            ])],
            [IndicativoCondicional, new Map([
                [Yo, "pondría"],
                [Tu, "pondrías"],
                [Usted, "pondría"],
                [Nosotros, "pondríamos"],
                [Vosotros, "pondríais"],
                [Ustedes, "pondrían"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, "ponga"],
                [Tu, "pongas"],
                [Usted, "ponga"],
                [Nosotros, "pongamos"],
                [Vosotros, "pongáis"],
                [Ustedes, "pongan"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, "pon"],
                [Usted, "ponga"],
                [Nosotros, "pongamos"],
                [Ustedes, "pongan"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, "pongas"],
                [Usted, "ponga"],
                [Nosotros, "pongamos"],
                [Vosotros, "pongáis"],
                [Ustedes, "pongan"],
            ])]
        ])
    }
}
