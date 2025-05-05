'use client'
import { fadeFromLeftAnimation, fadeFromRightAnimation, fadeUpAnimation } from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'
import visionImage2Light from '@/public/images/Payment.png'
import visionImage2Dark from '@/public/images/Payment.png'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const Business = () => {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)

  const controlAnimation1 = useWhileInView(ref1)
  const controlAnimation2 = useWhileInView(ref2)
  const controlAnimation3 = useWhileInView(ref3)

  return (
    <section className="relative mt overflow-hidden bg-[#0A003D] pb-[100px] pt-[100px] dark:mt- dark:bg-dark max-md:mt max-md:pb-10 max-md:pt-[40px] dark:max-md:mt-">
      <div className="container relative z-10">
      <div className="grid grid-cols-2 items-end gap-10 max-md:grid-cols-1 1xl:gap-x-24">
      <div>
            <h2 className="section-tagline text-white">Leveraging DigiLocker for Your Business</h2>
            <ul className="mb-14 [&>*:not(:last-child)]:mb-6 max-lg:[&>*:not(:last-child)]:mb-4">
              <li className="flex items-center gap-x-2">
                <span className="shadow-icon item-center relative flex h-7 w-16 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon icon={faCheck} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary" />
                </span>
                <span className="font-jakarta_sans font-medium text-white">
                  <b>Enhanced Verification Processes:</b> Use DigiLocker to fetch verified documents for customer onboarding, partner agreements, and regulatory compliance, significantly speeding up necessary checks.
                </span>
              </li>
              <li className="flex items-center gap-x-2">
                <span className="shadow-icon item-center relative flex h-7 w-16 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon icon={faCheck} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary" />
                </span>
                <span className="font-jakarta_sans font-medium text-white">
                  <b>Streamlined Customer Service:</b> Instant access to documents like identity proofs, educational certificates, and registration forms improves customer interactions by reducing wait times and eliminating redundant processes.
                </span>
              </li>
              <li className="flex items-center gap-x-2">
                <span className="shadow-icon item-center relative flex h-7 w-16 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon icon={faCheck} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary" />
                </span>
                <span className="font-jakarta_sans font-medium text-white">
                  <b>Secure and Compliant Operations:</b> With robust encryption and security protocols, DigiLocker ensures that all document transactions meet stringent compliance standards, making it ideal for sectors with high regulatory oversight.
                </span>
              </li>
            </ul>
          </div>
          <div className="relative max-md:mt-10">

            <motion.div
              className=" top-10 left-20 w-[250px] md:top-12  md:w-[450px] xl:top-[130px]  xl:left-[290px] xl:w-[450px]"
              initial="initial"
              ref={ref3}
              animate={controlAnimation3}
              variants={fadeFromLeftAnimation}>
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
        </div>
      </div>
    </section>
  )
}

export default Business
