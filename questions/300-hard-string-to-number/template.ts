type Mult<A extends any[], D extends string> =
  D extends '0' ? [] :
  D extends '1' ? [...A] :
  D extends '2' ? [...A, ...Mult<A, '1'>] :
  D extends '3' ? [...A, ...Mult<A, '2'>] :
  D extends '4' ? [...A, ...Mult<A, '3'>] :
  D extends '5' ? [...A, ...Mult<A, '4'>] :
  D extends '6' ? [...A, ...Mult<A, '5'>] :
  D extends '7' ? [...A, ...Mult<A, '6'>] :
  D extends '8' ? [...A, ...Mult<A, '7'>] :
  D extends '9' ? [...A, ...Mult<A, '8'>] :
  D extends '10' ? [...A, ...Mult<A, '9'>] :
  []

type IsDigit<S extends string> = S extends "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" ? true : false
type Pow<P extends any[], ns extends string> = ns extends `${infer _}${infer b}` ? Pow<Mult<P,'10'>, b> : P
type SToA<S extends string, P extends any[] = [0]> =
  S extends '' ? [] :
  IsDigit<S> extends true ? Mult<P, S> :
  S extends `${infer t}${infer d}` ?
  [...SToA<d, P>, ...SToA<t, Pow<P, d>>] : []
type ToNumber<S extends string> = SToA<S>['length']

type xx = ToNumber<"9999">

