'use client'

const eSign = () => {
  return (
    <section className="bg-[#462AD4] relative" style={{ paddingTop: '150px', paddingBottom: '50px' }}>
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
            <h2 className='text-white'>eSign</h2>
            <br/>
            <h3 className='text-white'>1. Contract Management:-</h3>
            <p className="text-white">
              Enabling digital signing of contracts and agreements in sectors like real estate, legal, and human resources.
            </p>
            <br/>
            <h3 className='text-white'>2. Government Document Processing:-</h3>
            <p className="text-white">
              Facilitating the digital signing of government documents for services such as license renewals and tax filings.
            </p>
            <br/>
            <h3 className='text-white'>3. Banking Loan Agreements:-</h3>
            <p className="text-white">
              Allowing customers to digitally sign loan documents from any location, speeding up the approval process.
            </p>
            <br/>
            <h3 className='text-white'>4. Corporate Compliance Documents:-</h3>
            <p className="text-white">
              Streamlining the signing of compliance documents within large organizations.
            </p>
            <br/>
            <h3 className='text-white'>5. Healthcare Consents:-</h3>
            <p className="text-white">
              Enabling patients to digitally sign consent forms and treatment agreements securely.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default eSign