type Kaba<S, T> =
    S extends 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' ?
    `${T extends false ? `-` : ''}${Lowercase<S>}` : S
type KebabCase<S, T = true> =
    S extends `${infer F}${infer G}` ? `${Kaba<F, T>}${KebabCase<G, false>}` : S

