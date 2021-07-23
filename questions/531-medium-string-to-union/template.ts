type StringToUnion<T extends string> = 
 T extends `${infer H}${infer Tail}` ? H | StringToUnion<Tail> : never
