import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Авторизация',
    description: 'Авторизация в приложение для аренды автомобилей',
}

export default function AuthLayout({ children }) {
    return (

        <div
            className={
                `
                ${inter.className}
                'min-h-screen bg-white
                mx-auto relative overflow-hidden '
                `
            }
        >
            {children}
        </div>


    )
}
