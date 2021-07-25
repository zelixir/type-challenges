

declare function defineStore<S, G, A>(store: {
  id: string,
  state: () => S,
  getters: G & ThisType<Readonly<S & ToObj<G>>>,
  actions: A & ThisType<S & Readonly<ToObj<G>> & A>
}): S & Readonly<ToObj<G>> & A
