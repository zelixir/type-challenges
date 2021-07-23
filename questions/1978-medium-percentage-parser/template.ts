
type Parse<S, C, Coll extends string = ''> =
    S extends `${infer Sign}${infer R1}` ?
    Sign extends C ? Parse<R1, C, `${Coll}${Sign}`> :
    [Coll, S] : [Coll, S]

type Parse2<C, S> =
    S extends [...infer H, infer Last] ? [...H, ...Parse<Last, C>] : never

type PercentageParser<A extends string> =
    Parse2<'%',
        Parse2<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9',
            Parse2<'+' | '-', [A]>
        >
    > extends [...infer Re, infer _] ? Re : never

