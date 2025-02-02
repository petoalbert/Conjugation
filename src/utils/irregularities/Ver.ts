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
    IndicativoCondicional,
    IndicativoImperfecto
} = Tense

export const ver: Irregularities = {
    forms: function (string) {
        return new Map([
            [IndicativoPresente, new Map([
                [Yo, ["veo"]],
            ])],
            [IndicativoImperfecto, new Map([
                [Yo, ["veía"]],
                [Tu, ["veías"]],
                [Usted, ["veía"]],
                [Nosotros, ["veíamos"]],
                [Vosotros, ["veíais"]],
                [Ustedes, ["veían"]],
            ])],
            [IndicativoIndefinido, new Map([
                [Yo, ["vi"]],
                [Usted, ["vio"]],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, ["vea"]],
                [Tu, ["veas"]],
                [Usted, ["vea"]],
                [Nosotros, ["veamos"]],
                [Vosotros, ["veáis"]],
                [Ustedes, ["vean"]],
            ])],
            [ImperativoAfirmativo, new Map([
                [Usted, ["vea"]],
                [Nosotros, ["veamos"]],
                [Ustedes, ["vean"]],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, ["veas"]],
                [Usted, ["vea"]],
                [Nosotros, ["veamos"]],
                [Vosotros, ["veáis"]],
                [Ustedes, ["vean"]],
            ])]
        ])
    }
}
