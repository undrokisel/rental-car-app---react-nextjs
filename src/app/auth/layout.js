import { Inter } from 'next/font/google'
import '../globals.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Авторизация',
    description: 'Авторизация в приложение для аренды автомобилей',
}

export default function AuthLayout({ children }) {
    return (

        <>
            <div
                className={
                    `
                ${inter.className}
                'min-h-screen bg-white
                mx-auto relative overflow-hidden'
                `
                }
            >
                {children}
            </div>
        </>

    )
}
