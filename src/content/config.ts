import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    href: z.string().url(),
  }),
});

const experiences = defineCollection({
  schema: z.object({
    title: z.string(),
    company: z.string(),
    date: z.string(),
    description: z.array(z.string()),
  }),
});

export const collections = { projects, experiences };
