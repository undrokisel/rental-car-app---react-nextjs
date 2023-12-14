"use client"

import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';

import { BiMenuAltRight, BiX } from 'react-icons/bi'
import { SearchMobile } from './SearchMobile';
import { SearchContext } from '../context/search';


export const Header = () => {
  const { searchActive, setSearchActive } = useContext(SearchContext);

  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: '(min-width: 1300px)',
  })

  useEffect(() => {

    const handleScroll = () => {
      //header
      if (window.scrollY > 40) {
        setHeader(true)
      } else {
        setHeader(false)
      }
      // search
      if (window.screenY > 80) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    }


    //Event Listener
    window.addEventListener('scroll', handleScroll);
    //removeEventLitener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  return (
    <header
      className={`${header
        ?
        'bg-white shadow-md py-2'
        :
        'bg-transparent shadow-none py-4'
        }
    fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div className="xl:container mx-auto
      flex flex-col xl:flex-row xl:items-center 
      xl:justify-between
      ">
        <div
          className="flex px-4 items-center justify-between">
          { /*logo*/}
          <Link
            to='home'
            smooth={desktopMode}
            spy={true}
            className='cursor-pointer'
          >
            <Image priority src={'/icons/logo3.png'}
              width={194} height={64} alt=''
            />
          </Link>
          { /* nav open menu */}
          <div
            onClick={() => { setNav(!nav) }}
            className='cursor-pointer xl:hidden'>{
              nav
                ? (<BiX className='text-4xl' />)
                : (<BiMenuAltRight className='text-4xl' />)
            }</div>
        </div>
        {/* nav */}
        <nav className={`${nav
          ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0'
          : 'max-h-0 xl:max-h-max'
          }
          flex flex-col 
          w-full bg-white gap-y-6 
          overflow-hidden
          font-bold xl:font-medium xl:flex-row xl:w-max
          xl:gap-x-8 xl:h-max xl:bg-transparent
          xl:pb-0 transition-all duration-150 text-center
          xl:text-left uppercase text-sm xl:text-[15px]
          xl:normal-case
        `}>
          <Link
            className='cursor-pointer'
            to="home"
            activeClass='active'
            smooth={desktopMode}
            spy={true}
          >Главная
          </Link>
          <Link
            className='cursor-pointer'
            to="cars"
            activeClass='active'
            smooth={desktopMode}
            spy={true}
          >Машины
          </Link>
          <Link
            className='cursor-pointer'
            to="about"
            activeClass='active'
            smooth={desktopMode}
            spy={true}
          >О нас
          </Link>
          <Link
            className='cursor-pointer'
            to="why"
            activeClass='active'
            smooth={desktopMode}
            spy={true}
          >Наши преимущества
          </Link>
          <Link
            className='cursor-pointer'
            to="testimonial"
            activeClass='active'
            smooth={desktopMode}
            spy={true}
          >Отзывы
          </Link>
          <Link
            className='cursor-pointer'
            to="contacts"
            activeClass='active'
            smooth={desktopMode}
            spy={true}
          >Контакты
          </Link>
          <Link
            className='xl:hidden bg-pink-300
            btn btn-primary btn-sm max-w-[164px] mx-auto
            '
            to="/"
            activeClass='active'
            smooth={desktopMode}
            spy={true}
          >Посмотреть все авто
          </Link>
          <SearchMobile />
        </nav>
      </div>
    </header>
  )
}
