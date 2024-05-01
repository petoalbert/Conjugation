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

export const arguir: Irregularity = {
    forms: function (string) {
        let base = string.slice(0, -3) // üir

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, base + "uyo"],
                [Tu, base + "uyes"],
                [Usted, base + "uye"],
                [Ustedes, base + "uyen"],
            ])],
            [IndicativoIndefinido, new Map([
                [Usted, base + "uyó"],
                [Ustedes, base + "uyeron"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "uya"],
                [Tu, base + "uyas"],
                [Usted, base + "uya"],
                [Nosotros, base + "uyamos"],
                [Vosotros, base + "uyáis"],
                [Ustedes, base + "uyan"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, base + "uye"],
                [Usted, base + "uya"],
                [Nosotros, base + "uyamos"],
                [Ustedes, base + "uyan"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, "no" + base + "uyas"],
                [Usted, "no" + base + "uya"],
                [Nosotros, "no" + base + "uyamos"],
                [Vosotros, "no" + base + "uyáis"],
                [Ustedes, "no " + base + "uyan"]
            ])]
        ])
    }
}