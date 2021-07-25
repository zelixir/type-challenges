type Join<D extends string, A extends any[]> =
  A extends [infer X] ? X extends string ? X : never :
  A extends [infer X, ...infer Y] ?
  (X extends string ?
    `${X}${D}${Join<D, Y>}` : never)
  : ``
declare function join<T extends string>(delimiter: T): <A extends string[]>(...parts: A) => Join<T, A>

