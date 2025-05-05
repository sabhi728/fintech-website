'use client'

const Stories = () => {
  return (
    <section className=" bg-[#0A003D] relative"  style={{ paddingTop: '50px', paddingBottom: '50px'}}>
      <div className="absolute -top-[300px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container relative ">
        <div className="absolute left-1/2 top-20 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
          <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
        </div>
            <div className="max-w-[1000px]">
              <p className="section-tagline"></p>
              <h2 className='text-white'> Case Study</h2>
              <br/>
              <p className='text-white'>
              Learn how a leading bank implemented our E-Sign solution to reduce
document processing time by 75%, enhancing customer satisfaction and operational
efficiency
              </p>
            </div> 
        <div className="grid grid-cols-12 pt-[50px]">
          <div className="max-md:col-span-full md:col-span-6">
            <div className="max-w-[550px]">
              <p className="section-tagline text-white">Testimonial</p>
              <h3 className="text-white">CEO of a major insurance company</h3>
            </div>
          </div>
          <div className="max-w-[590px] py-10 max-md:col-span-full md:col-span-6 text-white">
            <p className="text-white">
            The ability to sign documents electronically with Aadhaar OTP has transformed how we manage contracts, making our processes faster and more reliabl
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stories
