'use client'

const Who = () => {
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
            <h2 className='text-white'>Who Can Benefit?</h2>
            <br/>
            <p className="text-white">
              Whether you’re a consultant, developer, or technology provider, our Partner Program is designed to help you succeed by leveraging our advanced fintech solutions.
            </p>
            <br/>
            <br/>
            <h3 className='text-white'>Reseller Partner</h3>
            <br/>
            <p className="text-white">
              Promote fin’s offerings to your network and earn competitive commissions on every transaction.
            </p>
            <br/>
            <br/>
            <h3 className='text-white'>Technology Partner</h3>
            <br/>
            <p className="text-white">
              Integrate fin’s solutions into your platforms, offering your clients enhanced financial services with our robust APIs.
            </p>
            <br/>
            <br/>
            <h3 className='text-white'>Consultants and Agencies</h3>
            <br/>
            <p className="text-white">
              Leverage our solutions to provide innovative financial technology to your clients, boosting your service offerings.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Who