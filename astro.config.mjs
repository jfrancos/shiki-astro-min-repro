// @ts-check
import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import UnoCSS from "unocss/astro";
import { presetWind4 } from "unocss";

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS({ presets: [presetWind4()] }), vue({ jsx: true })],
});
