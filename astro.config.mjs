import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import robotsTxt from 'astro-robots-txt';

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: 'https://ethib.fr',
  integrations: [tailwind(), compress(), robotsTxt({
    host: true,
    sitemap: false
  }), compressor()]
});