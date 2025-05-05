'use client'
import React, { useState } from 'react'
import FaqItem from '@/components/FaqItem'
import { FAQpanverification } from '@/data/data'

const Faqpan = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }
  const generalFaq = FAQpanverification.filter((faq) => faq.type.includes('general'))
  return (
    <section className="relative pt-[50px] pb-[100px]  max-md:overflow-hidden bg-[#0A003D]">
      <div className="container relative">
        <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
          <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
        </div>
        <div className="absolute left-1/2 top-150 -z-10 h-full w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')]  bg-cover bg-center bg-no-repeat p-[350px] opacity-70 md:hidden"></div>
        <div className=" mx-auto max-w-[830px]">
          <div className=" text-center">
            <p className="section-tagline mb-3 text-white">Faq’s</p>

            <h2 className="mb-12 text-white">
              Frequently Asked <br />
              Question
            </h2>
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

export default Faqpan
