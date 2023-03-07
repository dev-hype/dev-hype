import { withClerkMiddleware, getAuth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Set the paths that don't require the user to be signed in
const publicPaths = ['/auth/*']
const hybirdPaths = ['/']

const isPublic = (path: string) => {
  return publicPaths.find((x) => path.match(new RegExp(`^${x}$`.replace('*$', '($|/)'))))
}
const isHybrid = (path: string) => {
  return hybirdPaths.find((x) => path.match(new RegExp(`^${x}$`.replace('*$', '($|/)'))))
}

export default withClerkMiddleware((request: NextRequest) => {
  const { pathname } = request.nextUrl
  const { userId } = getAuth(request)

  const isPublicPath = isPublic(pathname)
  const isHybridPath = isHybrid(pathname)
  const isProtectedPath = !isPublicPath && !isHybridPath

  if (userId) {
    return isPublic(pathname) ? NextResponse.redirect('/') : NextResponse.next()
  } else {
    const signInUrl = new URL('/sign-in', request.url)
    signInUrl.searchParams.set('redirect_url', request.url)

    return isProtectedPath ? NextResponse.redirect(signInUrl) : NextResponse.next()
  }
})

export const config = { matcher: '/((?!_next/image|_next/static|favicon.ico).*)' }
