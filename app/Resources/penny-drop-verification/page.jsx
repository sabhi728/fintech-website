import PageHero from '@/components/heros/PageHero'
import Introducation from '@/components/Resources/penny-drop-verification/Introducation'
import Application from '@/components/Resources/penny-drop-verification/Application'
import How from '@/components/Resources/penny-drop-verification/How'
import Faq from '@/components/Resources/penny-drop-verification/Faq'
import { PennyFeaturesData } from '@/data/data'
import React from 'react'
import Link from 'next/link'

const penny = () => {
  return (
    <>
      <PageHero 
        subtitle=""
        title="Secure Your Financial Transactions with Penny Drop Verification"
        paragraph="Verify bank accounts in real-time to prevent fraud and ensure accurate payments across all industries"/>
      <Introducation />
      <How />
      <Application
        features={PennyFeaturesData}
        sectionTag={''}
        sectionTitle={'Applications of Penny Drop Verification Across Industries'}
        spacing={'max-md:py-25 py-150 bg-[#E3E4F8] dark:bg-dark-300 relative max-md:overflow-hidden'}
      />
     <Faq/>
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
          Ensure the authenticity of bank accounts with our efficient Penny Drop
          Verification services. Get in touch to integrate this solution today!
          </p> 
          <Link href="/contact" className="btn">
          Start Using Penny Drop Verification
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}

export default penny
