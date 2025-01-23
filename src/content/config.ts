import { defineCollection, z } from 'astro:content'

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    role: z.string(),
    description: z.string(),
    heroImage: z.string(),
    gallery: z.array(z.object({
      image: z.string(),
      caption: z.string()
    })),
    nextProject: z.object({
      title: z.string(),
      image: z.string(),
      slug: z.string()
    })
  })
})

export const collections = {
  projects
}
