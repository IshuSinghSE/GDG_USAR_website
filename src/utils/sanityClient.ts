import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "", // Replace with your actual project ID
  dataset: "", // Replace with your actual dataset
  apiVersion: "2022-03-07",
  useCdn: false,
});

export default client;

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}