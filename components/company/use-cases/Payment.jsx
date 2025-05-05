'use client'

const Payment = () => {
  return (
    <section className="bg-[#462AD4] relative" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
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
            <h2 className='text-white'>Payment and Collection</h2>
            <br/>
            <h3 className='text-white'>1. Utility Bill Collection:-</h3>
            <p className="text-white">
              Facilitating seamless utility payments through integrated payment gateways for electricity, water, and gas.
            </p>
            <br/>
            <h3 className='text-white'>2. E-commerce Payments:-</h3>
            <p className="text-white">
              Enabling secure and fast transaction capabilities for online marketplaces.
            </p>
            <br/>
            <h3 className='text-white'>3. Subscription Services Management:-</h3>
            <p className="text-white">
              Automating recurring payments for services like streaming, software subscriptions, and membership fees.
            </p>
            <br/>
            <h3 className='text-white'>4. Microfinance Loan Disbursement:-</h3>
            <p className="text-white">
              Streamlining the disbursement and collection of micro-loans to borrowers in rural and semi-urban areas.
            </p>
            <br/>
            <h3 className='text-white'>5. Fundraising and Donations:-</h3>
            <p className="text-white">
              Simplifying the collection of donations for non-profits through easy-to-use payment solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Payment