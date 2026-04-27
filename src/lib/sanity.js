import {createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Replace wit actual project ID and dataset name
// const ORGANIZATION_ID = 'oTkHXXqAi';
const PROJECT_ID = '9mx1hwll';
const DATASET = 'production';
const API_VERSION = '2024-06-01'; // Use the current date as the API version
const TOKEN = 'skqcIJPvm32U0o7cC31ix8zrntsSE4XYgUT4Z13xZAKop0k30rbXkDOj29UGc4w9ssLyahAhQGHROopkt5aFZ4RWbhLJE4FgddI07gwndChlrdD9ADneQeucpR9K7aZ5ok5u0H0FL0jCMFHaCX0KA3LHdoGlpQnMQOmOKUrAE1mbWE8TdZeu';

// Read client — used for fetching blog posts and Q&As
// useCdn: true means fast cached reads
export const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: API_VERSION,
  useCdn: true,
});

// Write client — used for submitting new questions from the Q&A form
// useCdn: false because we need real-time writes, not cached reads
// token gives us permission to create new documents
export const writeClient = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: API_VERSION,
  useCdn: false,
  token: TOKEN, // ← paste your API token from Sanity dashboard
});

// Image URL builder — converts Sanity image references into usable URLs
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);


