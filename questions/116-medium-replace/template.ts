type Replace<S extends string, From extends string, To extends string> =
    From extends '' ? S :
    S extends `${From}${infer Tail}` ? `${To}${Tail}` :
    S extends `${infer H}${infer Tail2}` ? `${H}${Replace<Tail2, From, To>}` : S
