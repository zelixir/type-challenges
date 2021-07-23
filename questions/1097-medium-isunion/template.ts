type IsUnion<T> = Not<Equal<[T], T extends any ? [T] : never>>

