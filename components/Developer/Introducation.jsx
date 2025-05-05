'use client'

const Introducation = () => {
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
            <h2 className='text-white'>Getting Started</h2>
            <br/>
            <p className="text-white">
            <b>Introduction:-</b> "Welcome developers! Here you’ll find everything you need to integrate fin’s
             solutions into your applications. Our comprehensive API documentation, SDKs, and developer
             tools are designed to make integration smooth and efficient."
             <br/>
             <br/>
             <b>API Documentation:-</b> "Access detailed API documentation to understand how to integrate our
             solutions with your systems. Our APIs cover a wide range of services including KYC, payment
             processing, data retrieval, and more."
             <br/>
             <br/>
             <b>SDKs and Tools:-</b> "Download SDKs and development tools that facilitate easy integration and
             implementation of fin’s services."
             <br/>
             <br/>
             <b>Sample Code:-</b> "Explore sample code and example projects to help you get started quickly and
             efficiently.
            </p>
          </div>  
      </div>
    </div>
  </section>
  )
}

export default Introducation
