import { Pronoun } from "../Pronoun"
import { Tense } from "../Tense"
import { Irregularities } from "./Irregularity"

const { Yo, Tu, Usted, Nosotros, Vosotros, Ustedes } = Pronoun
const {
    IndicativoPresente,
    IndicativoIndefinido,
    SubjuntivoPresente,
    ImperativoAfirmativo,
    ImperativoNegativo
} = Tense

export const arguir: Irregularities = {
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
                [Tu, base + "uyas"],
                [Usted, base + "uya"],
                [Nosotros, base + "uyamos"],
                [Vosotros, base + "uyáis"],
                [Ustedes, base + "uyan"]
            ])]
        ])
    }
}
