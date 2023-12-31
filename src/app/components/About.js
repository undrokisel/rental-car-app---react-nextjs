'use client'

import React from 'react'

import {
  MdOutlineMapsHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
} from 'react-icons/md';


import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import { fadeIn } from '../../../variants';
import { motion } from 'framer-motion';

export const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  })
  return (
    <section
      className="section flex items-center"
      id="about"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">


          {/* картинка */}
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 mb-8 xl:mb-0 self-">
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
                className="mb-[42px] max-w-md">
                Выбирайте авто для аренды быстро и легко.
                У нас пять филиалов в городе Перми, которые предоставляют
                в вашему выбору разнообразные марки и модели авто.
                4 надеждых центра обслуживания и ремонта
                гарантируют работоспособность автомобиля на время аренды.
              </motion.p>

              {/* <motion.div */}
              <motion.div
                variants={fadeIn('up', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className="flex items-center gap-x-8 mb-12">
                <div className="flex flex-col w-[100px]">
                  <MdOutlineDirectionsCar className='text-5xl text-accent mb-2' />
                  <div className="text-3xl font-black mb-2">
                    {
                      inView
                        ? (<CountUp start={0} end={50} duration={3} delay={1} />)
                        : null
                    } +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    Моделей <br /> авто
                  </div>
                </div>

                <div className="flex flex-col w-[100px]">
                  <MdOutlineMapsHomeWork className='text-5xl text-accent mb-2' />
                  <div className="text-3xl font-black mb-2">
                    {
                      inView
                        ? (<CountUp start={0} end={5} duration={3} delay={1} />)
                        : null
                    } +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    Пунктов <br /> проката
                  </div>
                </div>

                <div className="flex flex-col w-[100px]">
                  <MdOutlineBuildCircle className='text-5xl text-accent mb-2' />
                  <div className="text-3xl font-black mb-2">
                    {
                      inView
                        ? (<CountUp start={0} end={4} duration={3} delay={1} />)
                        : null
                    } +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    Центров <br /> СТО
                  </div>
                </div>

              </motion.div>

              {/* <motion.button */}
              <motion.button
                variants={fadeIn('up', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 1 }}
                className='hidden xl:block bg-accent hover:bg-accent-hover
                rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px]
                text-[13px] max-w-[184px]'
              >
                See all cars
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
