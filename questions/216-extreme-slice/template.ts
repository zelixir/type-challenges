type IsNegative<T extends number> = `${T}` extends `-${infer _}` ? true : false
type NormalizeIndex<Arr extends any[], X extends number, R extends any[] = []> =
  `-${R['length']}` extends `${X}` ? Arr['length'] : 
  Arr extends [infer _, ...infer b] ? NormalizeIndex<b, X, [...R, 1]> : never
type Slice<Arr extends any[], Start extends number = 0, End extends number = Arr['length'],
  B = false, Res extends any[] = [],
  Index extends any[] = [], I = Index['length']> =
  IsNegative<Start> extends true ? Slice<Arr, NormalizeIndex<Arr, Start>, End, B, Res, Index> :
  IsNegative<End> extends true ? Slice<Arr, Start, NormalizeIndex<Arr, End>, B, Res, Index> :
  [Start, false] extends [I, B] ? Slice<Arr, Start, End, true, Res, Index> :
  End extends I ? Res :
  Arr extends [infer a, ...infer b] ?
  Slice<b, Start, End, B, [...Res, ...B extends true ? [a] : []], [...Index, 0]> :
  Res
