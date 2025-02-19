import { SolidAuth } from '@solid-mediakit/auth'
import { authOptions } from '~/server/auth'
import '~/server/fetch'

export const { GET, POST } = SolidAuth(authOptions)
