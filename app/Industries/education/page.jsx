
import PageHero from '@/components/heros/PageHero'
import Introducation from '@/components/Industries/education/Introducation'
import Kyc from '@/components/Industries/education/Kyc'
import Fetcher from '@/components/Industries/education/Fetcher'
import Payment from '@/components/Industries/education/Payment'
import Fintech from '@/components/Industries/education/Fintech'
import Esign from '@/components/Industries/education/E-sign'
import B2B from '@/components/Industries/education/B2B'
import Credit from '@/components/Industries/education/Credit'
import React from 'react'
import Link from 'next/link'

const education = () => {
  return (
    <>
      <PageHero 
        subtitle=""
        title="Revolutionizing Educational Administration with Advanced Fintech Solutions"
        paragraph="Empower your educational institution with cutting-edge technology designed to simplify processes, enhance student engagement, and ensure regulatory compliance."
      />
      <Introducation/>
      <Kyc />
      <Fetcher/>
      <Payment/>
      <Fintech/>
      <Esign/>
      <B2B/>
      <Credit/>

    <section className="relative pb-20 pt-150 max-md:overflow-hidden max-md:pb-25 max-md:pt-25" style={{ backgroundColor: '#462AD4' }}>
      <div className="container relative ">
        <div className="absolute -bottom-[442px] left-1/2 -z-10  flex -translate-x-1/2 max-md:hidden max-md:flex-col">
          <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
        </div>
        <div className="absolute -bottom-[350px] left-1/2 -z-10 h-full w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')]  bg-contain bg-center bg-no-repeat p-[350px] opacity-70 md:hidden"></div>
        <div className=" mx-auto text-center">
          <p className="mb-5 text-[32px] font-semibold max-lg:text-[20px] text-white ">
          Ready to Transform Your Educational Operations with Fintech Innovations?</p>
          <Link href="/contact" className="btn">
          Learn more
          </Link>
        </div>
        </div>
    </section>
    </>
  )
}
export default education
