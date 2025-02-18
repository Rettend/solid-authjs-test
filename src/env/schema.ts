import { z } from 'zod'

export const serverScheme = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  AUTH_GITHUB_ID: z.string().optional(),
  AUTH_GITHUB_SECRET: z.string().optional(),
  AUTH_SECRET: z.string().optional(),
  AUTH_TRUST_HOST: z.string().optional(),
  AUTH_URL: z.string().optional(),
})

export const clientScheme = z.object({
  MODE: z.enum(['development', 'production', 'test']).default('development'),
  VITE_AUTH_PATH: z.string().optional(),
})
