
import PageHero from '@/components/heros/PageHero'
import Overview from '@/components/Solutions/fetcher/Overview'
import Keyfeatures from '@/components/Solutions/fetcher/Keyfeatures'
import Applications from '@/components/Solutions/fetcher/Appllications'
import Specifications from '@/components/Solutions/fetcher/Specifications'
import Stories from '@/components/Solutions/fetcher/Stories'
import { ApplicationFeaturesData } from '@/data/data'
import React from 'react'
import Link from 'next/link'

const Fetcher = () => {
  return (
    <>
      <PageHero 
        subtitle=""
        title="Instant KYC Retrieval Across Industries"
        paragraph="Access comprehensive customer profiles with just a name and mobile number, leveraging our fully compliant KYC database."
      />
      <Overview />
      <Applications
        features={ApplicationFeaturesData}
        sectionTag={''}
        sectionTitle={'Industry Applications'}
        spacing={'max-md:py-25 py-150 bg-[#E3E4F8] dark:bg-dark-300 relative max-md:overflow-hidden'}
      />
      <Keyfeatures />
      <Specifications />
      <Stories/>

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
          Ready to streamline your KYC process?
          </p>
          <Link href="/contact" className="btn">
          Contact Us to Get Started with Fetcher
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}

export default Fetcher
