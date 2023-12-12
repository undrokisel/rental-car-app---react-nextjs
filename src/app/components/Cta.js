'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import React from 'react'
import { fadeIn } from '../../../variants'

export const Cta = () => {
  return (
    <section
      className="pt-24 xl:pt-48 flex items-end pb-0"
      id="contacts"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row xl:items-center">

          <div className="flex-1 xl:ml-24 text-center md:text-left mb-12 md:mb-0">
            <div className="max-w-[520px] mx-auto order-2 xl:order-none">
              <motion.h2
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className="h2">
                Установите наше приложение и пользуйтесь новым авто в несколько кликов
              </motion.h2>
              <motion.p
                variants={fadeIn('right', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className='mb-10' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam suscipit molestiae tempore blanditiis, voluptates placeat accusantium dignissimos id expedita atque magnam sed architecto quod fuga optio, amet adipisci perferendis consectetur.
              </motion.p>
              {/* buttons */}
              <motion.div
                variants={fadeIn('right', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className="flex gap-x-3 justify-center md:justify-start mb-4">
                <button className="btn-cta">
                  <Image
                    src={'/icons/buttons/app-store.svg'}
                    width={132}
                    height={36}
                    alt=''
                  />
                </button>
                <button className="btn-cta">
                  <Image
                    src={'/icons/buttons/google-play.svg'}
                    width={132}
                    height={36}
                    alt=''
                  />
                </button>

              </motion.div>
            </div>
          </div>

          {/* image */}
          <motion.div
            variants={fadeIn('up', 0.8)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 flex justify-center order-1
                          md:order-none">
            <Image
              src={'/images/cta/phone.svg'}
              width={320}
              height={640}
              alt=''
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
