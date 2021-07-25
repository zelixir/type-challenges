type Replace1<A extends string, B extends string, C extends string> =
    C extends `${A}${infer Tail}` ? `${B}${Tail}` : C
type Capitalize_<S extends string> =
Replace1<'a', 'A',
Replace1<'b', 'B',
Replace1<'c', 'C',
Replace1<'d', 'D',
Replace1<'e', 'E',
Replace1<'f', 'F',
Replace1<'g', 'G',
Replace1<'h', 'H',
Replace1<'i', 'I',
Replace1<'j', 'J',
Replace1<'k', 'K',
Replace1<'l', 'L',
Replace1<'m', 'M',
Replace1<'n', 'N',
Replace1<'o', 'O',
Replace1<'p', 'P',
Replace1<'q', 'Q',
Replace1<'r', 'R',
Replace1<'s', 'S',
Replace1<'t', 'T',
Replace1<'u', 'U',
Replace1<'v', 'V',
Replace1<'w', 'W',
Replace1<'x', 'X',
Replace1<'y', 'Y',
Replace1<'z', 'Z', S>>>>>>>>>>>>>>>>>>>>>>>>>>


    