type Camelize<T> =
  T extends [] ? [] :
  T extends [infer A, ...infer B] ? Camelize<B> extends any[] ? [Camelize<A>, ...Camelize<B>] : never :
  T extends object ? { [P in keyof T as P extends string ? CamelCase<P> : never]: Camelize<T[P]> } :
  T
