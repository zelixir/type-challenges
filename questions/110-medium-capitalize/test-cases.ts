import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Capitalize_<'foobar'>, 'Foobar'>>,
  Expect<Equal<Capitalize_<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<Capitalize_<'foo bar'>, 'Foo bar'>>,
  Expect<Equal<Capitalize_<''>, ''>>,
]
