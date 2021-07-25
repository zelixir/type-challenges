type Contains<R extends string, X extends string> = 
R extends `${X}${infer _}`? true:
R extends `${infer _}${infer R2}` ? Contains<R2, X>: false


type DropString<S extends string, R extends string> = 
  S extends `${infer A}${infer B}` ? 
    `${If<Contains<R, A>, '', A>}${DropString<B, R>}` : S
