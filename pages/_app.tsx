import Navbar from '../src/components/Navbar'
import Sidebar from '../src/components/Sidebar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20 md:px-32">
        <div className="col-span-12 p-4 text-center bg-white lg:col-span-4 rounded-2xl">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 bg-white lg:col-span-7 rounded-2xl">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}

export default MyApp
