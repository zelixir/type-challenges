type RemoveIndexSignature<T> =
    { [P in keyof T as P extends string ? (string extends P ? never : P) : never]: T[P] }
