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

export const caber: Irregularity = {
    forms: function (string) {
        return new Map([
            [IndicativoIndefinido, new Map([
                [Yo, "quepo"],
                [Yo, "cupe"],
                [Tu, "cupiste"],
                [Usted, "cupo"],
                [Nosotros, "cupimos"],
                [Vosotros, "cupisteis"],
                [Ustedes, "cupieron"],
            ])],
            [IndicativoImperfecto, new Map([
                [Yo, "cabré"],
                [Tu, "cabrás"],
                [Usted, "cabrá"],
                [Nosotros, "cabremos"],
                [Vosotros, "cabréis"],
                [Ustedes, "cabrán"],

            ])],
            [IndicativoCondicional, new Map([
                [Yo, "cabría"],
                [Tu, "cabrías"],
                [Usted, "cabría"],
                [Nosotros, "cabríamos"],
                [Vosotros, "cabríais"],
                [Ustedes, "cabrían"],

            ])],
            [SubjuntivoPresente, new Map([
                [Yo, "quepa"],
                [Tu, "quepas"],
                [Usted, "quepa"],
                [Nosotros, "quepamos"],
                [Vosotros, "quepáis"],
                [Ustedes, "quepan"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Usted, "quepa"],
                [Nosotros, "quepamos"],
                [Ustedes, "quepan"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, "no " + "quepas"],
                [Usted, "no " + "quepa"],
                [Nosotros, "no " + "quepamos"],
                [Vosotros, "no " + "quepáis"],
                [Ustedes, "no " + "quepan"]
            ])]
        ])
    }
}
