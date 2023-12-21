'use client'

import { Menu, Listbox } from '@headlessui/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

import { usePathname } from 'next/navigation';

const locations = [
  "ул. Пушкина, д. 116б, г. Пермь",
  "ул. Ленина, д. 60, г. Пермь",
  "ул. Революции, д. 13, г. Пермь",
  "ул. Луначарского, д. 90, г. Пермь",
  "ул. Ленина, д. 10, г. Пермь",
]




export const LocationSelection = () => {

  const [location, setLocation] = useState("не выбрано")


  const pathName = usePathname()
  const parts = pathName.split('/')
  const page = parts[parts.length - 1]
  const nesting = parts.length - 2
  let substr = ''
  // routing
  for (let i = 0; i < nesting; i++) {
    substr += '../'
  }
  if (nesting === 0 && (page !== '' || !page.startsWith('#'))) {
    substr += '../'
  }

  useEffect(() => {
    if (location.toLowerCase() !== "не выбрано")
      window.location.href = `${substr}filials?${location}`
  }, [location])


  return (
    <Menu as='div' className='w-full h-full flex xl:flex-row'>
      <div className="relative flex-1">
        <Listbox>
          <Listbox.Button
            className='dropdown-btn w-full h-full flex flex-1
                    justify-center items-center xl:items-start xl:pl-8'
          >
            <div className='w-full h-16 xl:h-full flex justify-center xl:justify-start
                          xl:border-r xl:border-black/10'
            >
              <div className="flex flex-col justify-center">
                <div className="flex flex-col xl:flex-row items-center xl:gap-x-2
                              gap-y-2 xl:gap-y-0"
                >
                  <FaMapMarkerAlt className='text-accent' />
                  <div
                    className="text-[15px] uppercase font-bold"
                  >
                    Все филиалы
                  </div>
                </div>
                <div className="uppercase font-medium text-[13px] text-secondary 
                                  text-center xl:ml-6 xl:text-left"
                >
                  {location}
                </div>
              </div>
            </div>
          </Listbox.Button>
          <Listbox.Options
            className='dropdown-menu shadow-lg absolute -top-56 xl:top-[90px]
                   left-1/2 xl:left-0 z-10 transform -translate-x-1/2 xl:-translate-x-0
                   text-sm text-center xl:text-left w-full bg-white max-w-[332px] py-0
                   rounded-[10px]'
          >
            {
              locations.map((location, index) => (
                <Listbox.Option key={index} value={index}
                  onClick={() => setLocation(location)}
                  className="uppercasetext-[13px] cursor-pointer py-4 xl:pl-10 
                          hover:bg-gray-50"
                >
                  {location}
                </Listbox.Option>
              ))}
          </Listbox.Options>
        </Listbox>
      </div>
    </Menu>
  )
}
