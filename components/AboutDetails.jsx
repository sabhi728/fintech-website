'use client'
import { AboutImages } from '@/data/data'
import Image from 'next/image'

const AboutDetails = () => {
  return (
    <section className=" bg-[#462AD4] relative"  style={{ paddingTop: '50px', paddingBottom: '50px'}}>
      <div className="absolute -top-[300px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container relative ">
        <div className="absolute left-1/2 top-20 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
          <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
        </div>
        <div className="mb-[160px] grid grid-cols-3 items-center gap-10  max-md:mb-25 max-md:grid-cols-1">
          {AboutImages.map((items) => (
            <div className="overflow-hidden rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200" key={items.id}>
              <Image src={items.image} alt="about images" className="h-auto w-full rounded" width={383} height={494} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-">
         <div className="max-w-[1000px]">
              <p className="section-tagline"></p>
              <h2 className='text-white'>Our Story</h2>
              <br/>
              <p className='text-white'>
            <b>Introduction:-</b>"Founded over a decade ago, Fin Tech has emerged as a visionary leader in the financial technology landscape, dedicated to developing solutions that not only meet today’s financial challenges but also anticipate tomorrow’s opportunities."
            <br/>
            <br/>
            <b>Mission:-</b> "Our mission is to empower businesses around the world with innovative, secure, and efficient financial services, enabling them to thrive in an increasingly digital economy."
            </p>
            </div>  <div className="max-md:col-span-full md:col-span-6">
           
          </div>
          <div className="max-w-[1000px] py-3 max-md:col-span-full md:col-span-6">
          <br/><h2 className='text-white'>Our Experties</h2>
          <br/>
              <p className='text-white'>
              "With more than ten years of industry experience, fin Tech has mastered the art of blending cutting-edge technology with deep financial insights to deliver unparalleled solutions. Our expertise spans across critical financial processes, including KYC verifications, payment solutions, and risk management, all designed to enhance operational efficiency and security"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutDetails
