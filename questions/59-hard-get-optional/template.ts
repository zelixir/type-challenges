type GetOptional<T> = { [P in keyof T as P extends any ? T extends { [R in P]-?: T[P] } ? never : P : never]: T[P] }
