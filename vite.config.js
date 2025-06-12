import { defineConfig } from "vite"
import preact from "@preact/preset-vite"
import path from "path"

const __dirname = path.resolve()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      "@puppet": path.resolve(__dirname, "node_modules/@puppet")
    }
  },
  define: {
    "process.env": {} // Prevents "process is not defined"
  },
  build: {
    lib: {
      entry: "src/index.jsx",
      name: "PreactPlugin",
      fileName: "preact-plugin",
      formats: ["iife"] // Immediately Invoked Function Expression
    },
    rollupOptions: {
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@puppet/react-components/source/scss/library/ui" as *; @use "@puppet/sass-variables/index" as *;`
      }
    }
  }
})
