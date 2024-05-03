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
    IndicativoImperfecto,
    IndicativoFuturoImperfecto,
    IndicativoCondicional
} = Tense

export const ir: Irregularities = {
    forms: function (string) {
        return new Map([
            [IndicativoPresente, new Map([
                [Yo, "voy"],
                [Tu, "vas"],
                [Usted, "va"],
                [Nosotros, "vamos"],
                [Vosotros, "vais"],
                [Ustedes, "van"],
            ])],
            [IndicativoImperfecto, new Map([
                [Yo, "iba"],
                [Tu, "ibas"],
                [Usted, "iba"],
                [Nosotros, "ibamos"],
                [Vosotros, "ibais"],
                [Ustedes, "iban"],
            ])],
            [IndicativoIndefinido, new Map([
                [Yo, "fui"],
                [Tu, "fuiste"],
                [Usted, "fue"],
                [Nosotros, "fuimos"],
                [Vosotros, "fuisteis"],
                [Ustedes, "fueron"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, "vaya"],
                [Tu, "vayas"],
                [Usted, "vaya"],
                [Nosotros, "vayamos"],
                [Vosotros, "vayáis"],
                [Ustedes, "vayan"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, "ve"],
                [Usted, "vaya"],
                [Nosotros, "vayamos"],
                [Ustedes, "vayan"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, "vayas"],
                [Usted, "vaya"],
                [Nosotros, "vayamos"],
                [Vosotros, "vayáis"],
                [Ustedes, "vayan"]
            ])]
        ])
    }
}
