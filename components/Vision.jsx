'use client'
import { fadeFromLeftAnimation, fadeFromRightAnimation, fadeUpAnimation } from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'
import visionImage2Light from '@/public/images/vision/vision chart.png'
import visionImage3Light from '@/public/images/vision/group.png'
import visionImage2Dark from '@/public/images/vision/vision chart.png'
import visionImage3Dark from '@/public/images/vision/group.png'
import { default as visionImageOneDark, default as visionImageOneLight } from '@/public/images/vision/vision.png'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const Vision = () => {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)

  const controlAnimation1 = useWhileInView(ref1)
  const controlAnimation2 = useWhileInView(ref2)
  const controlAnimation3 = useWhileInView(ref3)

  return (
    <section className="relative -mt-24 overflow-hidden bg-[#462AD4] pb-150 pt-[100px] dark:-mt-24 dark:bg-dark max-md:-mt-60 max-md:pb-20 max-md:pt-[320px] dark:max-md:-mt-60">
      
      <div className="container relative z-10">
        <div className="grid grid-cols-2 items-end gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <div>
            <h2 className="section-tagline text-white">Why Choose fin Tech?</h2>

            <ul className="mb-14 [&>*:not(:last-child)]:mb-6 max-lg:[&>*:not(:last-child)]:mb-4 ">
              <li className="flex items-center gap-x-2 ">
                <span className=" shadow-icon item-center relative flex h-7 w-16 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary "
                  />
                </span>
                <span className="font-jakarta_sans font-medium text-white"> <b>Innovation Leadership:-</b> Leading the fintech revolution with groundbreaking solutions tailored for dynamic market demands.</span>
              </li>
              <li className="flex items-center gap-x-2">
                <span className=" shadow-icon item-center relative flex h-7 w-16 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary "
                  />
                </span>
                <span className="font-jakarta_sans font-medium text-white"><b>Trusted by Industry Giants:-</b> "Join 500+ companies worldwide who trust fin Tech for their financial technology needs</span>
              </li>
              <li className="flex items-center gap-x-2 ">
                <span className=" shadow-icon item-center relative flex h-7 w-16 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary "
                  />
                </span>

                <span className="font-jakarta_sans font-medium text-white"><b>AI-Driven Solutions:-</b> Utilize state-of-the-art AI to optimize your financial operations with precision and efficiency</span>
              </li>
              <li className="flex items-center gap-x-2 ">
                <span className=" shadow-icon item-center relative flex h-7 w-16 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary "
                  />
                </span>

                <span className="font-jakarta_sans font-medium text-white"><b>Security and Compliance:-</b> Guarantee the security of your transactions with our fully compliant and regularly updated systems.</span>
              </li>
            </ul>
          </div>
          <div className="relative max-md:mt-150">
            <motion.div ref={ref1} variants={fadeFromRightAnimation} initial="initial" animate={controlAnimation1}>
              <Image src={visionImageOneLight} alt="vision image" className="w-[260px] dark:hidden xl:w-[310px]" />
            </motion.div>
            <motion.div variants={fadeUpAnimation} initial="initial" ref={ref2} animate={controlAnimation2}>
              <Image
                src={visionImageOneDark}
                alt="vision image"
                className="hidden w-[260px] dark:inline-block xl:w-[310px]"
              />
            </motion.div>

            <motion.div
              className="absolute -top-20 left-80 w-[200px] md:-top-12  md:w-[200px] xl:-top-[150px]  xl:left-[290px] xl:w-[310px]"
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

            <motion.div
              variants={fadeUpAnimation}
              initial="initial"
              ref={ref2}
              animate={controlAnimation2}
              className="absolute bottom-5 left-20 w-[280px] md:bottom-50 md:left-[150px] md:w-[200px] xl:bottom-8 xl:left-150 xl:w-[350px]">
              <Image src={visionImage3Light} alt="vision image shape" className="h-full w-full dark:hidden" />
              <Image
                src={visionImage3Dark}
                alt="vision image shape"
                className="left-0 top-0 hidden h-full w-full dark:inline-block"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision
