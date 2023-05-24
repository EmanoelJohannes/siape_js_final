import React from 'react'
import Script from 'next/script'


import Providers from '@/providers/index'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default MyApp
