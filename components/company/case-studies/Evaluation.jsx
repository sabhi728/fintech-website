'use client'

const Evaluation = () => {
  return (
    <section className="bg-[#0A003D] relative" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
      <div className="container relative ">
        <div className="grid grid-cols-">
          <div className="max-w-[1000px]">
            <p className="section-tagline"></p>
            <h2 className='text-white'>Evaluation</h2>
            <br/>
            <h3 className='text-white'>Feedback</h3>
            <p className="text-white">
              Store managers and customers provided overwhelmingly positive feedback on the ease and speed of the new payment system.
            </p>
            <br/>
            <h3 className='text-white'>Quantitative Metrics</h3>
            <p className="text-white">
              Analysis showed a 30% increase in customer throughput during peak hours, directly correlating to higher sales and improved customer retention.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Evaluation