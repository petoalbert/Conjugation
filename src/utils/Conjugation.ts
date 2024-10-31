import { Tense } from "./Tense"
import { VerbType } from "./VerbType"
import { Pronoun } from "./Pronoun"
import { irregularVerbs } from "./IrregularVerbs"

export function conjugate(verb: string, tense: Tense, pronoun: Pronoun): string | undefined {
    let base = verb
    let reflexivePronoun: string | null = null
    let prefix: string = ""
    let suffix: string = ""
    
    if (verb.endsWith("se")) {
        switch (pronoun) {
            case Pronoun.Yo: reflexivePronoun = "me"; break
            case Pronoun.Tu: reflexivePronoun = "te"; break
            case Pronoun.Usted: reflexivePronoun = "se"; break
            case Pronoun.Nosotros: reflexivePronoun = "nos"; break
            case Pronoun.Vosotros: reflexivePronoun = "os"; break
            case Pronoun.Ustedes: reflexivePronoun = "se"; break
        }

        base = verb.slice(0, -2)
    }

    switch (tense) {
        case Tense.IndicativoPresente: prefix = reflexivePronoun ? reflexivePronoun + " " : "" ; break;
        case Tense.IndicativoImperfecto: prefix = reflexivePronoun ? reflexivePronoun + " " : "" ; break;
        case Tense.IndicativoIndefinido: prefix = reflexivePronoun ? reflexivePronoun + " " : "" ; break;
        case Tense.IndicativoFuturoImperfecto: prefix = reflexivePronoun ? reflexivePronoun + " " : "" ; break;
        case Tense.IndicativoCondicional: prefix = reflexivePronoun ? reflexivePronoun + " " : "" ; break;
        case Tense.SubjuntivoPresente: prefix = reflexivePronoun ? reflexivePronoun + " " : "" ; break;
        case Tense.ImperativoAfirmativo: suffix = reflexivePronoun ?? ""; break;
        case Tense.ImperativoNegativo: prefix = "no " + (reflexivePronoun ? reflexivePronoun + " " : "") ; break;
    }

    let conjugatedBase = conjugateIrregular(verb, base, tense, pronoun) ?? conjugateRegular(base, tense, pronoun)

    return prefix + conjugatedBase + suffix
}

export function conjugateIrregular(verb: string, base: string, tense: Tense, pronoun: Pronoun): string | undefined {
    return irregularVerbs.get(verb)?.forms(base)?.get(tense)?.get(pronoun)
}

function conjugateRegular(verb: string, tense: Tense, pronoun: Pronoun): string | undefined {
    let verbType = determineVerbType(verb)

    if (verbType == VerbType.AR) {
        return conjugateAr(verb, tense, pronoun)
    } else if (verbType == VerbType.ER) {
        return conjugateEr(verb, tense, pronoun)
    } else if (verbType == VerbType.IR) {
        return conjugateIr(verb, tense, pronoun)
    } else {
        return undefined
    }
}

function determineVerbType(verb: string): VerbType | null {
    if (verb.endsWith("ar") || verb.endsWith("arse")) {
        return VerbType.AR
    } else if (verb.endsWith("er") || verb.endsWith("erse")) {
        return VerbType.ER
    } else if (verb.endsWith("ir") || verb.endsWith("irse")) {
        return VerbType.IR
    } else {
        return null
    }
}

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

function conjugateAr(verb: string, tense: Tense, pronoun: Pronoun): string | undefined {
    let base: string
    let reflexive: boolean
    
    if (verb.endsWith("arse")) {
        base = verb.slice(0, -4)
        reflexive = true
    } else {
        base = verb.slice(0, -2)
        reflexive = false
    }

    switch (tense) {
        case IndicativoPresente:
            switch (pronoun) {
                case Yo: return base + "o"
                case Tu: return base + "as"
                case Usted: return base + "a"
                case Nosotros: return base + "amos"
                case Vosotros: return base + "áis"
                case Ustedes: return base + "an"
            }
        case IndicativoImperfecto:
            switch (pronoun) {
                case Yo: return base + "aba"
                case Tu: return base + "abas"
                case Usted: return base + "aba"
                case Nosotros: return base + "ábamos"
                case Vosotros: return base + "abais"
                case Ustedes: return base + "aban"
            }
        case IndicativoIndefinido:
            switch (pronoun) {
                case Yo: return base + "é"
                case Tu: return base + "aste"
                case Usted: return base + "ó"
                case Nosotros: return base + "amos"
                case Vosotros: return base + "asteis"
                case Ustedes: return base + "aron"
            }
        case IndicativoFuturoImperfecto:
            switch (pronoun) {
                case Yo: return base + "aré"
                case Tu: return base + "arás"
                case Usted: return base + "ará"
                case Nosotros: return base + "aremos"
                case Vosotros: return base + "aréis"
                case Ustedes: return base + "arán"
            }
        case IndicativoCondicional:
            switch (pronoun) {
                case Yo: return base + "aría"
                case Tu: return base + "arías"
                case Usted: return base + "aría"
                case Nosotros: return base + "aríamos"
                case Vosotros: return base + "aríais"
                case Ustedes: return base + "arían"

            }
        case SubjuntivoPresente:
            switch (pronoun) {
                case Yo: return base + "e"
                case Tu: return base + "es"
                case Usted: return base + "e"
                case Nosotros: return base + "emos"
                case Vosotros: return base + "éis"
                case Ustedes: return base + "en"
            }
        case ImperativoAfirmativo:
            switch (pronoun) {
                case Yo: return undefined
                case Tu: return base + "a"
                case Usted: return base + "e"
                case Nosotros: return base + "emos"
                case Vosotros: return base + "ad"
                case Ustedes: return base + "en"
            }
        case ImperativoNegativo:
            switch (pronoun) {
                case Yo: return undefined
                case Tu: return base + "es"
                case Usted: return base + "e"
                case Nosotros: return base + "emos"
                case Vosotros: return base + "eis"
                case Ustedes: return base + "en"

            }
    }
}

