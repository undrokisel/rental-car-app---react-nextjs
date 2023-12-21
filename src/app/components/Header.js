"use client"

import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { Link as ScrollLink } from 'react-scroll';

import NextLink from 'next/link';


import { BiMenuAltRight, BiX } from 'react-icons/bi'
import { SearchMobile } from './SearchMobile';
import { SearchContext } from '../context/search';
import { AuthContext } from '../context/auth';

import { usePathname } from 'next/navigation';


export const Header = () => {
  const { searchActive, setSearchActive } = useContext(SearchContext);
  const { isLoggedIn, setisLoggedIn } = useContext(AuthContext);

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
      <div
        className="xl:container mx-auto
                  flex flex-col xl:flex-row xl:items-center 
                  xl:justify-between
      ">
        <div
          className="flex px-4 items-center justify-between">
          { /*logo*/}
          <NextLink
            onClick={() => { setNav(!nav) }}
            href={`${substr}#home`}
            smooth={desktopMode}
            spy={true}
            className='cursor-pointer'
          >
            <Image priority src={'/icons/logo3.png'}
              width={194} height={64} alt=''
            />
          </NextLink>
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
        <nav
          className={`${nav
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
          {
            isLoggedIn
              ? (<NextLink href="lk">Личный кабинет</NextLink>)
              : (<>
                <NextLink
                  onClick={() => { setNav(false) }}
                  href={`${substr}auth/login`}>
                  Войти
                </NextLink>
                <NextLink
                  onClick={() => { setNav(false) }}
                  href={`${substr}auth/register`}>
                  Зарегистрироваться
                </NextLink>
              </>)
          }
          {/* главная */}
          <NextLink
            href={`${substr}#home`}
            onClick={() => { setNav(false) }}
            className='cursor-pointer'
            activeClass='active'
            smooth={desktopMode}
            spy={true}
          >
            Главная
          </NextLink>

          {/* Машины */}
          <NextLink
            // <NextLink
            href={`${substr}#cars`}
            onClick={() => { setNav(false) }}
            className='cursor-pointer'
            // to="cars"
            activeClass='active'
            smooth={desktopMode}
            spy={true}
          >Машины
          </NextLink>
          {/* О нас */}
          <NextLink
            href={`${substr}#about`}
            onClick={() => { setNav(false) }}
            className='cursor-pointer'
            to="about"
            activeClass='active'
            smooth={desktopMode}
            spy={true}
          >О нас
          </NextLink>
          {/* преимущества */}
          <NextLink
            href={`${substr}#why`}
            onClick={() => { setNav(false) }}
            className='cursor-pointer'
            activeClass='active'
            smooth={desktopMode}
            spy={true}
          >Наши преимущества
          </NextLink>
          {/* Отзывы */}
          <NextLink
            href={`${substr}#testimonial`}
            onClick={() => { setNav(false) }}
            className='cursor-pointer'
            activeClass='active'
            smooth={desktopMode}
            spy={true}
          >Отзывы
          </NextLink>
          {/* Новости */}
          <NextLink
            href={`${substr}news`}
            onClick={() => { setNav(false) }}
            className='cursor-pointer'
            activeClass='active'
            smooth={desktopMode}
            spy={true}
          >Новости
          </NextLink>
          {/* Контакты */}
          <NextLink
            href={`${substr}#contacts`}
            onClick={() => { setNav(false) }}
            className='cursor-pointer'
            to="contacts"
            activeClass='active'
            smooth={desktopMode}
            spy={true}
          >Контакты
          </NextLink>
          <SearchMobile />
        </nav>


      </div>
    </header>
  )
}
