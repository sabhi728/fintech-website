
import PageHero from '@/components/heros/PageHero'
import Who from '@/components/company/partner-program/who'
import How from '@/components/company/partner-program/How'
import Faq from '@/components/company/partner-program/Faq'
import Benefits from '@/components/company/partner-program/Benefits'
import React from 'react'
import Link from 'next/link'

const Partnerprogram = () => {
  return (
    <>
      <PageHero 
        subtitle=""
        title="Partner with fin: Innovate and Grow Together"
        paragraph="Join fin Tech's Partner Program to expand your offerings with cutting-edge
fintech solutions and drive mutual success"
      />
      <Who />
      <How />
      <Benefits />
      <Faq />

    <section className="relative pb-20 pt-150 max-md:overflow-hidden max-md:pb-25 max-md:pt-25" style={{ backgroundColor: '#462AD4' }}>
      <div className="container relative ">
        <div className="absolute -bottom-[442px] left-1/2 -z-10  flex -translate-x-1/2 max-md:hidden max-md:flex-col">
          <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
        </div>
        <div className="absolute -bottom-[350px] left-1/2 -z-10 h-full w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')]  bg-contain bg-center bg-no-repeat p-[350px] opacity-70 md:hidden"></div>
        <div className=" mx-auto text-center">
          <p className="mb-5 text-[32px] font-semibold max-lg:text-[32=px] text-white ">
          Ready to partner with fin? Contact us today to learn more and get started.</p>
          <Link href="/contact" className="btn">
          Join Now
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}

export default Partnerprogram
