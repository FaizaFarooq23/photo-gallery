
import Header from './Header'
import Footer from './Footer'

export default function Layout({children }: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col justify-between h-screen overflow-y-hidden '>
        <Header />
        <main className=' overflow-y-scroll py-10'>
         {children}
        </main>
        <Footer/>
    </div>
  )
}
