import Faq from '@/components/company/use-cases/Faq'
import Fintech from '@/components/company/use-cases/Fintech'
import B2b from '@/components/company/use-cases/B2b'
import Payment from '@/components/company/use-cases/Payment'
import KYC from '@/components/company/use-cases/Kyc'
import Fetcher from '@/components/company/use-cases/Fetcher'
import Credit from '@/components/company/use-cases/Credit'
import Esign from '@/components/company/use-cases/Esign'
import React from 'react'
import Link from 'next/link'

const usecase = () => {
  return (
    <>
        <Esign/>
        <Credit/>
        <Fintech/>
        <B2b/>
        <Payment/>
        <KYC/>
        <Fetcher/>
      
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
          Explore how our solutions can transform your business operations. Contact us
today for a detailed consultation and demo</p>
          <Link href="/contact" className="btn">
          Request a Demo
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}

export default usecase
