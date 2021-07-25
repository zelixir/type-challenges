type GetRequired<T> = { [P in keyof T as P extends any ? T extends { [R in P]-?: T[P] } ? P : never : never]: T[P] }
