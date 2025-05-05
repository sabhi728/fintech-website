
import PageHero from '@/components/heros/PageHero'
import B2b from '@/components/company/product-overview/B2b'
import Kyc from '@/components/company/product-overview/Kyc'
import Payment from '@/components/company/product-overview/Payment'
import Credit from '@/components/company/product-overview/Credit'
import Esign from '@/components/company/product-overview/Esign'
import Fintech from '@/components/company/product-overview/Fintech'
import Fetcher from '@/components/company/product-overview/Fetcher'
import React from 'react'
import Link from 'next/link'

const product = () => {
  return (
    <>
      <PageHero 
        subtitle=""
        title="Innovative Financial Solutions Designed for Seamless Business Operations"
        paragraph="Explore our comprehensive suite of services tailored to enhance efficiency, security, and compliance across your financial operations"
      />
      <Kyc />
      <Fetcher />
      <Payment />
      <Fintech />
      <Esign />
      <B2b />
      <Credit />
      

    <section className="relative pb-20 pt-150 max-md:overflow-hidden max-md:pb-25 max-md:pt-25" style={{ backgroundColor: '#462AD4' }}>
      <div className="container relative ">
        <div className="absolute -bottom-[442px] left-1/2 -z-10  flex -translate-x-1/2 max-md:hidden max-md:flex-col">
          <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
        </div>
        <div className="absolute -bottom-[350px] left-1/2 -z-10 h-full w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')]  bg-contain bg-center bg-no-repeat p-[350px] opacity-70 md:hidden"></div>
        <div className=" mx-auto text-center">
          <p className="mb-5 text-[32px] font-semibold max-lg:text-[20=px] text-white ">
          Ready to transform your financial operations with cutting-edge technology?
          Contact us today to learn more about our solutions or to schedule a demo</p>
           <Link href="/contact" className="btn">
          Schedule a Demo
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}
export default product
