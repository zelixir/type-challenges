import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CamelCase_<'foo-bar-baz'>, 'fooBarBaz'>>,
  Expect<Equal<CamelCase_<'foo-Bar-Baz'>, 'foo-Bar-Baz'>>,
  Expect<Equal<CamelCase_<'foo-bar'>, 'fooBar'>>,
  Expect<Equal<CamelCase_<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<CamelCase_<'foo--bar----baz'>, 'foo-Bar---Baz'>>,
  Expect<Equal<CamelCase_<'a-b-c'>, 'aBC'>>,
  Expect<Equal<CamelCase_<'a-b-c-'>, 'aBC-'>>,
  Expect<Equal<CamelCase_<'ABC'>, 'ABC'>>,
  Expect<Equal<CamelCase_<'-'>, '-'>>,
  Expect<Equal<CamelCase_<''>, ''>>,
  Expect<Equal<CamelCase_<'😎'>, '😎'>>,
]
