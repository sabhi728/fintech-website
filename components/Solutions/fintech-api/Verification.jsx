'use client'

const Verification = () => {
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
              <p className="section-tagline text-white">Identity Verification APIs</p>
              <h2 className='text-white'> Aadhaar Verification APIs</h2>
              <br/>
              <p className='text-white'>
              Automate and secure your KYC processes with Aadhaar Verification, Aadhaar OCR, Aadhaar Masking, and more for a paperless and offline verification experience
            </p>
            </div>  <div className="max-md:col-span-full md:col-span-6">
           
          </div>
          <div className="max-w-[1000px] py-3 max-md:col-span-full md:col-span-6">
          <br/><h2 className='text-white'>Other ID Verifications</h2>
          <br/>
              <p className='text-white'>
              Ensure comprehensive user verification with APIs for Driving License, PAN Card, Passport, and Voter ID, including features like PAN Aadhaar Seeding and PAN Name DoB checks.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Verification
