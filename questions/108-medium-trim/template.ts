type Trim<S extends string> =
    S extends `${' ' | '\t' | '\n'}${infer Tail}` ? Trim<Tail> :
    S extends `${infer Head}${' ' | '\t' | '\n'}` ? Trim<Head> :
    S
