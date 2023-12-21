'use client'

import React from 'react'

import { FaPhone, FaEnvelope } from 'react-icons/fa'
import { Copyright } from './Copyright'

import { motion } from 'framer-motion'

import { Link } from 'react-scroll'
import Image from 'next/image'
import { fadeIn } from '../../../variants'


export const Footer = () => {
  return (
    <footer className='pt-20 bg-white z-20 mt-4' id='contact'>
      <hr className='pt-20' />
      <div className="container mx-auto mb-24">
        {/* grid */}
        {/* <motion.div */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col sm:flex-row  flex-wrap
                      sm:gap-x-2
                      md::gap-x-2
                      pl:gap-x-3
                      lg:gap-x-4
                      xl:gap-x-5
                      gap-y-14">

          {/* 1 col */}
          <div className="flex flex-col flex-1 gap-y-8">
            {/* logo */}
            <Link to="/" smooth={true} spy={true} className='cursor-pointer'>
              <Image
                height={200}
                width={200}
                src={'/icons/logo3.png'}
                alt=''
              />
            </Link>

            <div className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </div>

            <div className="flex flex-col gap-y-4 font-semibold">
              <div className="flex items-center gap-x-2">
                <FaPhone />
                <div className="font-medium">+79999999999</div>
              </div>
              <div className="flex items-center gap-x-2">
                <FaEnvelope />
                <div className="font-medium">office@indexdrive.com</div>
              </div>
            </div>
          </div>

          {/* 2 col */}
          <div
            className="flex-1 flex flex-col 
                      xsm:items-start 
                      sm:items-center justify-between">
            <div className="">
              <h3 className='h3 font-bold mb-8'>О Компании</h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                <li className="">
                  <a href="#" className="">Карьера</a>
                </li>
                <li className="">
                  <a href="#" className="">Новости</a>
                </li>
                <li className="">
                  <a href="#" className="">Заглушка</a>
                </li>
                <li className="">
                  <a href="#" className="">Заглушка2</a>
                </li>
                <li className="">
                  <a href="#" className="">Заглушка3</a>
                </li>
              </ul>
            </div>
          </div>

          {/* график работы 3 колонка */}
          <div className="flex-1">
            <h3 className="h3 font-bold">
              Часы работы:
            </h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div className="text-secondary">Будни:</div>
                <div className="font-semibold">9:00-21:00</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Суббота:</div>
                <div className="font-semibold">9:00-19:00</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Воскресение:</div>
                <div className="font-semibold">-</div>
              </div>
            </div>
          </div>

          {/* Написать в поддержку 4 колонка */}
          <div className="flex-1  text-left md:text-center">
            <h3 className="h3 font-bold mb-4">
              Написать нам:
            </h3>
            <div className="mb-7 sm:mb-2 text-secondary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </div>

            <form className="flex flex-col lg:flex-row gap-2 h-24">
              <input type="text" placeholder='Ваша почта'
                className='outline-none bg-white w-full h-10 border rounded-lg pl-4 focus:border-accent'
              />
              <button type="submit" className='btn h-10 btn-sm btn-accent w-26 p-2'>Отправить</button>
            </form>
          </div>


        </motion.div>
      </div>
      <Copyright />
    </footer>
  )
}
