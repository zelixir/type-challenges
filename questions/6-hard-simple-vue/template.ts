
type Builtins = {
  alert: (s: string) => any
}

// type DataType<T> = T extends {data: (this: null)=> infer R} ? R : never

type IsVue<D extends null, DF extends (this: null) => D
// , C, M, T extends {}
> = D|DF//|C|M|T

// declare function SimpleVue<
//   T ,
//   R = IsVue<ThisParameterType<T extends {data:any}?T['data']: never>,
//   T extends {data:any}?T['data']: never
  // ,       T['data'], T['computed'], T['methods'], T
      // >>(options: T): R

  // {
  //   data: (this: null) => unknown
  // }



type FnToObject <T> = {
  [K in keyof T]: MyReturnType<T[K]>
}


declare function SimpleVue<D, C, M>(options: {
  data?: (this:null) => D;
  computed?: C & ThisType<D & FnToObject<C>>
  methods?: M & ThisType<D & FnToObject<C> & M>; // Type of 'this' in methods is D & M
}): any

declare function alert(a: any): void;

