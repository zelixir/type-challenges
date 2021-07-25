type GetAD<T, A> =
  A extends [infer K1, ...infer K2] ? (K1 extends keyof T ? {[P in K1]:GetAD<T[K1], K2>} : never) : T


type DeepPick<O , T extends string> =UnionToIntersection< T extends '' ? unknown :  GetAD<O, Split<T>>>
