
type DeepObjectToUniq<O extends object> = {
  [P in keyof O]: O[P] extends object ? DeepObjectToUniq<O[P]> & { _uniq?: [O, P] } : O[P]
}
