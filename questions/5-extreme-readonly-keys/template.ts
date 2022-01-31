type GetReadonlyKeys<T, P extends keyof T = keyof T> =
  P extends unknown ?
  Equal<{ [R in P]: T[R] }, { +readonly [R in P]: T[R] }> extends true ? P : never 
  : never


