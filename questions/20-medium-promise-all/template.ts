type PA<T extends any> =
    T extends readonly [] ? [] :
    T extends readonly [Promise<infer X>, ...infer Tail] ? [X, ...PA<Tail>] :
    T extends readonly [infer X2, ...infer Tail2] ? [X2, ...PA<Tail2>] : never

declare function PromiseAll<T extends any[]>(values: readonly[...T]): Promise<PA<T>>
