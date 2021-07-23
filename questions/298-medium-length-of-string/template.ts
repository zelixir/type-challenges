type StringToArray<S extends string> =
    S extends `${infer X}${infer Tail}` ? [X, ...StringToArray<Tail>]
    : []
type LengthOfString_<S extends string> =
    StringToArray<S>['length']


