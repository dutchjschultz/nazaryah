// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Absolute base for canonical links and Open Graph / Twitter image URLs.
  // Without this, new URL(..., Astro.site) falls back to localhost and social
  // scrapers get a dead image link.
  site: 'https://nazaryah.com',
  integrations: [mdx(), react(), markdoc(), keystatic()],
  output: 'static',
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()]
  }
});
