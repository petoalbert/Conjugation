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

export const avergonzar: Irregularity = {
    forms: function (string) {
        let base = string.slice(0, -6) // gonzar

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, base + "güenzo"],
                [Tu, base + "güenas"],
                [Usted, base + "güenza"],
                [Ustedes, base + "güenzan"],
            ])],
            [IndicativoIndefinido, new Map([
                [Yo, base + "goncé"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "güence"],
                [Tu, base + "güences"],
                [Usted, base + "güence"],
                [Nosotros, base + "güencemos"],
                [Vosotros, base + "güencéis"],
                [Ustedes, base + "güencen"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, base + "güenza"],
                [Usted, base + "güence"],
                [Nosotros, base + "güencemos"],
                [Ustedes, base + "güencen"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, "no " + base + "güences"],
                [Usted, "no " + base + "güence"],
                [Nosotros, "no " + base + "güencemos"],
                [Vosotros, "no " + base + "güencéis"],
                [Ustedes, "no " + base + "güencen"]
            ])]
        ])
    }
}