'use client'

const Challenge = () => {
  return (
    <section className="bg-[#0A003D] relative" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
      <div className="container relative ">
        <div className="grid grid-cols-">
          <div className="max-w-[1000px]">
            <p className="section-tagline"></p>
            <h2 className='text-white'>Challenge</h2>
            <br/>
            <h3 className='text-white'>Overview</h3>
            <p className="text-white">
              The retail chain struggled with inefficient, time-consuming checkout processes that led to customer frustration and lost sales. The existing system was dependent on traditional payment methods which were not only slow but also prone to errors.
            </p>
            <br/>
            <h3 className='text-white'>Impact</h3>
            <p className="text-white">
              Long queues and extended waiting times at checkout counters were common, negatively affecting the overall shopping experience and customer loyalty.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Challenge