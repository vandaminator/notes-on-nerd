import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";


const siteName = import.meta.env.SITENAME ?? "https://notes-on-nerd.vercel.app/"

// https://astro.build/config
export default defineConfig({
  site: siteName,
  integrations: [mdx(), sitemap(), react(), tailwind({
    applyBaseStyles: false,
  }),],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  })
});