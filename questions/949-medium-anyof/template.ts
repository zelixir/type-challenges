type Not<T> = T extends false ? true : false
type AnyOf<T extends readonly any[]> =
    T extends [infer F, ...infer G]
    ? Or<Not<Includes<[0, false, [], '', {}], F>>, AnyOf<G>> : false
