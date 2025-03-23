import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    href: z.string().url(),
  }),
});

const experiences = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experiences' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    date: z.string(),
    description: z.array(z.string()),
  }),
});

export const collections = { projects, experiences };
