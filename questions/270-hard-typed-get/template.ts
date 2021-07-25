type Split<S extends string, T extends string = '', R extends string[] = []> =
  S extends '' ? (T extends '' ? R : [...R, T]) :
  S extends `.${infer S1}` ? Split<S1, '', [...R, T]> :
  S extends `${infer A}${infer B}` ? Split<B, `${T}${A}`, R> : never

type GetA<T, A> =
  A extends [infer K1, ...infer K2] ? (K1 extends keyof T ? GetA<T[K1], K2> : never) : T

type Get<T, K extends string> = GetA<T, Split<K>>
