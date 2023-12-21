"use client"

import { useContext, useState } from "react";

import { AuthContext } from "../context/auth";
import { useSearchParams } from 'next/navigation'
import { Cars } from "../components/Cars";
import { LocationSelection } from "../components/LocationSelection";

import { motion } from "framer-motion"
import { fadeIn } from "../../../variants"


export default function Filials() {
  const searchParams = useSearchParams()

  const [location, setLocation] = useState(searchParams)

  const { isLoggedIn } = useContext(AuthContext)

  const filialsCoords = [
    ["ул.Пушкина,д.116б,г.Пермь", 58.000593, 56.220101],
    ["ул.Ленина,д.60,г.Пермь", 58.009406, 56.233665],
    ["ул.Революции,д.13,г.Пермь", 58.007761, 56.262699],
    ["ул.Луначарского,д.90,г.Пермь", 58.004800, 56.225140],
    ["ул.Ленина,д.10,г.Пермь", 58.016248, 56.257102],
  ]

  // приводим поисковой запрос в сплошную строку для сравнения
  let str = location.toString().split('+').join('')
  str = decodeURIComponent(str.slice(0, -1))

  const coords = filialsCoords.filter(item => item[0] === str)
  let x = coords[1]
  let y = coords[2]
  return (
    <main
      className="max-w-[1920px] bg-white  flex flex-col items-center justify-center
    mx-auto relative overflow-hidden"
    >
      <section className='h-screen xl:h-[90vh] mt-8 xsm:mb-8 md:mb-6'>
        <div className="container mx-auto h-full xl:pt-10">
          {/* text & img wrapper */}
          <div className="flex flex-col xl:flex-row justify-center items-center ">
            <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0 mb-3">
              {/* <motion.h3 */}
              <h3
                className="h2 text-center"
                // variants={fadeIn('down', 0.2)}
                // initial='hidden'
                // whileInView={'show'}
                // viewport={{ once: false, amount: 0.6 }}
              >
                Вы на странице филиала, который находится по адресу:
              </h3>
              <h2 className="h2 text-center">{location}</h2>
              <div className="flex justify-center">
                <LocationSelection />
              </div>
              {/* Карта */}
              <div
                className="map__iframe  border-2 mt-4 mx-10 
                          border-red-600 rounded-3xl
                          position:relative overflow-hidden
                          xxsm:min-h-[100px]
                          md:min-h-[500px]
                          "
              >
                <iframe
                  height="500"
                  className="xxsm:max-h-[300px]
                             xsm:max-h-[400px]
                             sm:max-h-[500px]
                  "
                  width="100%"
                  src={`https://yandex.ru/map-widget/v1/?ll=${y}},${x}}&mode=poi&poi[point]=${y}},${x}&z=16.58}`}
                  frameborder="0"
                  allowfullscreen="true"
                  style={{ position: "relative" }}
                >
                </iframe>
              </div>

            </div>
          </div>
          <h1 className="h2 text-center mt-4">В этом филиале свободны следующие авто:</h1>
        </div>
      </section>
      <Cars />


    </main>
  )
}
