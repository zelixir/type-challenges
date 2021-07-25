type CamelCase1<S extends string> =
  S extends `_${infer A}${infer R}` ? `${Uppercase<A>}${CamelCase1<R>}` :
  S extends `${infer B}${infer C}` ? `${B}${CamelCase1<C>}` : S
type CamelCase<S extends string> = CamelCase1<Lowercase<S>>
