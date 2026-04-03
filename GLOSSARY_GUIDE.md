# Hebrew & Greek Glossary Guide

## Quick Start: Adding a New Term

Create a new file in `src/content/glossary/` with this template:

```mdx
---
term: "Hebrew or Greek word here"
transliteration: "how to pronounce it"
language: "hebrew" # or "greek"
partOfSpeech: "noun" # or verb, adjective, etc. (optional)
definition: "Brief, clear definition of the term"
etymology: "Word origin and roots (optional)"
semanticRange:
  - "Meaning 1"
  - "Meaning 2"
  - "Meaning 3"
usage: "How this word is used in Scripture context (optional)"
examples:
  - reference: "Genesis 1:1"
    text: "בְּרֵאשִׁית בָּרָא אֱלֹהִים"
    translation: "In the beginning God created"
relatedTerms:
  - "slug-of-related-term"
relatedPosts:
  - "slug-of-related-blog-post"
strongsNumber: "H1234" # or "G1234" for Greek (optional)
draft: false
---

## Deep Dive

Your detailed explanation goes here. Use markdown for:
- **Bold** for emphasis
- *Italic* for transliterations
- Headings (## and ###) for organization
- Lists and quotes as needed

### Section 1

More content...

### Section 2

Even more content...
```

## File Naming Convention

- Use the **transliteration** as the filename
- Lowercase, hyphenated
- Examples:
  - `hesed.mdx` (not `chesed.mdx`)
  - `berit.mdx` (not `berith.mdx`)
  - `agape.mdx`
  - `pistis.mdx`

## Required Fields

Only 4 fields are required:
1. `term` - The Hebrew/Greek word
2. `transliteration` - How to say it
3. `language` - "hebrew" or "greek"
4. `definition` - Brief definition

Everything else is optional but recommended!

## Examples: Real Entries

### Hebrew Term: חֶסֶד (hesed)

See `src/content/glossary/hesed.mdx` for a complete example of:
- Multiple Bible examples
- Semantic range
- Related terms and posts
- Deep dive content with sections

### Hebrew Term: בְּרִית (berit)

See `src/content/glossary/berit.mdx` for a complete example of:
- Etymology explanation
- Usage contexts
- Related terms
- Comprehensive deep dive

## Tips for Great Entries

### 1. Transliteration
- Use standard academic conventions
- Be consistent (hesed not chesed, unless you have a reason)
- Include stress marks if helpful: *hesed*, *agápē*

### 2. Definition
- Start with the core meaning
- One sentence preferred
- Save nuance for "Deep Dive" section

### 3. Etymology
- Word origins and roots
- Related words in other Semitic languages
- How meaning evolved over time

### 4. Semantic Range
- List all major meanings
- Order from most common to least common
- Keep entries short (1-5 words each)

### 5. Usage
- How the word functions in Scripture
- Common contexts and patterns
- Grammatical notes if relevant

### 6. Examples
- Choose well-known passages when possible
- Include the original language text
- Provide English translation
- Aim for 3-5 examples that show range of meaning

### 7. Deep Dive
- This is the MDX content below the frontmatter
- Use headings to organize (##, ###)
- Explain theological significance
- Show how the word reveals God's character
- Connect to related concepts
- Link to New Testament if relevant

### 8. Related Terms
- Use the **slug** (filename without .mdx)
- List closely related concepts
- Order by relevance

### 9. Related Posts
- Use the **post slug** from blog
- Link to articles that discuss this term in depth
- Only include posts where the term is central

### 10. Strong's Number
- Format: "H####" for Hebrew, "G####" for Greek
- Use for linking to external concordances
- Find numbers at biblehub.com or blueletterbible.org

## Where Terms Appear

Once created, glossary terms show up in:
1. `/glossary` - Main glossary index (grouped by language)
2. `/glossary/[term]` - Individual term page
3. Blog posts - If you link to them via `relatedPosts`

## Navigation

The Glossary link appears in the main navigation automatically.

## Future Features

Potential additions:
- Search/filter by topic
- Audio pronunciation
- Flashcard mode for learning
- Cross-references in blog posts
- "Term of the Week" feature

---

**Your Turn!**

Add new terms as you write blog posts. When you explain a Hebrew or Greek word in an article, create a glossary entry for it. Over time, you'll build a comprehensive biblical language resource.

**Suggested Next Terms:**
- אֱמֶת (emet) - truth, faithfulness
- רַחֲמִים (rahamim) - compassion, mercy
- קֹדֶשׁ (qodesh) - holiness, sacred
- שָׁלוֹם (shalom) - peace, wholeness
- חֵרֶם (herem) - devoted, banned (you already have a post on this!)
- ἀγάπη (agapē) - love
- πίστις (pistis) - faith, faithfulness
- χάρις (charis) - grace
- δικαιοσύνη (dikaiosynē) - righteousness
- λόγος (logos) - word, reason

Start with terms you've already written about in blog posts!
