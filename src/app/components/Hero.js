'use client'

import React, { useContext } from 'react'
import { Search } from './Search'
import { SearchContext } from '../context/search'
import Image from 'next/image'

export const Hero = () => {
  const { searchActive } = useContext(SearchContext)
  return (
    <section className='h-screen xl:h-[90vh] bg-[#b2b7c2]/10' id='home'>
      <div className="container mx-auto h-full xl:pt-10">
        {/* text & img wrapper */}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <div className="h1">
              Explore the Finest <span className="text-accent">Global</span>{' '}
              Offers
            </div>
            <p className='description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam minima odio ratione, amet non porro eaque illum, obcaecati consectetur doloremque molestias praesentium fugiat dolore eum adipisci ipsum architecto ipsa maxime.
            </p>
            <div className="flex gap-x-3 justify-center xl:justify-start">
              <button className='btn-cta'>
                <Image
                  width={132}
                  height={36}
                  alt=''
                  src={'/icons/buttons/google-play.svg'} />
              </button>
              <button className='btn-cta'>
                <Image
                  width={132}
                  height={36}
                  alt=''
                  src={'/icons/buttons/app-store.svg'} />
              </button>
            </div>
          </div>
          <div
            className="relative w-full h-full max-h-[50vh] md:max-w-[70vw]
                      xl:max-w-[860px] xl:max-h-[542px] xl:absolute
                      xl:-right-[100px] min-[1680px]
                      :right-[120px] xl:top-48"
          >
            <Image
              src='/images/hero/car.svg'
              fill
              alt=''
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
      </div>
      {
        searchActive
          ? (<div className='fixed top-[80px] z-10 w-full max-w-[1920px]'>
            <Search />
          </div>)
          : (<div className='-mt-12 w-full max-w-[1300px] mx-auto'>
            <Search />
          </div>)
      }
    </section>
  )
}
