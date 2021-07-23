type R<A extends string, B extends string, C extends string> =
    C extends `${A}${infer Tail}` ? `${B}${Tail}` : C
type Capitalize_<S extends string> =
R<'a', 'A',
R<'b', 'B',
R<'c', 'C',
R<'d', 'D',
R<'e', 'E',
R<'f', 'F',
R<'g', 'G',
R<'h', 'H',
R<'i', 'I',
R<'j', 'J',
R<'k', 'K',
R<'l', 'L',
R<'m', 'M',
R<'n', 'N',
R<'o', 'O',
R<'p', 'P',
R<'q', 'Q',
R<'r', 'R',
R<'s', 'S',
R<'t', 'T',
R<'u', 'U',
R<'v', 'V',
R<'w', 'W',
R<'x', 'X',
R<'y', 'Y',
R<'z', 'Z', S>>>>>>>>>>>>>>>>>>>>>>>>>>


    