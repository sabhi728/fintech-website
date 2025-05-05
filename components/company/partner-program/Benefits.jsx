'use client'

const Benefits = () => {
  return (
    <section className="bg-[#4642AD] relative" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
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
            <h2 className='text-white'>Benefits of Partnering with fin</h2>
            <br/>
            <h3 className='text-white'>Top Tier Commissions</h3><br/>
            <p className="text-white">
              Earn attractive commissions with no cap, maximizing your revenue potential as you grow.
            </p>
            <br/>
            <br/>
            <h3 className='text-white'>Seamless Onboarding</h3><br/>
            <p className="text-white">
              Our quick and seamless onboarding process ensures you can start earning in no time.
            </p>
            <br/>
            <br/>
            <h3 className='text-white'>Dedicated Support</h3>
            <br/>
            <p className="text-white">
              Receive personalized support from dedicated account managers focused on your success.
            </p>
            <br/>
            <br/>
            <h3 className='text-white'>Priority Assistance</h3>
            <br/>
            <p className="text-white">
              Gain access to priority customer support and tailored assistance for your business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits