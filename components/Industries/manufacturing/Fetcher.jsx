'use client'
import { fadeFromLeftAnimation } from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'
import visionImage2Light from '@/public/images/Fetcher.png'
import visionImage2Dark from '@/public/images/Fetcher.png'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const Fetcher = () => {
  const ref3 = useRef(null)
  const ref2 = useRef(null)
  const ref1 = useRef(null)

  const controlAnimation3 = useWhileInView(ref3)
  const controlAnimation2 = useWhileInView(ref2)
  const controlAnimation1 = useWhileInView(ref1)

  return (
    <section className="relative mt-50 overflow-hidden bg-[#0A003D] pb-[100px] pt-[100px] dark:mt- dark:bg-dark max-md:mt- max-md:pb-10 max-md:pt-[10px] dark:max-md:mt-">
      <div className="container relative z-10">
        <div className="grid grid-cols-2 items-end gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <div className="relative max-md:mt-10">
            <motion.div
              className=" top-10 left-20 w-[250px] md:top-12  md:w-[450px] xl:top-[130px]  xl:left-[290px] xl:w-[450px]"
              initial="initial"
              ref={ref3}
              animate={controlAnimation3}
              variants={fadeFromLeftAnimation}
            >
              <Image
                src={visionImage2Light}
                alt="vision image shape"
                className="h-full w-full object-contain dark:hidden"
              />
              <Image
                src={visionImage2Dark}
                alt="vision image shape"
                className="hidden h-full w-full dark:inline-block"
              />
            </motion.div>
          </div>
          <div>
            <h2 className="section-tagline text-white ">Fetcher</h2>
            <br />
            <p className="mb-11 max-md:mb-6 text-white">
              <b>Problem:</b> Accessing up-to-date and accurate information about suppliers, customers, and partners can be challenging, affecting decision-making and risk management.
              <br />
              <br />
              <b>Solution:</b> Fetcher retrieves comprehensive and reliable information quickly, providing manufacturers with the insights needed for informed decision-making and effective risk management.
            </p>
            <ul className="mb-14 [&>*:not(:last-child)]:mb-6 max-lg:[&>*:not(:last-child)]:mb-4 ">
              <h5 className="text-white"><b>Benefits:</b></h5>
              <li className="flex items-center gap-x-2 ">
                <span className=" shadow-icon item-center relative flex h-7 w-16 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary "
                  />
                </span>
                <span className="font-jakarta_sans font-medium text-white "> Improved Decision Making: Enables better strategic decisions based on accurate and comprehensive data.</span>
              </li>
              <li className="flex items-center gap-x-2">
                <span className=" shadow-icon item-center relative flex h-7 w-16 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary "
                  />
                </span>
                <span className="font-jakarta_sans font-medium text-white "> Risk Management: Enhances the ability to assess and mitigate potential risks in the supply chain.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fetcher