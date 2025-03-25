// pages/_app.js
import '../styles/globals.css'
import { useEffect, useState } from 'react'
import LoadingScreen from '../components/LoadingScreen'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay (or attach to router events)
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return loading ? <LoadingScreen /> : <Component {...pageProps} />
}

export default MyApp
