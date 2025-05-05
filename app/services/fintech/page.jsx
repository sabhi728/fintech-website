
import PageHero from '@/components/heros/PageHero'
import Introducation from '@/components/Solutions/fintech-api/Introducation'
import Banking from '@/components/Solutions/fintech-api/Banking'
import Industry from '@/components/Solutions/fintech-api/Industry'
import Business from '@/components/Solutions/fintech-api/Business'
import Employment from '@/components/Solutions/fintech-api/Employment'
import Fraud from '@/components/Solutions/fintech-api/Fraud'
import Professional from '@/components/Solutions/fintech-api/Professional'
import Utilities from '@/components/Solutions/fintech-api/Utilities'
import Verification from '@/components/Solutions/fintech-api/Verification'
import { FintechFeaturesData } from '@/data/data'
import React from 'react'
import Link from 'next/link'

const Fintech = () => {
  return (
    <>
      <PageHero 
        subtitle=""
        title="Revolutionize Your Business with Comprehensive Fintech APIs"
        paragraph="Unlock the potential of your business with our secure, scalable, and diverse set of Fintech APIs designed for seamless integration across various sectors"
      />
      <Introducation />
      <Industry
        features={FintechFeaturesData}
        sectionTag={''}
        sectionTitle={'Industry Applications'}
        spacing={'max-md:py-25 py-150 bg-[#E3E4F8] dark:bg-dark-300 relative max-md:overflow-hidden'}
      />
      <Utilities />
      <Banking />
      <Business />
      <Professional />
      <Verification />
      <Fraud />
      <Employment />
      
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
          Integrate Flexibility and Security into Your Business Today! </p>
          <Link href="/contact" className="btn">
          Get API Access Now
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}

export default Fintech