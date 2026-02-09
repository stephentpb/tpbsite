import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'q5e0ft64',
    dataset: 'production'
  },
  deployment: {
    autoUpdates: true,
  },
  // NEW: Add Tailwind support via Vite
  vite: (config) => ({
    ...config,
    plugins: [
      ...(config.plugins || []),
      require('@tailwindcss/vite').default(),
    ],
  }),
})
