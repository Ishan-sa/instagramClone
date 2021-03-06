import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className='bg-gray-150 h-screen overflow-y-scroll'>
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/insta.webp" />
      </Head>

      {/* Header */}
      <Header />
      <Feed />

      {/* Feed */}

      {/* Modal */}
    </div>
  )
}