function conjugateEr(verb: string, tense: Tense, pronoun: Pronoun): string | undefined {
    let base = verb.slice(0, -2)

    switch (tense) {
        case IndicativoPresente:
            switch (pronoun) {
                case Yo: return base + "o"
                case Tu: return base + "es"
                case Usted: return base + "e"
                case Nosotros: return base + "emos"
                case Vosotros: return base + "éis"
                case Ustedes: return base + "en"
            }
        case IndicativoImperfecto:
            switch (pronoun) {
                case Yo: return base + "ía"
                case Tu: return base + "ías"
                case Usted: return base + "ía"
                case Nosotros: return base + "íamos"
                case Vosotros: return base + "íais"
                case Ustedes: return base + "ían"
            }
        case IndicativoIndefinido:
            switch (pronoun) {
                case Yo: return base + "í"
                case Tu: return base + "iste"
                case Usted: return base + "ió"
                case Nosotros: return base + "imos"
                case Vosotros: return base + "isteis"
                case Ustedes: return base + "ieron"
            }
        case IndicativoFuturoImperfecto:
            switch (pronoun) {
                case Yo: return base + "eré"
                case Tu: return base + "erás"
                case Usted: return base + "erá"
                case Nosotros: return base + "eremos"
                case Vosotros: return base + "eréis"
                case Ustedes: return base + "erán"
            }
        case IndicativoCondicional:
            switch (pronoun) {
                case Yo: return base + "ería"
                case Tu: return base + "erías"
                case Usted: return base + "ería"
                case Nosotros: return base + "eríamos"
                case Vosotros: return base + "eríais"
                case Ustedes: return base + "erían"
            }
        case SubjuntivoPresente:
            switch (pronoun) {
                case Yo: return base + "a"
                case Tu: return base + "as"
                case Usted: return base + "a"
                case Nosotros: return base + "amos"
                case Vosotros: return base + "áis"
                case Ustedes: return base + "an"
            }
        case ImperativoAfirmativo:
            switch (pronoun) {
                case Yo: return undefined
                case Tu: return base + "e"
                case Usted: return base + "a"
                case Nosotros: return base + "amos"
                case Vosotros: return base + "ed"
                case Ustedes: return base + "an"
            }
        case ImperativoNegativo:
            switch (pronoun) {
                case Yo: return undefined
                case Tu: return base + "as"
                case Usted: return base + "a"
                case Nosotros: return base + "amos"
                case Vosotros: return base + "áis"
                case Ustedes: return base + "an"

            }
    }
}

function conjugateIr(verb: string, tense: Tense, pronoun: Pronoun): string | undefined {
    let base = verb.slice(0, -2)

    switch (tense) {
        case IndicativoPresente:
            switch (pronoun) {
                case Yo: return base + "o"
                case Tu: return base + "es"
                case Usted: return base + "e"
                case Nosotros: return base + "imos"
                case Vosotros: return base + "ís"
                case Ustedes: return base + "en"

            }
        case IndicativoImperfecto:
            switch (pronoun) {
                case Yo: return base + "ía"
                case Tu: return base + "ías"
                case Usted: return base + "ía"
                case Nosotros: return base + "íamos"
                case Vosotros: return base + "íais"
                case Ustedes: return base + "ían"
            }
        case IndicativoIndefinido:
            switch (pronoun) {
                case Yo: return base + "í"
                case Tu: return base + "iste"
                case Usted: return base + "ió"
                case Nosotros: return base + "imos"
                case Vosotros: return base + "isteis"
                case Ustedes: return base + "ieron"
            }
        case IndicativoFuturoImperfecto:
            switch (pronoun) {
                case Yo: return base + "iré"
                case Tu: return base + "irás"
                case Usted: return base + "irá"
                case Nosotros: return base + "iremos"
                case Vosotros: return base + "iréis"
                case Ustedes: return base + "irán"
            }
        case IndicativoCondicional:
            switch (pronoun) {
                case Yo: return base + "iría"
                case Tu: return base + "irías"
                case Usted: return base + "iría"
                case Nosotros: return base + "iríamos"
                case Vosotros: return base + "iríais"
                case Ustedes: return base + "irían"
            }
        case SubjuntivoPresente:
            switch (pronoun) {
                case Yo: return base + "a"
                case Tu: return base + "as"
                case Usted: return base + "a"
                case Nosotros: return base + "amos"
                case Vosotros: return base + "áis"
                case Ustedes: return base + "an"
            }
        case ImperativoAfirmativo:
            switch (pronoun) {
                case Yo: return undefined
                case Tu: return base + "e"
                case Usted: return base + "a"
                case Nosotros: return base + "amos"
                case Vosotros: return base + "id"
                case Ustedes: return base + "an"
            }
        case ImperativoNegativo:
            switch (pronoun) {
                case Yo: return undefined
                case Tu: return base + "as"
                case Usted: return base + "a"
                case Nosotros: return base + "amos"
                case Vosotros: return base + "áis"
                case Ustedes: return base + "an"
            }
    }
}