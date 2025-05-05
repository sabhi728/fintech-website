import PageHero from '@/components/heros/PageHero'
import Introducation from '@/components/Resources/digilocker/Introducation'
import What from '@/components/Resources/digilocker/What'
import Bussiness from '@/components/Resources/digilocker/Bussiness'
import Features from '@/components/Resources/digilocker/Features'
import Why from '@/components/Resources/digilocker/Why'

import { digiFeaturesData } from '@/data/data'
import React from 'react'
import Link from 'next/link'

const digi = () => {
  return (
    <>
      <PageHero 
        subtitle=""
        title="Empower Your Business with Secure DigiLocker Integration"
        paragraph="Access, verify, and manage documents effortlessly with our advanced DigiLocker solutions" />
      <Introducation />
      <Features
        features={digiFeaturesData}
        sectionTag={''}
        sectionTitle={'Applications of Digilocker Verification Across Industries'}
        spacing={'max-md:py-25 py-150 bg-[#E3E4F8] dark:bg-dark-300 relative max-md:overflow-hidden'}
      />
      <Bussiness />
      <What/>
      <Why />
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
          "Integrate DigiLocker in your business operations and experience a
transformation in how you manage documents. Contact us to learn more and get
started</p>
          <Link href="/contact" className="btn">
          Sign Up for DigiLocker Integration Now
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}

export default digi
