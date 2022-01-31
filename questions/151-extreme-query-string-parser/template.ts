
type GetKey<S extends string, C extends string = '', R = {}> =
  S extends `=${infer r}` ? GetValue<r, C, R> :
  S extends `&${infer _}` ? GetValue<S, C, R> :
  S extends `` ? GetValue<S, C, R> :
  S extends `${infer x}${infer y}` ? GetKey<y, `${C}${x}`, R> :
  never
type GetValue<S extends string, Key extends string, R, V extends string = ''> =
  Key extends '' ? R :
  S extends `&${infer t}` ? GetKey<t, '', GetPair<R, Key, V>> :
  S extends `` ? GetPair<R, Key, V> :
  S extends `${infer x}${infer y}` ? GetValue<y, Key, R, `${V}${x}`> :
  never
type GetPair<R, Key extends string, V extends string> =
  Key extends keyof R ?
  { [P in keyof R]: P extends Key ? FL<R[P], GetValue2<V>> : R[P] }
  : R & { [x in Key]: GetValue2<V> }
type FL<R, V> = Equal<R, V> extends true ? R : R extends any[] ? [...R, V] : [R, V]
type GetValue2<V extends string> =
  V extends '' ? true : V

type ParseQueryString<S extends string> = Debug<GetKey<S>>
type R = ParseQueryString<'k1&k2'>

