type IsAlpha<X extends string> = Uppercase<X> extends "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z" ? true : false

type CapitalizeWords1<S extends string> = S extends `${infer b}${infer c}${infer r}` ?
  If<And<Not<IsAlpha<b>>, IsAlpha<c>>, `${b}${Capitalize<c>}${CapitalizeWords1<r>}`, `${b}${CapitalizeWords1<`${c}${r}`>}`> : S
type CapitalizeWords<S extends string> = CapitalizeWords1<` ${S}`> extends `${infer _}${infer R}` ? R : never
