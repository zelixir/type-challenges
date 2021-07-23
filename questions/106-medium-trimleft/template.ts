type TrimLeft<S extends string> = 
    S extends `${' ' | '\t' | '\n'}${infer Tail}` ? TrimLeft<Tail> : S
