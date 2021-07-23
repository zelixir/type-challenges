type Last<T extends any[]> = T extends [... infer _, infer B] ? B : never
