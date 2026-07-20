import { defineCollection, z } from 'astro:content';

// Reference schema for citations/sources
const referenceSchema = z.object({
  id: z.string(), // Used for footnote anchors
  type: z.enum(['book', 'article', 'youtube', 'podcast', 'website', 'primary-source', 'commentary']),
  title: z.string(),
  author: z.string().optional(),
  url: z.string().url().optional(),
  year: z.number().optional(),
  publisher: z.string().optional(),
  description: z.string().optional(),
});

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string().default('Nazaryah'),
    category: z.enum([
      'The Scrolls',
      'Scripture Unfiltered',
      'Buried in Plain Sight',
      'Parables',
      'The Trinity Files',
      'The Sender and The Sent',
      'The Bearer',
      'Five Titles, One Christ',
      'What the Pulpit Buried',
      'Word Studies',
      'The Law Still Stands',
      'The Feasts',
    ]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    references: z.array(referenceSchema).optional(),
    verse: z.string().optional(),
    subtitle: z.string().optional(),
    // Chapter number when this post is a chapter of a book on the bookshelf.
    chapter: z.number().optional(),
    // Cross-reference clusters (see src/data/associations.js). A study joins a
    // cluster by listing its key here; the Associated Studies panel and the
    // /associations coverage map pick it up automatically.
    associations: z.array(z.string()).default([]),
    // One-line orientation shown under the title and in the associations panel.
    // Falls back to `subtitle` then `description` when omitted.
    deck: z.string().optional(),
    // Optional position within an association cluster (lower sorts first).
    order: z.number().optional(),
    // Single strongest kin study, rendered as "Read Next" at the foot of the post.
    companion: z.string().optional(),
  }),
});

// Glossary collection for Hebrew/Greek terms
const glossaryCollection = defineCollection({
  type: 'content',
  schema: z.object({
    term: z.string(), // Hebrew or Greek term
    transliteration: z.string(), // How to pronounce it
    language: z.enum(['hebrew', 'greek']),
    partOfSpeech: z.enum(['noun', 'verb', 'adjective', 'adverb', 'preposition', 'conjunction', 'particle']).optional(),
    definition: z.string(), // Brief definition
    etymology: z.string().optional(), // Word origin/roots
    semanticRange: z.array(z.string()).optional(), // Range of meanings
    usage: z.string().optional(), // How it's used in context
    examples: z.array(z.object({
      reference: z.string(), // Bible reference
      text: z.string(), // The verse or phrase
      translation: z.string().optional(),
    })).optional(),
    relatedTerms: z.array(z.string()).optional(), // Links to other glossary entries
    relatedPosts: z.array(z.string()).optional(), // Links to blog posts
    strongsNumber: z.string().optional(), // Strong's concordance number
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  posts: postsCollection,
  glossary: glossaryCollection,
};
