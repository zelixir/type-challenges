type SplitArr<A, B extends any[] = []> = A extends [infer a, ...infer b] ? [[...B, a], b] | SplitArr<b, [...B, a]> : never
type BC<X, R> = X extends [infer a, infer b] ? a extends any[] ? b extends any[] ? (..._: a) => Curry<(..._: b) => R> : never : never : never
type Curry<F> = F extends ((...args: infer Arr) => infer R) ? Arr extends [] ? R : UnionToIntersection<BC<SplitArr<Arr>, R>> : never
declare function DynamicParamsCurrying<F>(fn: F): Curry<F>

