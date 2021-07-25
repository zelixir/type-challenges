type UnionToIntersection<U> = (U extends any ? (k: U) => void : 1) extends (k: infer I) => void ? I : 2



