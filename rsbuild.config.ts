import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'Countries App',
    favicon: './src/assets/icons/icon.svg',
  },
})
