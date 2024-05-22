import StreamVideoProvider from '@/providers/StreamClientProvider'

export const metadata = {
  title: "Yoom",
  description: "A video conferencing app",
  icons: {
    icon: '/icons/logo.svg'
  }
};

function RootLayout({children}) {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout