'use client'

import React from 'react'
import { Brands } from './Brands'
import { CarsSlider } from './CarsSlider'

export const Cars = () => {
  return (
    <section
      className="h-screen flex items-center"
      id='cars'
    >
      <div className="container mx-auto">
        <Brands/>
        <CarsSlider/>
      </div>
    </section>
  )
}
