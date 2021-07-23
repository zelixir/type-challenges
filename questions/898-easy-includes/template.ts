
type Equal<X, Y> =
    (<T>() => T extends X ? 1 : 2) extends
    (<T>() => T extends Y ? 1 : 2) ? true : false
type Or<A, B> = A extends true ? true : B extends true ? true : false
type Includes<T extends readonly any[], U> =
    T extends [infer H, ...infer Tail] ? Or<Equal<H, U>, Includes<Tail, U>> : false

