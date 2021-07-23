type Lowers = 'a'|'b'|'c'|'d'|'e'|'f'|'g'|'h'|'i'|'j'|'k'|'l'|'m'|'n'|'o'|'p'|'q'|'r'|'s'|'t'|'u'|'v'|'w'|'x'|'y'|'z'
type And<a, b> = a extends true ? b extends true ? true : false : false
type If_<b, t, f> = b extends true ? t : f
type CamelCase_<S> =
    S extends `-${infer F}${infer G}` ? F extends Lowers ? `${Uppercase<F>}${CamelCase_<G>}`
    : NextCamelCase<S> : NextCamelCase<S>
type NextCamelCase<S> = S extends `${infer F}${infer G}` ? `${F}${CamelCase_<G>}` : ''



