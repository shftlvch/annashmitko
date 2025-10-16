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
      // Default font for the CV page
      provider: fontProviders.google(),
      name: "Raleway",
      cssVariable: "--font-raleway"
    }, {
      // Default serif font
      provider: fontProviders.google(),
      name: "Roboto Serif",
      cssVariable: "--font-roboto-serif",
      styles: ['normal', 'italic'],
      weights: ["100 700"]
    }, {
      // Default sans font
      provider: fontProviders.google(),
      name: "Public Sans",
      cssVariable: "--font-public-sans",
      styles: ['normal'],
      weights: ["400 700"]
    }]
  }
});