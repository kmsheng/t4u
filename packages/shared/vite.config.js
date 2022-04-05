import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.js'),
      name: 'T4uShared',
      fileName: (format) => `t4u-shared.${format}.js`
    }
  }
})
