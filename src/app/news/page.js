"use client"
import Image from 'next/image'
import React, { useContext } from 'react'

import { motion } from 'framer-motion';

import { fadeIn } from '../../../variants';
import { AuthContext } from '../context/auth';
import { BackToTopBtn } from '../components/BackToTopBtn';

export default function News() {

  const { isLoggedIn } = useContext(AuthContext)

  return (
    <main
      className="max-w-[1920px] bg-white 
    mx-auto relative overflow-hidden"
    >

      <section
        className="flex items-center mt-4"

      >
        <div
          className="container mx-auto mt-40 flex 
                flex-col gap-y-5 justify-center items-center">
          <h2 className="h2  text-center">Новости</h2>

          {/* новости 1 */}
          <div className="flex flex-col xl:flex-row xl:justify-between items-center">
            {/* картинка */}
            {/* <motion.div */}
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
              className="flex-1 mb-8 xl:mb-0">
              <Image
                priority
                className='rounded-[20px]'
                src={'/images/about/car01.png'}
                width={600}
                height={448}
                alt=''
              />
            </motion.div>
            <div className='flex-1 flex items-center xl:justify-center'>
              <div className="xl:max-w-[517px]">
                {/* <motion.h2 */}
                <motion.h2
                  variants={fadeIn('up', 0.2)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.6 }}
                  className="h2">
                  Арендовать автомобиль теперь очень просто
                </motion.h2>
                {/* <motion.p */}
                <motion.p
                  variants={fadeIn('up', 0.4)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.4 }}
                  className="mb-[42px] xl:max-w-md">
                  Выбирайте авто для аренды быстро и легко.
                  У нас пять филиалов в городе Перми, которые предоставляют
                  в вашему выбору разнообразные марки и модели авто.
                  4 надеждых центра обслуживания и ремонта
                  гарантируют работоспособность автомобиля на время аренды.
                </motion.p>



              </div>
            </div>
          </div>

          <hr className='w-full' />

          {/* новости 2 */}
          <div className="flex flex-col xl:flex-row xl:justify-between items-center">
            {/* картинка */}
            {/* <motion.div */}
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
              className="flex-1 mb-8 xl:mb-0 self-">
              <Image
                priority
                className='rounded-[20px]'
                src={'/images/about/new3.webp'}
                width={600}
                height={448}
                alt=''
              />
            </motion.div>
            <div className='flex-1 flex items-center xl:justify-center'>
              <div className="xl:max-w-[517px]">
                {/* <motion.h2 */}
                <motion.h2
                  variants={fadeIn('up', 0.2)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.6 }}
                  className="h2">
                  Упадут ли цены на машины с пробегом?
                </motion.h2>
                {/* <motion.p */}
                <motion.p
                  variants={fadeIn('up', 0.4)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.4 }}
                  className="mb-[42px] xl:max-w-md">
                  Спрос на автомобили с пробегом в России, без деления на ценовые сегменты, снизился на 4% за период с сентября по декабрь 2023 года по сравнению с аналогичным периодом в прошлом году. Такое же снижение наблюдается в спросе и по сравнению с летним периодом в этом году, июнь — сентябрь 2023-го, — отмечают эксперты федерального сервиса «Авито Авто». — В категории автомобилей с пробегом стоимостью до 1 000 000 рублей спрос сократился на 14%. При этом доля автомобилей стоимостью до 1 000 000 рублей в общей структуре составляет 74%, что и сказывается на общем показателе снижения спроса.
                </motion.p>



              </div>
            </div>
          </div>


        </div>
      </section>

      <BackToTopBtn />
      {/* <div className="h-[2000px]"></div> */}
    </main>
  )
}
