'use client'

import React, { useContext } from 'react'
import { LocationSelection } from './LocationSelection'
import { DateSelection } from './DateSelection'
import { HoursSelection } from './HoursSelection'
import { AuthContext } from '../context/auth'

export const SearchMobile = () => {

  const { isLoggedIn } = useContext(AuthContext)
  return (
    <div className='xl:hidden font-medium'>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4">
          <LocationSelection />
          <DateSelection />
          <HoursSelection />
          <div className="flex items-center px-6">
            <button className='btn btn-sm btn-accent w-[164px] mx-auto'>
              Поиск авто
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
