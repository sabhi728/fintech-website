import PageHero from '@/components/heros/PageHero'
import Introducation from '@/components/Resources/employement-verification/Introducation'
import Application from '@/components/Resources/employement-verification/Applicatioin'
import Faq from '@/components/Resources/employement-verification/Faq'
import { EmployFeaturesData } from '@/data/data'
import React from 'react'
import Link from 'next/link'

const employement = () => {
  return (
    <>
      <PageHero 
        subtitle=""
        title="Secure Your Hiring Process with Reliable Employment Verification"
        paragraph="Streamline your recruitment efforts and enhance security with our comprehensive employment verification services"
      />
      <Introducation />
      <Application
        features={EmployFeaturesData}
        sectionTag={''}
        sectionTitle={'Applications of Employment Verification Across Industries'}
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
          Ensure the integrity of your workforce with our Employment Verification
          services. Contact us today to learn more and get started! </p>
          <Link href="/contact" className="btn">
          Verify Employment Now"
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}

export default employement
