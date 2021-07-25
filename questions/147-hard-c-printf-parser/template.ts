type ControlsMap = {
  c: 'char',
  s: 'string',
  d: 'dec',
  o: 'oct',
  h: 'hex',
  f: 'float',
  p: 'pointer',
}

type ParsePrintFormat<S> =
  S extends `${infer A}${infer B}${infer C}` ?
  (A extends '%' ? [...B extends keyof ControlsMap ? [ControlsMap[B]] : [], ...ParsePrintFormat<C>] : ParsePrintFormat<`${B}${C}`>)
  : []
