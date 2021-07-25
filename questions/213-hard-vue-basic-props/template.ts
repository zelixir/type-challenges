type TypeCtor<T> =
  T extends StringConstructor ? string :
  T extends NumberConstructor ? number :
  T extends BooleanConstructor ? boolean :
  T extends abstract new (..._: any) => infer R ? R :
  Equal<T, {}> extends true ? any :
  T

type TypeType<T> =
  T extends Array<infer A> ? (A extends any ? TypeCtor<A> : never) :
  T extends [infer A, ...infer B] ? TypeCtor<A> | TypeType<B> :
  T extends [] ? never :
  TypeCtor<T>
type PropertyType<X> =
  X extends { type: infer T } ? TypeType<T> : TypeCtor<X>

type PropProp<T> = { [P in keyof T]: PropertyType<T[P]> }

type ToObj<T> = { [P in keyof T]: MyReturnType<T[P]> }

declare function VueBasicProps<P, D, C, M>(options: {
  props: P,
  data: (this: PropProp<P>) => D,
  computed: C & ThisType<PropProp<P> & D & ToObj<C> & M>,
  methods: M & ThisType<PropProp<P> & D & ToObj<C> & M>
}): any

