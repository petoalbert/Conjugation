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

export const saber: Irregularities = {
    forms: function (string) {
        return new Map([
            [IndicativoPresente, new Map([
                [Yo, ["sé"]],
            ])],
            [IndicativoIndefinido, new Map([
                [Yo, ["supe"]],
                [Tu, ["supiste"]],
                [Usted, ["supo"]],
                [Nosotros, ["supimos"]],
                [Vosotros, ["supisteis"]],
                [Ustedes, ["supieron"]],
            ])],
            [IndicativoFuturoImperfecto, new Map([
                [Yo, ["sabré"]],
                [Tu, ["sabrás"]],
                [Usted, ["sabrá"]],
                [Nosotros, ["sabrémos"]],
                [Vosotros, ["sabréis"]],
                [Ustedes, ["sabrán"]],
            ])],
            [IndicativoCondicional, new Map([
                [Yo, ["sabría"]],
                [Tu, ["sabrías"]],
                [Usted, ["sabría"]],
                [Nosotros, ["sabríamos"]],
                [Vosotros, ["sabríais"]],
                [Ustedes, ["sabrían"]],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, ["sepa"]],
                [Tu, ["sepas"]],
                [Usted, ["sepa"]],
                [Nosotros, ["sepamos"]],
                [Vosotros, ["sepáis"]],
                [Ustedes, ["sepan"]],
            ])],
            [ImperativoAfirmativo, new Map([
                [Usted, ["sepa"]],
                [Nosotros, ["sepamos"]],
                [Ustedes, ["sepan"]],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, ["sepas"]],
                [Usted, ["sepa"]],
                [Nosotros, ["sepamos"]],
                [Vosotros, ["sepáis"]],
                [Ustedes, ["sepan"]],
            ])],
            [SubjuntivoImperfecto, new Map([
                [Yo, ["supiera", "supiese"]],
                [Tu, ["supieras", "supieses"]],
                [Usted, ["supiera", "supiese"]],
                [Nosotros, ["supiéramos", "supiésemos"]],
                [Vosotros, ["supierais", "supieseis"]],
                [Ustedes, ["supieran", "supiesen"]],
            ])]
        ])
    }
}
