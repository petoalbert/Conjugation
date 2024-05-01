export enum Pronoun {
     Yo, Tu, Usted, Nosotros, Vosotros, Ustedes
}

export function pronounToString(pronoun: Pronoun): string {
     switch (pronoun) {
          case Pronoun.Yo: return "yo"
          case Pronoun.Tu: return "tu"
          case Pronoun.Usted: return "usted"
          case Pronoun.Nosotros: return "nosotros"
          case Pronoun.Vosotros: return "vosotros"
          case Pronoun.Ustedes: return "ustedes"
     }
}