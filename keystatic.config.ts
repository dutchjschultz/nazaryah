import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'dutchjschultz/nazaryah',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        date: fields.date({ label: 'Date' }),
        author: fields.text({ label: 'Author', defaultValue: 'Nazaryah' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Exegetical Studies', value: 'Exegetical Studies' },
            { label: 'Theological Themes', value: 'Theological Themes' },
            { label: 'Historical Context', value: 'Historical Context' },
            { label: 'Book-by-Book Commentary', value: 'Book-by-Book Commentary' },
            { label: 'Word Studies', value: 'Word Studies' },
            { label: 'Fresh Perspectives', value: 'Fresh Perspectives' },
          ],
          defaultValue: 'Exegetical Studies',
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.value,
        }),
        featured: fields.checkbox({ label: 'Featured', defaultValue: false }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),

    glossary: collection({
      label: 'Glossary',
      slugField: 'transliteration',
      path: 'src/content/glossary/*',
      format: { contentField: 'content' },
      schema: {
        term: fields.text({ label: 'Term (Hebrew/Greek)' }),
        transliteration: fields.slug({ name: { label: 'Transliteration' } }),
        language: fields.select({
          label: 'Language',
          options: [
            { label: 'Hebrew', value: 'hebrew' },
            { label: 'Greek', value: 'greek' },
          ],
          defaultValue: 'hebrew',
        }),
        partOfSpeech: fields.select({
          label: 'Part of Speech',
          options: [
            { label: 'Noun', value: 'noun' },
            { label: 'Verb', value: 'verb' },
            { label: 'Adjective', value: 'adjective' },
            { label: 'Adverb', value: 'adverb' },
            { label: 'Preposition', value: 'preposition' },
            { label: 'Conjunction', value: 'conjunction' },
            { label: 'Particle', value: 'particle' },
          ],
          defaultValue: 'noun',
        }),
        definition: fields.text({ label: 'Definition', multiline: true }),
        etymology: fields.text({ label: 'Etymology', multiline: true }),
        semanticRange: fields.array(fields.text({ label: 'Meaning' }), {
          label: 'Semantic Range',
          itemLabel: (props) => props.value,
        }),
        usage: fields.text({ label: 'Usage Notes', multiline: true }),
        examples: fields.array(
          fields.object({
            reference: fields.text({ label: 'Bible Reference' }),
            text: fields.text({ label: 'Original Text', multiline: true }),
            translation: fields.text({ label: 'Translation', multiline: true }),
          }),
          {
            label: 'Examples',
            itemLabel: (props) => props.fields.reference.value,
          },
        ),
        relatedTerms: fields.array(fields.text({ label: 'Term' }), {
          label: 'Related Terms',
          itemLabel: (props) => props.value,
        }),
        relatedPosts: fields.array(fields.text({ label: 'Post Slug' }), {
          label: 'Related Posts',
          itemLabel: (props) => props.value,
        }),
        strongsNumber: fields.text({ label: "Strong's Number" }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),

    pathways: collection({
      label: 'Learning Pathways',
      slugField: 'title',
      path: 'src/content/pathways/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        difficulty: fields.select({
          label: 'Difficulty',
          options: [
            { label: 'Beginner', value: 'beginner' },
            { label: 'Intermediate', value: 'intermediate' },
            { label: 'Advanced', value: 'advanced' },
          ],
          defaultValue: 'beginner',
        }),
        estimatedHours: fields.number({ label: 'Estimated Hours' }),
        category: fields.text({ label: 'Category' }),
        objectives: fields.array(fields.text({ label: 'Objective' }), {
          label: 'Learning Objectives',
          itemLabel: (props) => props.value,
        }),
        prerequisites: fields.array(fields.text({ label: 'Prerequisite' }), {
          label: 'Prerequisites',
          itemLabel: (props) => props.value,
        }),
        lessons: fields.array(
          fields.object({
            title: fields.text({ label: 'Lesson Title' }),
            slug: fields.text({ label: 'Slug or URL' }),
            duration: fields.number({ label: 'Duration (minutes)' }),
            type: fields.select({
              label: 'Type',
              options: [
                { label: 'Article', value: 'article' },
                { label: 'Video', value: 'video' },
                { label: 'Exercise', value: 'exercise' },
                { label: 'Quiz', value: 'quiz' },
              ],
              defaultValue: 'article',
            }),
            description: fields.text({ label: 'Description', multiline: true }),
          }),
          {
            label: 'Lessons',
            itemLabel: (props) => props.fields.title.value,
          },
        ),
        featured: fields.checkbox({ label: 'Featured', defaultValue: false }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
});
