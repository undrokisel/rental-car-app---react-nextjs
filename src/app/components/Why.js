'use client'

import Image from 'next/image'
import React from 'react'

import { MdKey, MdTrendingUp, MdHandshake } from 'react-icons/md'
import { motion } from 'framer-motion';

import { fadeIn } from '../../../variants';

export const Why = () => {
  return (
    <section
      className="section flex items-center"
      id="why"
    >
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 text-center">
          Непревзойденное качество и сотни довольных клиентов
        </motion.h2>
        <motion.p
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className="max-w-[680px] text-center mx-auto mb-6 xl:mb-2">
          Наша компания входит в топ 3 сервисов по аренде автомобилей в Перми.
          Мы стремимся превзойти все ваши ожидания с первой встречи
        </motion.p>
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className="hidden md:flex justify-center mb-6 xl:mb-2">
          <Image
            src={'/images/why/car.svg'}
            alt=''
            width={1060}
            height={420}
          />
        </motion.div>
        <motion.div
          variants={fadeIn('up', 0.8)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }}

          className="flex flex-wrap justify-center
          xl:grid xl:grid-cols-3 gap-4  xl:gap-y-0 xl:gap-x-[30px]"
        >

          <div
            className="flex flex-col items-center text-center
                      max-w-[160px] xl:max-w-none p-2 xl:p-0"
          >
            <MdKey className='text-accent text-[38px] mb-4' />
            <h3 className="h3">Аренда авто: с нами это быстро и просто</h3>
            <p className="hidden xl:flex">
              Мы уделяем максимальное внимание вашим потребностям и делаем все возможное
              , чтобы процесс аренды автомобиля был простым и быстрым
            </p>

          </div>

          <div
            className="flex flex-col items-center text-center
                      max-w-[160px] xl:max-w-none p-2 xl:p-0"
          >
            <MdTrendingUp className='text-accent text-[38px] mb-4' />
            <h3 className="h3">Современное и качественное СТО в гарантийных сервисах </h3>
            <p className="hidden xl:flex">
              Наши сервисы технического обслуживания еженедельно проверяют техническое состояние атомобилей,
              вы можете не беспокоиться - автомобили в порядке !
            </p>

          </div>

          <div
            className="flex flex-col items-center text-center
                      max-w-[160px] xl:max-w-none p-2 xl:p-0"
          >
            <MdHandshake className='text-accent text-[38px] mb-4' />
            <h3 className="h3">Оперативная техподдержка</h3>
            <p className="hidden xl:flex">
              Наша техническа поддержка на связи 24/7!
            </p>

          </div>

        </motion.div>
      </div>
    </section>
  )
}
