type Debug<T> = { [K in keyof T]: T[K] }

type Enum1<T extends readonly string[], N extends boolean = false, C extends string[] = []> =
  T extends readonly [infer X, ...infer R] ?
  X extends string ? R extends string[] ?
  { +readonly [P in Capitalize<X>]: If<N, C['length'], X> } & Enum1<R, N, [...C, X]>
  : never : never : {}
type Enum<T extends readonly string[], N extends boolean = false> = Debug<Enum1<T, N>>


