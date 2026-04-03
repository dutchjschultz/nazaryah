# References System Guide

## How It Works

The references system automatically displays scholarly citations at the bottom of blog posts that have references in their frontmatter.

## Where to See References

Visit: `http://localhost:4321/blog/covenant-hesed-faithfulness`

Scroll to the bottom of the article to see the **"References & Further Study"** section with:
- 📚 Books & Commentaries
- 📄 Articles & Papers
- 🎥 Video Resources
- 🎙️ Audio Resources
- 🌐 Web Resources
- 📜 Primary Sources
- 📖 Scholarly Commentaries

## Adding References to a Blog Post

Edit the frontmatter of any post in `src/content/posts/`:

```yaml
---
title: "Your Article Title"
# ... other frontmatter fields
references:
  - id: "1"
    type: "book"
    title: "Theology of the Old Testament"
    author: "Gerhard von Rad"
    year: 1962
    publisher: "Westminster John Knox Press"
    description: "Classic systematic theology. Vol 1, pp. 370-383."

  - id: "2"
    type: "youtube"
    title: "The BibleProject: Hesed - God's Loyal Love"
    url: "https://www.youtube.com/watch?v=VFxHu5sLkKo"
    description: "5-minute animated explanation with visual examples."

  - id: "3"
    type: "article"
    title: "The Meaning of Hesed in the Hebrew Bible"
    author: "Katherine Sakenfeld"
    year: 1978
    url: "https://www.jstor.org/stable/3265778"
    description: "Journal article examining hesed in ancient Near Eastern context."
---
```

## Reference Types

### Book
```yaml
- id: "1"
  type: "book"
  title: "Book Title"
  author: "Author Name"
  year: 2020
  publisher: "Publisher Name"
  description: "Brief note about relevance"
```

### Article
```yaml
- id: "2"
  type: "article"
  title: "Article Title"
  author: "Author Name"
  year: 2020
  url: "https://journal.com/article"
  description: "What this article covers"
```

### YouTube Video
```yaml
- id: "3"
  type: "youtube"
  title: "Video Title"
  url: "https://www.youtube.com/watch?v=..."
  description: "What this video explains"
  author: "Channel Name" # optional
```

### Podcast
```yaml
- id: "4"
  type: "podcast"
  title: "Episode Title"
  url: "https://podcast.com/episode"
  description: "What this episode discusses"
  author: "Host Name" # optional
```

### Website
```yaml
- id: "5"
  type: "website"
  title: "Page Title"
  url: "https://example.com"
  description: "What resource this provides"
```

### Primary Source
```yaml
- id: "6"
  type: "primary-source"
  title: "Dead Sea Scrolls - 1QS"
  url: "https://www.deadseascrolls.org.il/"
  description: "Rule of the Community text"
```

### Commentary
```yaml
- id: "7"
  type: "commentary"
  title: "Word Biblical Commentary: Genesis 1-15"
  author: "Gordon Wenham"
  year: 1987
  publisher: "Zondervan"
  description: "Technical commentary with detailed philology"
```

## Using Inline Citations (Optional)

If you want to cite sources in your article text, use markdown links to jump to the reference:

```markdown
This understanding of hesed is supported by recent scholarship[[1]](#ref-1),
though some dispute this interpretation[[2]](#ref-2).
```

This creates clickable footnote numbers that jump to the reference section.

## Field Details

### Required Fields
- `id` - Unique identifier (use numbers: "1", "2", "3")
- `type` - One of: book, article, youtube, podcast, website, primary-source, commentary
- `title` - The title of the resource

### Optional Fields
- `author` - Author or creator name
- `year` - Publication year (number, not string)
- `publisher` - Publishing house or journal
- `url` - Web link (required for youtube, podcast, website)
- `description` - Brief note explaining relevance to your article

## Best Practices

### 1. Mix Source Types
Include diverse sources:
- Academic books for depth
- YouTube videos for accessibility
- Podcasts for different learning styles
- Primary sources for original texts
- Articles for specific points

### 2. Order by Relevance
List most important sources first within each category.

### 3. Add Context
Use the `description` field to explain:
- Why this source is relevant
- What specific content it addresses
- Page numbers for books
- Chapters or sections for longer works

### 4. Verify URLs
Make sure all links work before publishing.

### 5. Give Credit
Always cite your sources. This builds:
- Academic credibility
- Reader trust
- Scholarly conversation
- SEO (external links to quality sources)

## Example: Full Blog Post with References

```yaml
---
title: "Understanding the Sabbath: שַׁבָּת (Shabbat)"
description: "Explore the theological and practical dimensions of Sabbath rest in Scripture."
date: 2026-01-15
category: "Word Studies"
tags: ["Hebrew", "Sabbath", "Ten Commandments"]
references:
  - id: "1"
    type: "book"
    title: "The Sabbath: Its Meaning for Modern Man"
    author: "Abraham Joshua Heschel"
    year: 1951
    publisher: "Farrar, Straus and Giroux"
    description: "Poetic meditation on Sabbath as sanctuary in time. Essential reading."

  - id: "2"
    type: "youtube"
    title: "The BibleProject: Sabbath"
    url: "https://www.youtube.com/watch?v=PFTLvkB3JLI"
    description: "6-minute animated overview of Sabbath theology from creation to new creation."

  - id: "3"
    type: "article"
    title: "Sabbath Keeping in the New Testament"
    author: "D.A. Carson"
    url: "https://www.jstor.org/stable/example"
    year: 1982
    description: "Examines how Jesus and early church understood Sabbath. Published in Vox Evangelica."

  - id: "4"
    type: "primary-source"
    title: "Mishnah Shabbat"
    url: "https://www.sefaria.org/Mishnah_Shabbat"
    description: "Rabbinic tractate detailing Sabbath observance. Shows Second Temple Jewish practice."
---

Your article content goes here...
```

## How References Appear

References automatically group by type with icons:
- 📚 Books & Commentaries
- 📄 Articles & Papers
- 🎥 Video Resources
- 🎙️ Audio Resources
- 🌐 Web Resources
- 📜 Primary Sources

Each reference shows:
- Title (linked if URL provided)
- Author
- Year
- Publisher
- Description
- Clickable ID for inline citations

## Styling

References appear in a dedicated section:
- Clear "References & Further Study" heading
- Grouped by type
- Professional formatting
- Dark mode support
- Clickable links open in new tabs

## Next Steps

1. Add references to your existing blog posts
2. Use a mix of source types (books, videos, podcasts)
3. Link to primary sources when possible
4. Give credit to scholars who influenced your thinking

This builds academic credibility while making research accessible!
