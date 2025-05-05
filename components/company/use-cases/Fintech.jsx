'use client'

const Fintech = () => {
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
            <h2 className='text-white'>Fintech APIs</h2>
            <br/>
            <h3 className='text-white'>1. Credit Scoring API:-</h3>
            <p className="text-white">
              Providing real-time credit scores to financial institutions to aid in lending decisions.
            </p>
            <br/>
            <h3 className='text-white'>2. Fraud Detection API:-</h3>
            <p className="text-white">
              Integrating advanced algorithms to detect and prevent fraudulent transactions in real-time.
            </p>
            <br/>
            <h3 className='text-white'>3. Investment and Trading Platforms:-</h3>
            <p className="text-white">
              Enhancing trading platforms with real-time financial data feeds and transaction capabilities.
            </p>
            <br/>
            <h3 className='text-white'>4. Personal Finance Management:-</h3>
            <p className="text-white">
              Offering APIs that help users manage their finances, track spending, and plan budgets.
            </p>
            <br/>
            <h3 className='text-white'>5. Insurance Claim Processing:-</h3>
            <p className="text-white">
              Streamlining the processing of insurance claims through efficient data retrieval and automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fintech