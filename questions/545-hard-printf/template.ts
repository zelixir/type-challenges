type SType<T> =
  T extends 'string' ? string :
  T extends 'dec' ? number :
  never

type TypedPrintf<T extends any[]> =
  T extends [infer A, ...infer B] ? (_: SType<A>) => TypedPrintf<B> : string

type Format<T extends string> = TypedPrintf<ParsePrintFormat<T>>

