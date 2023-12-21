'use client'

import React from 'react'

import { TestimonialSlider } from './TestimonialSlider'

export const Testimonial = () => {
  return (
    <section
      className='section flex items-center'
      id="testimonial"
    >
      <div className="container mx-auto">
        <div className="">
          <TestimonialSlider />
        </div>
      </div>
    </section>
  )
}
