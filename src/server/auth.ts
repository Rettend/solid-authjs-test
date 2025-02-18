import type { SolidAuthConfig } from '@solid-mediakit/auth'
import GitHub from '@auth/core/providers/github'
import { serverEnv } from '~/env/server'
import 'dotenv/config'

declare module '@auth/core/types' {
  export interface Session {
    user?: DefaultSession['user']
  }
}

const required = {
  AUTH_GITHUB_ID: serverEnv.AUTH_GITHUB_ID,
  AUTH_GITHUB_SECRET: serverEnv.AUTH_GITHUB_SECRET,
  AUTH_SECRET: serverEnv.AUTH_SECRET,
}

// eslint-disable-next-line no-console
console.log('required', required)

export const authOptions: SolidAuthConfig = {
  providers: [
    GitHub({
      clientId: serverEnv.AUTH_GITHUB_ID!,
      clientSecret: serverEnv.AUTH_GITHUB_SECRET!,
    }),
  ],
  trustHost: true,
  basePath: import.meta.env.VITE_AUTH_PATH,
}
