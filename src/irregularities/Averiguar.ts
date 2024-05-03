import { Pronoun } from "../Pronoun"
import { Tense } from "../Tense"
import { Irregularities } from "./Irregularity"

const { Yo, Tu, Usted, Nosotros, Vosotros, Ustedes } = Pronoun
const {
    IndicativoIndefinido,
    SubjuntivoPresente,
    ImperativoAfirmativo,
    ImperativoNegativo
} = Tense

export const averiguar: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -4) // guar

        return new Map([
            [IndicativoIndefinido, new Map([
                [Yo, (base + "güé")],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "güe"],
                [Tu, base + "gües"],
                [Usted, base + "güe"],
                [Nosotros, base + "güemos"],
                [Vosotros, base + "güéis"],
                [Ustedes, base + "güen"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Usted, base + "güe"],
                [Nosotros, base + "güemos"],
                [Ustedes, base + "güen"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, base + "gües"],
                [Usted, base + "güe"],
                [Nosotros, base + "güemos"],
                [Vosotros, base + "güéis"],
                [Ustedes, base + "güen"]
            ])]
        ])
    }
}
