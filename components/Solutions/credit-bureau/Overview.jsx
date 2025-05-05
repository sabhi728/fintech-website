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
              Our Credit Bureau services equip you with detailed credit reports from top
bureaus including Equifax, TransUnion CIBIL, CRIF High Mark, and Experian. Whether
you’re assessing an individual or a corporation, our service provides deep insights into
credit histories, helping you mitigate risk and make informed financial decisions </p>
            </div>  
            
          <div className="max-md:col-span-full md:col-span-6">
           
          </div>
          <div className="max-w-[1000px] py-3 max-md:col-span-full md:col-span-6">
          <br/><h2 className='text-white'>Key Benefits</h2>
          <br/>
              <p className='text-white'>
              Enhance your risk assessment processes with accurate, up-to-date credit
              information that supports your financial activities across various industries</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview
