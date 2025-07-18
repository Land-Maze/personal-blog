import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		image: image().optional(),
		imageAlt: z.string().optional(),
		imageCaption: z.object({
			description: z.string().optional(),
			credit: z.string().optional(),
			source: z.string().optional(),
		}).optional(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { blog };
