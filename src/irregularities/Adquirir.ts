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

export const adquirir: Irregularity = {
    forms: function (string) {
        let base = string.slice(0, -6) // quirir

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, base + "quiero"],
                [Tu, base + "quieres"],
                [Usted, base + "quiere"],
                [Ustedes, base + "quieren"],

            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "quiera"],
                [Tu, base + "quieras"],
                [Usted, base + "quiera"],
                [Ustedes, base + "quieran"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, base + "quiere"],
                [Usted, base + "quiera"],
                [Ustedes, base + "quieran"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, "no" + base + "quieras"],
                [Usted, "no" + base + "quiera"],
                [Ustedes, "no " + base + "quieran"]
            ])]
        ])
    }
}
