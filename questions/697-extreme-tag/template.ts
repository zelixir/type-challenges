type PutTag<Tags extends any[], Tag extends string> = Includes<Tags, Tag> extends true ? Tags : [...Tags, Tag]
type GetTags<B> = B extends { __tags__?: infer Tags } ? Tags : []
type Tag<B, T extends string> = GetTags<B> extends [...infer Tags] ? 
UnTag<B> & { __tags__?: PutTag<Tags, T> } 
: never
type UnTag<B> = Omit<B, '__tags__'>
type HasTag<B, T> = T extends string ? GetTags<B> extends [...infer Tags] ? Includes<Tags, T> : false : false
type Subset<Big, Small> = Big extends any[] ? Small extends [infer a, ...infer b] ? And<Includes<Big, a>, Subset<Big, b>> : true : false
type HasTags<B, T extends readonly string[]> = Subset<GetTags<B>, T>
type EqSet<A, B> = And<Subset<A, B>, Subset<B, A>>
type HasExactTags<B, T extends readonly string[]> = EqSet<GetTags<B>, T>


