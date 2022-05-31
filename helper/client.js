import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "3zo1herg",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
  token: process.env.NEXT_SANITY_API_TOKEN,
});

export const urlFor = (source) => createImageUrlBuilder(client).image(source);
