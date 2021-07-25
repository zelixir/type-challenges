type LastUnion<T> = UnionToIntersection<T extends unknown ? () => T : never> extends (() => infer R) ? R : never

type UnionToTuple<T> =
  [T] extends [never] ? [] :
  [LastUnion<T>, ...UnionToTuple<Exclude<T, LastUnion<T>>>]
