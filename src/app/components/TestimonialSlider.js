'use client'

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa'

import { motion } from 'framer-motion'
import Image from 'next/image';
import { fadeIn } from '../../../variants';

const testimonialData = [
  {
    message: 'Эта компания реально превзошла все мои ожидания.Это был мой первый опыт аренды автомобиля и все было на высоте',
    avatar: '/images/testimonial/avatar.png',
    name: 'Сергей Петрович',
    job: 'Фотограф и видеограф',
  },
  {
    message: 'Брал машину для переезда, поездок в сад, к родственникам и на рыбалку. Выгоднее и удобнее, чем на такси',
    avatar: '/images/testimonial/avatar.png',
    name: 'Иван Денисов',
    job: 'менеджер по продажам',
  },
]


export const TestimonialSlider = () => {
  return (
    <motion.div
      variants={fadeIn('up', 0.4)}
      // initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.6 }}
      className="container mx-auto"
    >
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className='h-[450px] xl:h-[400px]'
      >
        {
          testimonialData.map(({ name, avatar, message, job }, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col justify-center items-center text-center">
                  <FaQuoteLeft className='text-7xl text-accent mb-6' />
                  <div
                    className="text-2xl max-w-[874px] mb-12
                    font-medium xl:text-4xl">
                    {message}
                  </div>
                  <Image
                    width={64}
                    height={64}
                    src={avatar}
                    alt=''
                    className="mb-6"
                  />
                  <div className='text-lg font-medium'>{name}</div>
                  <div className='text-secondary'>{job}</div>
                </div>

              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </motion.div>
  )
}
