import { defineContentConfig, defineCollection } from "@nuxt/content";
import * as z from "zod";

export default defineContentConfig({
  collections: {
    stuff: defineCollection({
      type: "page",
      source: "stuff/**/*.md",
      schema: z.object({
        title: z.string(),
        date: z.string(),
        description: z.string(),
      }),
    }),
  },
});
