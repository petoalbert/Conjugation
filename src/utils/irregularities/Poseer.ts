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

export const poseer: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -2) // er

        return new Map([
            [IndicativoIndefinido, new Map([
                [Tu, base + "íste"],
                [Usted, base + "yó"],
                [Nosotros, base + "ímos"],
                [Vosotros, base + "ísteis"],
                [Ustedes, base + "yeron"],
            ])],
        ])
    }
}
