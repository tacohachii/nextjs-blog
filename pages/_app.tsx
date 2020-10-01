import '../styles/global.css'
import { AppProps } from 'next/app'

export default function APP({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
