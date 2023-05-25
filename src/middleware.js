import { NextResponse } from 'next/server'

export function middleware(request) {
  const response = NextResponse.next()
  const token = request.cookies.get('@siape:token')
  
  console.log('request', request);

  if (!token) {
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }

  return response
}

export const config = {
  matcher: ['/dashboard', '/docentes', '/discentes', '/externos']
}
