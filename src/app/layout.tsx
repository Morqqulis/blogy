import Footer from '@common/Footer/Footer'
import Header from '@common/Header/Header'
import { primaryFont } from '@settings/fonts'
import '@styles/global.scss'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={primaryFont.className}>
        <div className="wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
