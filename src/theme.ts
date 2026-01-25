import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
    sage: {
      50: { value: '#f6fbf8' },
      100: { value: '#eaf6ef' },
      200: { value: '#d6eee0' },
      300: { value: '#bfe0c7' },
      400: { value: '#9fd1ab' },
      500: { value: '#7fbf8f' }, // primary sage
      600: { value: '#6aa474' },
      700: { value: '#4e7d56' },
      800: { value: '#33543a' },
      900: { value: '#132916' }
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
}}})

export const system = createSystem(defaultConfig, customConfig)
