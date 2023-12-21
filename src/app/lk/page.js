"use client"

import Link from "next/link"

import { motion } from "framer-motion"
import { fadeIn } from "../../../variants"


const user = {
  surname: "Иванов",
  name: "Иван",
  fatherName: "Иванович",
  points: 0,
  count_orders_finished: 0,
}

export default function Lk() {
  return (

    <>
      {/* <motion.header */}
      <motion.header
        variants={fadeIn('left', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.4 }}
        className=" flex xxsm:flex-col xxsm:gap-4 xsm:gap-6 
                    xsm:flex-row items-center 
                    justify-end p-6 pt-[100px]" >

        <Link
          href={'../auth/login'}
          className="btn 
        btn-cta 
        flex-0 max-w-[10rem]">
          Выйти
        </Link>


      </motion.header>

      <main className="flex flex-col justify-center p-6 pb-12">

        <div
          className="mx-auto max-w-lg text-left">

          {/* <motion.h3 */}
          <motion.h3
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className="h2 mt-2 text-center uppercase">
            Личный кабинет
          </motion.h3>

          {/* text */}
          {/* <motion.div */}
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className="flex flex-col justify-center items-center
                      mt-10 gap-y-4
                      "
          >

            <h4 className='text-lg font-bold uppercase text-center'>
              {user.surname}  {user.name}  {user.fatherName}
            </h4>

            <div className='text-lg font-bold '>
              Количество баллов: {user.points}
            </div>
            <div className='text-lg font-bold text-center'>
              Количество завершенных бронирований: {user.count_orders_finished}
            </div>

          </motion.div>

          {/* buttons */}
          {/* <motion.div */}
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className="
                      flex gap-x-5 justify-between mt-20
                      xxsm:flex-col gap-y-5
                      sm:flex-row
                      "
          >

            <Link
              href="lk/cards"
              className="btn btn-sm btn-accent px-4 text-center">
              Банковские карты
            </Link>


            <Link
              href="lk/bookingHistory"
              className="btn btn-sm btn-accent px-4 text-center">
              Бронирования
            </Link>


          </motion.div>



        </div>

      </main>

    </>
  )
} 