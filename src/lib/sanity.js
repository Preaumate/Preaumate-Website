import {createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Replace wit actual project ID and dataset name
// const ORGANIZATION_ID = 'oTkHXXqAi';
const PROJECT_ID = '9mx1hwll';
const DATASET = 'your_dataset_name';
const API_VERSION = '2024-06-01'; // Use the current date as the API version

// Create a Sanity client
export const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: API_VERSION,
  useCdn: true, // TRUE = Use the CDN for faster response times, FALSE = for realtime fresh data
  // useCdn: true means use Sanity's fast CDN for reads
  // set to false if you need real-time fresh data
});

// Image URL builder — converts Sanity image references
// into actual URLs you can use in <img> tags
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);


