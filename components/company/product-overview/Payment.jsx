'use client'
import { fadeFromLeftAnimation } from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'
import visionImage2Light from '@/public/images/Payment.png'
import visionImage2Dark from '@/public/images/Payment.png'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const Payment = () => {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)

  const controlAnimation1 = useWhileInView(ref1)
  const controlAnimation2 = useWhileInView(ref2)
  const controlAnimation3 = useWhileInView(ref3)

  return (
    <section className="relative mt-50 overflow-hidden bg-[#E3E4F8] pb-[100px] pt-[100px] dark:mt- dark:bg-dark max-md:mt- max-md:pb-10 max-md:pt-[10px] dark:max-md:mt-">
      <div className="container relative z-10">
        <div className="grid grid-cols-2 items-end gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <div>
            <h2 className="section-tagline ">Payment and Collection</h2>
            <br/>
            <p className="mb-11 max-md:mb-6 ">
              <b>Overview:</b> Manage all your payment and collection needs with our flexible platform that supports a wide range of payment methods and currencies, tailored for businesses of all sizes.
              <br/><br/>
            </p>

             <h3 className=""><b>Features:</b></h3>
              <br/>
              <ul className="mb-14 [&>*:not(:last-child)]:mb-6 max-lg:[&>*:not(:last-child)]:mb-4">
             
              <li className="flex items-center gap-x-2 ">
                <span className=" shadow-icon item-center relative flex h-7 w-16 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary "
                  />
                </span>
                <span className="font-jakarta_sans font-medium "> Multi-channel payment acceptance (UPI, NEFT, IMPS, etc.)</span>
              </li>
              <li className="flex items-center gap-x-2">
                <span className=" shadow-icon item-center relative flex h-7 w-16 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary "
                  />
                </span>
                <span className="font-jakarta_sans font-medium "> Automated billing and invoicing</span>
              </li>
              <li className="flex items-center gap-x-2">
                <span className=" shadow-icon item-center relative flex h-7 w-16 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary "
                  />
                </span>
                <span className="font-jakarta_sans font-medium "> Real-time transaction monitoring</span>
              </li>
            </ul>

             <h3 className=""><b>Benefits:</b></h3>
              <br/>
              <ul className="mb-14 [&>*:not(:last-child)]:mb-6 max-lg:[&>*:not(:last-child)]:mb-4">
             
              <li className="flex items-center gap-x-2 ">
                <span className=" shadow-icon item-center relative flex h-7 w-16 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary "
                  />
                </span>
                <span className="font-jakarta_sans font-medium "> Improves cash flow management</span>
              </li>
              <li className="flex items-center gap-x-2">
                <span className=" shadow-icon item-center relative flex h-7 w-16 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary "
                    />
                              </span>
              <span className="font-jakarta_sans font-medium "> Reduces payment processing times</span>
            </li>
            <li className="flex items-center gap-x-2">
              <span className=" shadow-icon item-center relative flex h-7 w-16 justify-center rounded-full bg-white dark:bg-dark-200">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary "
                />
              </span>
              <span className="font-jakarta_sans font-medium "> Increases customer satisfaction with flexible payment options</span>
            </li>
          </ul>
        </div>
        <div className="relative max-md:mt-10">
          <motion.div
            className=" top-10 left-20 w-[250px] md:top-12 md:w-[450px] xl:top-[130px] xl:left-[290px] xl:w-[450px]"
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
      </div>
    </div>
  </section>
)
}

export default Payment