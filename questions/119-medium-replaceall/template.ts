type ReplaceAll<S extends string, From extends string, To extends string> = 
From extends '' ? S :
S extends `${From}${infer Tail}` ? `${To}${ReplaceAll<Tail, From, To>}` :
S extends `${infer H}${infer Tail2}` ? `${H}${ReplaceAll<Tail2, From, To>}` : S

