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

const Payments = () => {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)

  const controlAnimation1 = useWhileInView(ref1)
  const controlAnimation2 = useWhileInView(ref2)
  const controlAnimation3 = useWhileInView(ref3)

  return (
    <section className="relative mt overflow-hidden bg-[#462AD4] pb-[100px] pt-[100px] dark:mt- dark:bg-dark max-md:mt max-md:pb-10 max-md:pt-[40px] dark:max-md:mt-">
      <div className="container relative z-10">
        <div className="grid grid-cols-2 items-end gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <div>
            <h2 className="section-tagline text-white">Payment Solutions</h2>
            <ul className="mb-14 [&>*:not(:last-child)]:mb-6 max-lg:[&>*:not(:last-child)]:mb-4">
              <li className="flex items-center gap-x-2">
                <span className="shadow-icon item-center relative flex h-7 w-16 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary"
                  />
                </span>
                <span className="font-jakarta_sans font-medium text-white">
                  <b>Unified Payments Interface (UPI):</b> Leverage the simplicity and speed of UPI to make and receive payments instantly, ideal for businesses looking for fast transaction times.
                </span>
              </li>
              <li className="flex items-center gap-x-2">
                <span className="shadow-icon item-center relative flex h-7 w-16 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary"
                  />
                </span>
                <span className="font-jakarta_sans font-medium text-white">
                  <b>National Electronic Funds Transfer (NEFT):</b> Utilize NEFT for reliable and secure batch payments, suitable for businesses that handle large transaction volumes.
                </span>
              </li>
              <li className="flex items-center gap-x-2">
                <span className="shadow-icon item-center relative flex h-7 w-16 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary"
                  />
                </span>
                <span className="font-jakarta_sans font-medium text-white">
                  <b>Immediate Payment Service (IMPS):</b> Ensure real-time payment capabilities around the clock with IMPS, perfect for urgent and after-hours transactions.
                </span>
              </li>
              <li className="flex items-center gap-x-2">
                <span className="shadow-icon item-center relative flex h-7 w-16 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary"
                  />
                </span>
                <span className="font-jakarta_sans font-medium text-white">
                  <b>Bulk Payments:</b> Streamline your payroll and vendor payments with our bulk payment solutions, allowing for efficient large-scale disbursements.
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

export default Payments
