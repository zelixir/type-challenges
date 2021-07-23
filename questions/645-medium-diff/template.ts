type S<O, P extends keyof O, T> = T extends true ? O[P] : P
type S1<O, O1, P, T> = P extends keyof O ?
    (P extends keyof O1 ? never : S<O, P, T>)
    : P extends keyof O1 ?
    (P extends keyof O ? never : S<O1, P, T>)
    : never

type Diff<O, O1> =
    { [P in keyof O | keyof O1 as S1<O, O1, P, false>]:
        S1<O, O1, P, true> }
