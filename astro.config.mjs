import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://annashmitko.com/',
  vite: {
    plugins: [tailwindcss()]
  },
  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Raleway",
      cssVariable: "--font-raleway"
    }, {
      provider: fontProviders.google(),
      name: "Roboto Serif",
      cssVariable: "--font-roboto-serif"
    }, {
      provider: fontProviders.google(),
      name: "Public Sans",
      cssVariable: "--font-public-sans"
    }]
  }
});