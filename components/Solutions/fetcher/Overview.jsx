'use client'

const Overview = () => {
  return (
    <section className=" bg-[#462AD4] relative"  style={{ paddingTop: '50px', paddingBottom: '50px'}}>
      <div className="absolute -top-[300px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container relative ">
        <div className="absolute left-1/2 top-20 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
          <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
        </div>
        <div className="grid grid-cols-">
           <div className="max-w-[1000px]">
              <p className="section-tagline"></p>
              <h2 className='text-white'>Introducation</h2>
              <br/>
              <p className='text-white'>
              Our Fetcher service simplifies the KYC process by allowing businesses to retrieve detailed customer information using only a name and mobile number. This efficient solution is designed to support a range of industries by providing quick access to essential customer data.
              </p>
            </div>  
            
          <div className="max-md:col-span-full md:col-span-6">
           
          </div>
          <div className="max-w-[1000px] py-3 max-md:col-span-full md:col-span-6">
          <br/><h2 className='text-white'>Compliance Assurance</h2>
          <br/>
              <p className='text-white'>
              Fetcher adheres to the highest standards of compliance, ensuring all data retrieval is in full alignment with Indian regulatory requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview
