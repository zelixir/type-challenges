type Awaited<X extends Promise<any>> = X extends Promise<infer T> ? T : never


