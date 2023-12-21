'use client'

import React from 'react'
import { CarsSlider } from './CarsSlider'

export const Cars = () => {
  return (
    <section
      className="
      h-screen 
      flex items-center"
      id='cars'
    >
      <div className="container mx-auto">
        <CarsSlider/>
      </div>
    </section>
  )
}
