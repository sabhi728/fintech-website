'use client'

const Fetcher = () => {
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
            <h2 className='text-white'>Fetcher</h2>
            <br/>
            <h3 className='text-white'>1. Financial Profile Aggregation:-</h3>
            <p className="text-white">
              Retrieving comprehensive financial profiles for loan assessment or credit scoring.
            </p>
            <br/>
            <h3 className='text-white'>2. Healthcare Patient Data Retrieval:-</h3>
            <p className="text-white">
              Accessing patient historical health records across platforms for better treatment planning.
            </p>
            <br/>
            <h3 className='text-white'>3. E-commerce Customer Validation:-</h3>
            <p className="text-white">
              Quickly verifying new user information to enhance trust and security on e-commerce platforms.
            </p>
            <br/>
            <h3 className='text-white'>4. Educational Credentials Verification;-</h3>
            <p className="text-white">
              Streamlining student admissions by fetching academic records and credentials automatically.
            </p>
            <br/>
            <h3 className='text-white'>5. Travel and Hospitality Guest Check-In:-</h3>
            <p className="text-white">
              Speeding up the check-in process by retrieving verified personal data from various sources.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fetcher