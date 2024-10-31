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

export const caer: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -4) // caer

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, base + "caigo"],
            ])],
            [IndicativoIndefinido, new Map([
                [Tu, base + "caiste"],
                [Usted, base + "cayó"],
                [Nosotros, base + "caimos"],
                [Vosotros, base + "caisteis"],
                [Ustedes, base + "cayeron"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "caiga"],
                [Tu, base + "caigas"],
                [Usted, base + "caiga"],
                [Nosotros, base + "caigamos"],
                [Vosotros, base + "caigáis"],
                [Ustedes, base + "caigan"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Usted, base + "caiga"],
                [Nosotros, base + "caigamos"],
                [Ustedes, base + "caigan"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, base + "caigas"],
                [Usted, base + "caiga"],
                [Nosotros, base + "caigamos"],
                [Vosotros, base + "caigáis"],
                [Ustedes, base + "caigan"]
            ])]
        ])
    }
}
