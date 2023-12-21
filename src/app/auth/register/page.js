"use client"

import { motion } from "framer-motion"
import { fadeIn } from "../../../../variants"
import Image from "next/image"
import { Input } from "@/app/components/Input"
import Link from "next/link"


export default function SignIn() {
  return (

    <>


      <motion.header
        variants={fadeIn('left', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.4 }}
        className=" flex xxsm:flex-col xxsm:gap-4 xsm:gap-6 
                    xsm:flex-row items-center 
                    justify-center p-6 pt-32" >

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

        {/* sign in */}
        <div>
          <a
            href="./login"
            className="btn btn-sm text-[8px] h-8 btn-accent 
                  hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-2
                  shadow-lg p-2"
          >
            Уже есть аккаунт</a>
        </div>

      </motion.header>


      <main
        className="flex flex-col justify-center p-6 pb-12">


        {/* heading */}
        
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }}
          className="mx-auto max-w-md">

          <h3 className="h3 mt-2 text-center">Страница регистрации</h3>
        </motion.div>


        {/* вся форма */}
        
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }}
          className="mx-auto mt-6 w-full 
                    xl:max-w-[56rem] 
                    lg:max-w-[40rem] 
                    md:max-w-[30rem] 
                    sm:max-w-[25rem] 
                    xsm:max-w-[15rem] 
                        rounded-xl 
          p-6 
          bg-white/90 
          shadow-xl 
          backdrop-blur-xl 
                sm:mt-10 sm:p-10
                border border-red-400
                flex
                justify-center
                items-center
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
            autoComplete="off"
            className="mt-6 
            gap-y-6 
            flex 
            flex-wrap
            items-center
            justify-center
            gap-x-[1rem]
            max-w-lg 
            ">

            {/* todo = иконки на формы */}
            {/* todo = флекс на форму, адаптив */}
            {/* todo = валидация выдачей ошибок */}
            {/* todo = звезочки на обязательные поля */}


            {/* name */}
            <Input
              // imgSrc={'/icons/login/email.svg'}
              labelText={'Имя'}
              placeholder={'Иван'}
              type="text"
              required
            />

            {/* fatherName */}
            <Input
              // imgSrc={'/icons/login/email.svg'}
              labelText={'Отчество'}
              placeholder={'Иванович'}
              type="text"
            />

            {/* surname */}
            <Input
              // imgSrc={'/icons/login/email.svg'}
              labelText={'Фамилия'}
              placeholder={'Иванов'}
              type="text"
              required
            />

            {/* birthdate */}
            <Input
              // imgSrc={'/icons/login/email.svg'}
              labelText={'Дата рождения'}
              placeholder={'01.01.2000'}
              type={"text"}
              maxLength={11}
              required
            />


            {/* phone */}
            <Input
              // imgSrc={'/icons/login/email.svg'}
              labelText={'Телефон'}
              placeholder={'+7 912 98 88 88'}
              type={"text"}
              maxLength={11}
              required
            />


            {/* email */}
            <div>
              <label for="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
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
                  minlength="8"
                  className="w-full rounded-md border border-gray-200 pl-10 text-sm h-10  focus:outline-gray-300"
                  placeholder="минимум 8 знаков"
                />
              </div>
            </div>

            {/* todo = валидация совпадения паролей */}

            {/*repeat pass */}
            <div>
              <label for="password" className="block text-sm font-medium text-gray-700">Повторить пароль</label>
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




            {/* submit */}
            <div>
              <Link href="./login"
                className="flex items-center justify-center rounded-md bg-accent py-2 px-4 
                      font-semibold text-white shadow-lg transition duration-150 
                      ease-in-out  hover:shadow-xl focus:shadow-xl focus:outline-none 
                      focus:ring-2  focus:ring-offset-2"
              >
                Зарегистрироваться
              </Link>
            </div>

          </form>
        </motion.div>
      </main>

    </>
  )
} 