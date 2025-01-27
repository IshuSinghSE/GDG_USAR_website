import { defineCliConfig } from 'sanity/lib/exports';

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  },
  autoUpdates: process.env.NEXT_PUBLIC_SANITY_AUTO_UPDATES === 'true',
});
