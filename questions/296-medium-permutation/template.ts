type P<A extends any[], T, Y, X> =
    T extends A[number] ?
    X extends [A[number]] ? A : never
    : P<[...A, T], Y, Y, X>
type Permutation<T> = [T] extends [never] ? [] : P<[], T, T, [T]>

// type Permutation<T, P = T> = [T] extends [never] ?  [] : T extends any ? [T, ...Permutation<Exclude<P, T>>] : never
