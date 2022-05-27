
import 'assets/fonts/fonts.css'
import "assets/fontawesome/css/all.min.css"

import "styles/variables.css"
import "styles/layout.css"
import "styles/row.css"
import "styles/card.post.css"
import type {AppProps} from 'next/app'
import {Html} from 'next/document'

function MyApp({Component, pageProps}: AppProps) {
  return <Html lang='es'>
    <Component {...pageProps} />
  </Html>
}

export default MyApp
