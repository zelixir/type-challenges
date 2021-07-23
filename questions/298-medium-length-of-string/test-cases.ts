import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LengthOfString_<''>, 0>>,
  Expect<Equal<LengthOfString_<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString_<'reina'>, 5>>,
  Expect<Equal<LengthOfString_<'Sound! Euphonium'>, 16>>,
]
