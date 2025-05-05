'use client'

const FuturePlans = () => {
  return (
    <section className="bg-[#462AD4] relative" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
      <div className="container relative ">
        <div className="grid grid-cols-">
          <div className="max-w-[1000px]">
            <p className="section-tagline"></p>
            <h2 className='text-white'>Future Plans</h2>
            <br/>
            <h3 className='text-white'>Expansion</h3>
            <p className="text-white">
              Encouraged by the success of the UPI and AutoPay implementation, plans are underway to expand these solutions to other areas of business, including online transactions and loyalty programs.
            </p>
            <br/>
            <h3 className='text-white'>Innovation</h3>
            <p className="text-white">
              Continual updates and enhancements to the payment systems are planned, ensuring the retailer stays ahead of technological advancements and market trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FuturePlans