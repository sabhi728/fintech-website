
import PageHero from '@/components/heros/PageHero'
import Introducation from '@/components/company/case-studies/Introducation'
import Challenge from '@/components/company/case-studies/Challenge'
import Solution from '@/components/company/case-studies/Solution'
import Results from '@/components/company/case-studies/Results'
import FuturePlans from '@/components/company/case-studies/Future'
import Evaluation from '@/components/company/case-studies/Evaluation'
import React from 'react'
import Link from 'next/link'

const casestudy = () => {
  return (
    <>
      <PageHero 
        subtitle=""
        title="Revolutionizing Retail Payments: A Success Story"
        paragraph="Discover how our UPI and AutoPay solutions streamlined checkout processes,
reducing times by 50% and boosting customer satisfaction"
      />
      <Introducation />
        <Challenge />
        <Results />
        <Evaluation />
        <FuturePlans />
        <Solution />
        

    
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
          Ready to transform your payment processes and enhance customer
experience? Contact us to learn how our payment solutions can revolutionize your
business operations</p>
          <Link href="/contact" className="btn">
          Explore Our Solutions
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}

export default casestudy
