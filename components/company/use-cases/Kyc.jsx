'use client'

const KYC = () => {
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
            <h2 className='text-white'>KYC and Onboarding</h2>
            <br/>
            <h3 className='text-white'>1. Retail Banking Onboarding:-</h3>
            <p className="text-white">
              Streamlining the customer onboarding process in banks through automated identity verification, reducing paperwork and wait times.
            </p>
            <br/>
            <h3 className='text-white'>2. Telecommunications Subscriber Registration:-</h3>
            <p className="text-white">
              Enhancing the speed and accuracy of new subscriber verification to comply with regulatory requirements and reduce fraud.
            </p>
            <br/>
            <h3 className='text-white'>3. Real Estate Tenant Screening:-</h3>
            <p className="text-white">
              Automating the verification of tenant information to ensure reliability and compliance with property management standards.
            </p>
            <br/>
            <h3 className='text-white'>4. Insurance Customer Onboarding:-</h3>
            <p className="text-white">
              Facilitating faster policy issuance by quickly verifying applicant details against existing databases.
            </p>
            <br/>
            <h3 className='text-white'>5. Employee Onboarding:-</h3>
            <p className="text-white">
              Simplifying the process of employee verification for compliance with labor laws and internal security protocols.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KYC