'use client'

const Support = () => {
  return (
    <section className=" bg-[#0A003D] relative"  style={{ paddingTop: '50px', paddingBottom: '50px'}}>
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
            <h2 className='text-white'>Support & Resources</h2>
            <br/>
            <p className="text-white">
            <b>Developer Support</b>Our dedicated developer support team is here to help you with any
technical issues or questions. Reach out via email or our support portal."
<br/>
<br/>
<b>Community Forum:-</b>Join our developer community forum to share ideas, ask questions, and
collaborate with other developers using Fin’s solutions."
<br/>
<br/>
<b>Webinars and Tutorials:-</b>Attend our webinars and watch tutorial videos to learn more about
integrating and using Fin’s APIs and services
            </p>
          </div>  
      </div>
    </div>
  </section>
  )
}

export default Support
