
import PageHero from '@/components/heros/PageHero'
import Introducation from '@/components/company/compliance/Introducation'
import Certifications from '@/components/company/compliance/Certification'
import Continuous from '@/components/company/compliance/Continous'
import Regulatory from '@/components/company/compliance/Regulatory'
import Third from '@/components/company/compliance/Thied'
import Transparency from '@/components/company/compliance/Transparecy'
import { complianceFeaturesData } from '@/data/data'
import React from 'react'
import Link from 'next/link'

const compliance = () => {
  return (
    <>
      <PageHero 
        subtitle=""
        title="Commitment to Excellence in Compliance and Security"
        paragraph="Adhering to the highest standards to safeguard your operations and data"
      />
      <Introducation />
      <Certifications
        features={complianceFeaturesData}
        sectionTag={''}
        sectionTitle={'Certifications and Standards'}
        spacing={'max-md:py-25 py-150 bg-[#E3E4F8] dark:bg-dark-300 relative max-md:overflow-hidden'}
      />
      <Third />
      <Regulatory />
      <Continuous />
      <Transparency />
    <section className="relative pb-20 pt-150 max-md:overflow-hidden max-md:pb-25 max-md:pt-25" style={{ backgroundColor: '#4642AD' }}>
      <div className="container relative ">
        <div className="absolute -bottom-[442px] left-1/2 -z-10  flex -translate-x-1/2 max-md:hidden max-md:flex-col">
          <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
        </div>
        <div className="absolute -bottom-[350px] left-1/2 -z-10 h-full w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')]  bg-contain bg-center bg-no-repeat p-[350px] opacity-70 md:hidden"></div>
        <div className=" mx-auto text-center">
          <p className="mb-5 text-[32px] font-semibold max-lg:text-[32=px] text-white ">
          To learn more about our compliance policies or to request a compliance report,
please get in touch with our Compliance team.</p>
          <Link href="/contact" className="btn">
          Contact Our Compliance Team
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}

export default compliance
