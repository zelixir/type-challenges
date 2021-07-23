type DropChar<S extends string, C extends string> =
    S extends `${infer F}${infer G}` ?
    `${F extends C ? '' : F}${DropChar<G, C>}` : ''

type X = DropChar<'butter fly!', ' '>
