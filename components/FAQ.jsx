'use client'
import React, { useState } from 'react'
import { FAQData } from '@/data/data'
import FaqItem from './FaqItem'
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }
  const generalFaq = FAQData.filter((faq) => faq.type.includes('general'))

  return (
    <section className=" relative overflow-hidden bg-[#0A003D] pb-[130px] pt-150 dark:bg-dark max-md:py-20">
      <div className="container relative z-10">
        <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1 1xl:gap-x-24 ">
          <div>
            <p className="section-tagline text-white">Faq&rsquo;s</p>

            <h2 className="mb-8 text-white">
              Frequently Asked <br />
              Question
            </h2>
            <p className='text-white'>
              
            </p>
          </div>
          <div className="[&>*:not(:last-child)]:mb-5">
            {generalFaq.map((faq) => (
              <FaqItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={activeIndex === faq.id}
                onClick={() => handleItemClick(faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
