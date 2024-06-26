import Navbar from '@/components/Navbar'
import SideBar from '@/components/SideBar'

export const metadata = {
  title: "Yoom",
  description: "A video conferencing app",
  icons: {
    icon: '/icons/logo.svg'
  }
};

function HomeLayout({children}) {
  return (
    <main className='relative'>
      <Navbar />
      <div className="flex">
        <SideBar />
        <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
          <div className="w-full">
            {children}
          </div>
        </section>
      </div>
    </main>
  )
}

export default HomeLayout