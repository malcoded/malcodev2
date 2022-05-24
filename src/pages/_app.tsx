
import 'assets/fonts/fonts.css'
import "assets/fontawesome/css/all.min.css"

import "styles/variables.css"
import "styles/layout.css"
import "styles/row.css"
import "styles/card.post.css"

import type {AppProps} from 'next/app'

function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
