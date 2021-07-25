type Curring_<F> = 
F extends (args: infer A1) => infer R ?
  (a1: A1) => R : 
F extends (...args: [infer A1, ...infer As]) => infer R ?
  (a1: A1) => Curring_<(...args: [...As]) => R> : never

declare function Currying<F>(fn: F): Curring_<F>

