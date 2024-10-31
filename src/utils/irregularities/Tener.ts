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

export const tener: Irregularities = {
    forms: function (string) {
        return new Map([
            [IndicativoPresente, new Map([
                [Yo, "tengo"],
                [Tu, "tienes"],
                [Usted, "tiene"],
                [Ustedes, "tienen"],            
            ])],
            [IndicativoIndefinido, new Map([
                [Yo, "tuve"],
                [Tu, "tuviste"],
                [Usted, "tuvo"],
                [Nosotros, "tuvimos"],
                [Vosotros, "tuvisteis"],
                [Ustedes, "tuvieron"],
            ])],
            [IndicativoFuturoImperfecto, new Map([
                [Yo, "tendré"],
                [Tu, "tendrás"],
                [Usted, "tendrá"],
                [Nosotros, "tendremos"],
                [Vosotros, "tendréis"],
                [Ustedes, "tendrán"],
            ])],
            [IndicativoCondicional, new Map([
                [Yo, "tendría"],
                [Tu, "tendrías"],
                [Usted, "tendría"],
                [Nosotros, "tendríamos"],
                [Vosotros, "tendríais"],
                [Ustedes, "tendrían"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, "tenga"],
                [Tu, "tengas"],
                [Usted, "tenga"],
                [Nosotros, "tengamos"],
                [Vosotros, "tengáis"],
                [Ustedes, "tengan"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, "ten"],
                [Usted, "tenga"],
                [Nosotros, "tengamos"],
                [Ustedes, "tengan"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, "tengas"],
                [Usted, "tenga"],
                [Nosotros, "tengamos"],
                [Vosotros, "tengáis"],
                [Ustedes, "tengan"],
            ])]
        ])
    }
}
