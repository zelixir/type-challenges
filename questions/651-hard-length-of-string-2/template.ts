type StringToArrayF<S extends string, R extends any[] = []> =
  S extends `${infer X1}${infer X2}${infer X3}${infer X4}${infer X5}${infer X6}${infer X7}${infer X8}${infer X9}${infer X10}${infer Tail}` ? StringToArrayF<Tail, [1, 2
    , 3, 4, 5, 6, 7, 8, 9, 10, ...R]>
  : S extends `${infer X}${infer Tail}` ? StringToArrayF<Tail, [1, ...R]>
  : R

type LengthOfString<S extends string> = StringToArrayF<S>['length']

