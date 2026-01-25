import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        sage: {
          50: { value: '#f0fdf4' },
          100: { value: '#dcfce7' },
          200: { value: '#bbf7d0' },
          300: { value: '#86efac' },
          400: { value: '#4ade80' },
          500: { value: '#22c55e' }, // primary sage
          600: { value: '#16a34a' },
          700: { value: '#15803d' },
          800: { value: '#166534' },
          900: { value: '#0f2818' }
        },
        accent: {
          50: { value: '#f3f4f6' },
          100: { value: '#e5e7eb' },
          200: { value: '#d1d5db' },
          300: { value: '#9ca3af' },
          400: { value: '#6b7280' },
          500: { value: '#4b5563' },
          600: { value: '#374151' },
          700: { value: '#1f2937' },
          800: { value: '#111827' },
          900: { value: '#030712' }
        },
        primary: {
          50: { value: '#f0f9ff' },
          100: { value: '#e0f2fe' },
          200: { value: '#bae6fd' },
          300: { value: '#7dd3fc' },
          400: { value: '#38bdf8' },
          500: { value: '#0ea5e9' },
          600: { value: '#0284c7' },
          700: { value: '#0369a1' },
          800: { value: '#075985' },
          900: { value: '#0c2d6b' }
        },
        success: {
          50: { value: '#f0fdf4' },
          100: { value: '#dcfce7' },
          200: { value: '#bbf7d0' },
          300: { value: '#86efac' },
          400: { value: '#4ade80' },
          500: { value: '#22c55e' },
          600: { value: '#16a34a' },
          700: { value: '#15803d' },
          800: { value: '#166534' },
          900: { value: '#0f2818' }
        },
        gray: {
          50: { value: '#f9fafb' },
          100: { value: '#f3f4f6' },
          200: { value: '#e5e7eb' },
          300: { value: '#d1d5db' },
          400: { value: '#9ca3af' },
          500: { value: '#6b7280' },
          600: { value: '#4b5563' },
          700: { value: '#374151' },
          800: { value: '#1f2937' },
          900: { value: '#0b1222' }
        },
        white: { value: '#ffffff' }
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
