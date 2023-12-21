"use client"

import { motion } from "framer-motion"
import { fadeIn } from "../../../../variants"
import Image from "next/image"
import Link from "next/link"


export default function Login() {
  return (

    <>

      <motion.header
        variants={fadeIn('left', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.4 }}
        className=" flex xxsm:flex-col xxsm:gap-4 xsm:gap-6 pt-40
                    xsm:flex-row items-center 
                    justify-center p-6" >

        {/* safety */}
        <div className=" flex items-center justify-center">
          <Image
            width={50}
            height={50}
            src={'/icons/login/shelder.svg'}
          />
          <span className="text-[12px] text-center font-black">
            Ваша безопасность под контролем!
          </span>
        </div>

        {/* register link*/}
        <div>
          <Link
            href="./register"
            className="btn btn-sm text-[8px] h-8 btn-accent 
                  hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-2
                  shadow-lg p-2
                  text-center
                  "
          >
            У меня нет аккаунта
          </Link>
        </div>

      </motion.header>


      <main className="flex flex-col justify-center p-6 pb-12">

        <motion.div
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }}
          className="mx-auto max-w-md">


          <h3 className="h3 mt-2 text-center">Добро пожаловать!</h3>
        </motion.div>

        <motion.div
          className="mx-auto mt-6 w-full max-w-md rounded-xl 
              bg-white/90 p-6 shadow-xl backdrop-blur-xl 
                sm:mt-10 sm:p-10
                border border-red-400
                "
        >

          {/* if Error          */}
          {/* <div className="flex gap-3 rounded-md border border-red-500 bg-red-50 p-4"> */}
          {/* <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
            </svg> */}
          {/* <h3 className="text-sm font-medium text-red-800">These credentials do not match our records.</h3> */}
          {/* </div> */}

          <form
            action="#"
            autocComplete="off"
            className="mt-6 space-y-6">
            <div>

              {/* email */}
              <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-1">
                  <Image width={25} height={25} className="" src={'/icons/login/email.svg'} />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-md border border-gray-200 pl-10 text-sm h-10 focus:outline-gray-300"
                  placeholder="ваш email"
                />
              </div>
            </div>


            {/* pass */}
            <div>
              <label for="password" className="block text-sm font-medium text-gray-700">Пароль</label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <Image width={25} height={25} src={'/icons/login/lock.svg'} />
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  minLength="8"
                  className="w-full rounded-md border border-gray-200 pl-10 text-sm h-10  focus:outline-gray-300"
                  placeholder="минимум 8 знаков"
                />
              </div>
            </div>

            {/* remember me & forgot */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="h-4 w-4 rounded border-gray-300 focus:outline-gray-300"
                />
                <label for="remember" className="text-sm text-gray-900">Запомнить меня</label>
              </div>
              <a href="forgot-password.html" className="text-sm font-medium text-accent">Забыли пароль?</a>
            </div>

            {/* submit */}
            <div>
              <Link href="../../lk"
                className="flex items-center justify-center rounded-md bg-accent py-2 px-4 
                      font-semibold text-white shadow-lg transition duration-150 
                      ease-in-out  hover:shadow-xl focus:shadow-xl focus:outline-none 
                      focus:ring-2  focus:ring-offset-2"
              >
                Войти
              </Link>
            </div>

          </form>
        </motion.div>
      </main>


    </>
  )
} 