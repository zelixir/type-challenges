type Flatten<T> =
    T extends [infer H, ...infer Tail] ? [...Flatten<H>, ...Flatten<Tail>]
    : T extends [] ? [] : [T]
