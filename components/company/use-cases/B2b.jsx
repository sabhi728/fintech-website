'use client'

const B2b = () => {
  return (
    <section className="bg-[#0A003D] relative" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
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
            <h2 className='text-white'>B2B Onboarding</h2>
            <br/>
            <h3 className='text-white'>1. Vendor Management Systems:-</h3>
            <p className="text-white">
              Automating the onboarding of new vendors to ensure all compliance and due diligence are met.
            </p>
            <br/>
            <h3 className='text-white'>2. Partner Relationship Management:-</h3>
            <p className="text-white">
              Facilitating the integration of new business partners into supply chains and distribution networks.
            </p>
            <br/>
            <h3 className='text-white'>3. Corporate Client Onboarding:-</h3>
            <p className="text-white">
              Streamlining the addition of new corporate clients in banking and financial services.
            </p>
            <br/>
            <h3 className='text-white'>4. Franchise Management:-</h3>
            <p className="text-white">
              Managing the onboarding of new franchisees to ensure brand consistency and compliance.
            </p>
            <br/>
            <h3 className='text-white'>5. Software as a Service (SaaS) Platforms:-</h3>
            <p className="text-white">
              Enabling other businesses to integrate and use the platform quickly and efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default B2b