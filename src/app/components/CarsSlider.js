'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { FaStar, FaStarHalfAlt, FaregStar } from 'react-icons/fa'
import Image from 'next/image'

import { easeInOut, motion } from 'framer-motion'
import { fadeIn } from '../../../variants'

const cars = [
  // granta
  {
    type: 'Седан',
    name: 'Lada granta',
    price: 1300,
    stars: 5.0,
    image: '/images/carSlider/granta.png',
    info: [
      {
        icon: 'icons/carSlider/gearShift.svg',
        text: 'Ручная',
      },
      {
        icon: 'icons/carSlider/seat.svg',
        text: '5 мест',
      },
      {
        icon: 'icons/carSlider/gas.svg',
        text: 'Бензин',
      },
      {
        icon: 'icons/carSlider/wheel.svg',
        text: `Передний`,
      },
    ]
  },
  // cerato
  {
    type: 'седан',
    name: 'Kia cerato',
    price: 2800,
    stars: 5.0,
    image: '/images/carSlider/cerato.png',
    info: [
      {
        icon: 'icons/carSlider/gearShift.svg',
        text: 'Ручная',
      },
      {
        icon: 'icons/carSlider/seat.svg',
        text: '5 мест',
      },
      {
        icon: 'icons/carSlider/gas.svg',
        text: 'Бензин',
      },
      {
        icon: 'icons/carSlider/wheel.svg',
        text: `Передний`,
      },
    ]
  },
  // optima
  {
    type: 'седан',
    name: 'Kia Optima',
    price: 3500,
    stars: 5.0,
    image: '/images/carSlider/optima.png',
    info: [
      {
        icon: 'icons/carSlider/gearShift.svg',
        text: 'Ручная',
      },
      {
        icon: 'icons/carSlider/seat.svg',
        text: '5 мест',
      },
      {
        icon: 'icons/carSlider/gas.svg',
        text: 'Бензин',
      },
      {
        icon: 'icons/carSlider/wheel.svg',
        text: `Передний`,
      },
    ]
  },
  // vesta
  {
    type: 'седан',
    name: 'Лада Vesta',
    price: 1500,
    stars: 3.2,
    image: '/images/carSlider/vesta.png',
    info: [
      {
        icon: 'icons/carSlider/gearShift.svg',
        text: 'Ручная',
      },
      {
        icon: 'icons/carSlider/seat.svg',
        text: '5 мест',
      },
      {
        icon: 'icons/carSlider/gas.svg',
        text: 'Бензин',
      },
      {
        icon: 'icons/carSlider/wheel.svg',
        text: `Передний`,
      },
    ]
  },

  // largus
  {
    type: 'Универсал',
    name: 'Лада Largus',
    price: 1500,
    stars: 3.2,
    image: '/images/carSlider/largus.png',
    info: [
      {
        icon: 'icons/carSlider/gearShift.svg',
        text: 'Ручная',
      },
      {
        icon: 'icons/carSlider/seat.svg',
        text: '7 мест',
      },
      {
        icon: 'icons/carSlider/gas.svg',
        text: 'Пропан',
      },
      {
        icon: 'icons/carSlider/wheel.svg',
        text: `Передний`,
      },
    ]
  },
  // focus
  {
    type: 'Хетчбэк',
    name: 'Ford Focus',
    price: 1700,
    stars: 3.5,
    image: 'images/carSlider/car01.svg',
    info: [
      {
        icon: 'icons/carSlider/gearShift.svg',
        text: 'Ручная',
      },
      {
        icon: 'icons/carSlider/seat.svg',
        text: '5 мест',
      },
      {
        icon: 'icons/carSlider/gas.svg',
        text: 'Пропан',
      },
      {
        icon: 'icons/carSlider/wheel.svg',
        text: `Передний`,
      },
    ]
  },
  // cr-v
  {
    type: 'Седан',
    name: 'Honda CR-V',
    price: 3500,
    stars: 4.7,
    image: 'images/carSlider/car03.svg',
    info: [
      {
        icon: 'icons/carSlider/gearShift.svg',
        text: 'Автомат',
      },
      {
        icon: 'icons/carSlider/seat.svg',
        text: '5 мест',
      },
      {
        icon: 'icons/carSlider/gas.svg',
        text: 'Пропан',
      },
      {
        icon: 'icons/carSlider/wheel.svg',
        text: 'Передний',
      },
    ]
  },
  // corolla
  {
    type: 'Седан',
    name: 'Corolla',
    price: 2500,
    stars: 5,
    image: '/images/carSlider/car02.png',
    info: [
      {
        icon: 'icons/carSlider/gearShift.svg',
        text: 'Ручная',
      },
      {
        icon: 'icons/carSlider/seat.svg',
        text: '5 мест',
      },
      {
        icon: 'icons/carSlider/gas.svg',
        text: 'Пропан',
      },
      {
        icon: 'icons/carSlider/wheel.svg',
        text: 'Передний',
      },
    ]
  },

]

export const CarsSlider = () => {
  return (
    // <motion.div
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.2 }}
      className='container mx-auto'>
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {
          cars.map((car, index) => {
            return (
              <SwiperSlide key={index}>

                  <div className="max-w-[385px] mx-auto sm:mx-0
                                flex flex-col 
                                h-full
                               
                "
                  >

                    <div className="relative 
                              flex-shrink-0
                              overflow-hidden
                              h-[210px]
                              
                              "
                              
                    >
                      <Image
                        style={{ objectFit: "cover" }}
                        src={car.image}
                        // width={380}
                        // height={284}
                        fill={true}
                        alt=''
                      />
                    </div>
                    <div className='flex justify-between '>
                   
                     {/* блок текста */}
                     <div>
                        <div className='text-[13px] text-secondary uppercase'>
                          {car.type}
                        </div>
                        <h3 className='text-lg font-bold uppercase'>
                          {car.name}
                        </h3>
                        <div className='mb-10 text-accent font-semibold uppercase'>
                          {car.price} руб./день
                        </div>
                      </div>

                      {/* stars */}
                      <div className="flex text-accent gap-x-2 h-max">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                    <div className="flex gap-x-3 xl:gap-x-4 w-max mb-10">
                      {
                        car.info.map((item, index) => {
                          return (
                            <div key={index} className='flex flex-col items-center'>
                              <div
                                className='bg-primary w-12 h-12 rounded-full flex
                                          justify-center items-center mb-2'
                              >
                                <Image
                                  src={item.icon}
                                  width={24}
                                  height={24}
                                  alt=''
                                />
                              </div>
                              <div className="text-[12px] uppercase">{item.text}</div>
                            </div>
                          )
                        })
                      }
                    </div>
                    <button className='btn btn-accent btn-lg'>Подробнее</button>
                  </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </motion.div>
  )
}
