import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [starlight({
    title: "Test"
  })]
});
