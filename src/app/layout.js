import { Inter } from 'next/font/google'
import './globals.css'
import { SearchContextProvider } from './context/search'
import { AuthContextProvider } from './context/auth'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { BackToTopBtn } from './components/BackToTopBtn'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Аренда авто',
  description: 'Приложение для аренды автомобилей',
}

export default function RootLayout({ children }) {
  return (
    <AuthContextProvider>
      <SearchContextProvider>
        <html lang="ru">
          <body className={inter.className}>
            <Header />
            <>
              {children}
            </>
            <Footer />
            <BackToTopBtn />
          </body>
        </html>
      </SearchContextProvider>
    </AuthContextProvider>
  )
}
