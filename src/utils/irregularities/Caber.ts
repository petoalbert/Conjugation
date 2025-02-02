import { Pronoun } from "../Pronoun"
import { Tense } from "../Tense"
import { Irregularities } from "./Irregularity"

const { Yo, Tu, Usted, Nosotros, Vosotros, Ustedes } = Pronoun
const {
    IndicativoFuturoImperfecto,
    IndicativoIndefinido,
    IndicativoCondicional,
    SubjuntivoPresente,
    ImperativoAfirmativo,
    ImperativoNegativo,
    SubjuntivoImperfecto
} = Tense

export const caber: Irregularities = {
    forms: function () {
        return new Map([
            [IndicativoIndefinido, new Map([
                [Yo, ["quepo"]],
                [Yo, ["cupe"]],
                [Tu, ["cupiste"]],
                [Usted, ["cupo"]],
                [Nosotros, ["cupimos"]],
                [Vosotros, ["cupisteis"]],
                [Ustedes, ["cupieron"]],
            ])],
            [IndicativoFuturoImperfecto, new Map([
                [Yo, ["cabré"]],
                [Tu, ["cabrás"]],
                [Usted, ["cabrá"]],
                [Nosotros, ["cabremos"]],
                [Vosotros, ["cabréis"]],
                [Ustedes, ["cabrán"]],

            ])],
            [IndicativoCondicional, new Map([
                [Yo, ["cabría"]],
                [Tu, ["cabrías"]],
                [Usted, ["cabría"]],
                [Nosotros, ["cabríamos"]],
                [Vosotros, ["cabríais"]],
                [Ustedes, ["cabrían"]],

            ])],
            [SubjuntivoPresente, new Map([
                [Yo, ["quepa"]],
                [Tu, ["quepas"]],
                [Usted, ["quepa"]],
                [Nosotros, ["quepamos"]],
                [Vosotros, ["quepáis"]],
                [Ustedes, ["quepan"]],
            ])],
            [ImperativoAfirmativo, new Map([
                [Usted, ["quepa"]],
                [Nosotros, ["quepamos"]],
                [Ustedes, ["quepan"]],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, ["quepas"]],
                [Usted, ["quepa"]],
                [Nosotros, ["quepamos"]],
                [Vosotros, ["quepáis"]],
                [Ustedes, ["quepan"]]
            ])],
            [SubjuntivoImperfecto, new Map([
                [Yo, ["cupiera", "cupiese"]],
                [Tu, ["cupieras", "cupieses"]],
                [Usted, ["cupiera", "cupiese"]],
                [Nosotros, ["cupiéramos", "cupiésemos"]],
                [Vosotros, ["cupierais", "cupieseis"]],
                [Ustedes, ["cupieran", "cupiesen"]]
            ])]
        ])
    }
}
