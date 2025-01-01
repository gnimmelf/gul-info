import { z } from 'zod';

// Product
export const ProductSchema = z.object({
    isActive: z.boolean(),
    title: z.string(),
    description: z.string(),
    address: z.string(),
    muncipiality: z.string(),
    zip: z.string().regex(/^\d{4}$/),
    phone: z.string(), // TODO! Get from '~/lib/form-utils
    email: z.string().email(), // TODO! Get from '~/lib/form-utils
    id: z.object({
        tb: z.string(),
        id: z.string(),
    }),
    links: z.array(
        z.object({
            href: z.string(),
        })
    ),
    tags: z.array(
        z.object({
            key: z.string(),
            name: z.string(),
        })
    )
});
export const ProductListSchema = z.array(ProductSchema)
export type ProductList = z.infer<typeof ProductListSchema>;

// Index
export const IndexSchema = z.object({
    letter: z.string().length(1),
    count: z.number()
})
export const IndexListSchema = z.array(IndexSchema)
export type IndexList = z.infer<typeof IndexListSchema>;


// Filters
export const FiltersSchema = z.object({
    letter: z.string().length(1).optional(),
    tag: z.string().optional(),
    text: z.string().optional(),
})
export type Filters = z.infer<typeof FiltersSchema>;

// Tags
export const TagSchema = z.object({
    key: z.string(),
    name: z.string(),
})
export const TagsSchema = z.array(TagSchema)
export type TagList = z.infer<typeof TagsSchema>;

// Repository
export interface Repository {
    authenticate: (token: string) => void
    signup: () => void
    signin: () => void
    invalidate: () => void
    getListings: (filters?: Filters) => Promise<ProductList>
    getIndex: () => Promise<IndexList>
    getTags: () => Promise<TagList>
}