import { defineContentConfig, defineCollection } from "@nuxt/content";
import * as z from "zod";

export default defineContentConfig({
  collections: {
    stuff: defineCollection({
      type: "page",
      source: "stuff/**/*.md",
    }),
  },
});
