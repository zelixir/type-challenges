type FilterOut<T extends any[], F> =
  T extends [infer A, ...infer B] ? [...(Or<A extends F ? true : false, A extends never ? true : false> extends true ? [] : [A]), ...FilterOut<B, F>] : []
