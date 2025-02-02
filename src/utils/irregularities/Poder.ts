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
    SubjuntivoImperfecto
} = Tense

export const poder: Irregularities = {
    forms: function (string) {
        return new Map([
            [IndicativoPresente, new Map([
                [Yo, ["puedo"]],
                [Tu, ["puedes"]],
                [Usted, ["puede"]],
                [Ustedes, ["pueden"]],
            ])],
            [IndicativoIndefinido, new Map([
                [Yo, ["pude"]],
                [Tu, ["pudiste"]],
                [Usted, ["pudo"]],
                [Nosotros, ["pudimos"]],
                [Vosotros, ["pudisteis"]],
                [Ustedes, ["pudieron"]],
            ])],
            [IndicativoFuturoImperfecto, new Map([
                [Yo, ["podré"]],
                [Tu, ["podrás"]],
                [Usted, ["podrá"]],
                [Nosotros, ["podremos"]],
                [Vosotros, ["podréis"]],
                [Ustedes, ["podrán"]],
            ])],
            [IndicativoCondicional, new Map([
                [Yo, ["podría"]],
                [Tu, ["podrías"]],
                [Usted, ["podría"]],
                [Nosotros, ["podríamos"]],
                [Vosotros, ["podríais"]],
                [Ustedes, ["podrían"]],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, ["pueda"]],
                [Tu, ["puedas"]],
                [Usted, ["pueda"]],
                [Ustedes, ["puedan"]],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, ["puede"]],
                [Usted, ["pueda"]],
                [Ustedes, ["puedan"]],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, ["puedas"]],
                [Usted, ["pueda"]],
                [Ustedes, ["puedan"]],
            ])],
            [SubjuntivoImperfecto, new Map([
                [Yo, ["pudiera", "pudiese"]],
                [Tu, ["pudieras", "pudieses"]],
                [Usted, ["pudiera", "pudiese"]],
                [Nosotros, ["pudiéramos", "pudiésemos"]],
                [Vosotros, ["pudierais", "pudieseis"]],
                [Ustedes, ["pudieran", "pudiesen"]],
            ])]
        ])
    }
}
