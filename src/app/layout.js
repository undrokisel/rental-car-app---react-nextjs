import { Inter } from 'next/font/google'
import './globals.css'
import { SearchContextProvider } from './context/search'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Аренда авто',
  description: 'Приложение для аренды автомобилей',
}

export default function RootLayout({ children }) {
  return (
    <SearchContextProvider>
      <html lang="ru">
        <body className={inter.className}>{children}</body>
      </html>
    </SearchContextProvider>
  )
}
