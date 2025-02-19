import type { SolidAuthConfig } from '@solid-mediakit/auth'
import GitHub from '@auth/core/providers/github'
import { serverEnv } from '~/env/server'
import '~/server/fetch'

declare module '@auth/core/types' {
  export interface Session {
    user?: DefaultSession['user']
  }
}

export const authOptions: SolidAuthConfig = {
  providers: [
    GitHub({
      clientId: serverEnv.AUTH_GITHUB_ID,
      clientSecret: serverEnv.AUTH_GITHUB_SECRET,
    }),
  ],
  trustHost: true,
  basePath: import.meta.env.VITE_AUTH_PATH,
}
