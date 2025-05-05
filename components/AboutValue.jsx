'use client'
import Image from 'next/image'
import React from 'react'
import imageOnlineValue from '../public/images/about/online.webp'
import imageOnlineValueDark from '../public/images/about/online.webp'
import imageShape from '../public/images/about/onlinep.webp'
import imageShapeDark from '../public/images/about/onlinep.webp'
import { fadeFromRightAnimation, fadeUpAnimation } from '@/data/animation'
import { motion } from 'framer-motion'
import useWhileInView from '@/hooks/useWhileInView'
import { useRef } from 'react'
const AboutValue = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  const ref2 = useRef(null)
  const controlAnimation2 = useWhileInView(ref2)
  return (
    <section className=" relative bg-[#0A003D] overflow-hidden  pb-150  max-md:pb-25 "style={{paddingTop: '50px' }}>
      <div className="container relative z-10">
        <div className="grid grid-cols-2 items-center gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <motion.div
            className="relative flex items-center justify-end max-md:justify-center"
            ref={ref}
            initial="initial"
            animate={controlAnimation}
            variants={fadeUpAnimation}>
            <Image
              src={imageOnlineValue}
              alt="banking image"
              className="max-w-[250px] dark:hidden lg:max-w-[320px] xl:max-w-[420px]"
            />
            <Image
              src={imageOnlineValueDark}
              alt="banking image"
              className="hidden max-w-[250px]  dark:inline-block lg:max-w-[320px] xl:max-w-[420px]"
            />
            <motion.div
              className="absolute bottom-8 left-0 right-auto top-auto max-w-[180px] md:max-w-[250px] xl:max-w-[344px]"
              ref={ref2}
              initial="initial"
              animate={controlAnimation2}
              variants={fadeFromRightAnimation}>
              <Image src={imageShape} alt="banking image" className="dark:hidden" />
              <Image src={imageShapeDark} alt="banking image" className="hidden dark:inline-block " />
            </motion.div>

            <div className="absolute bottom-8 left-0 right-auto top-auto max-w-[180px] md:max-w-[250px] xl:max-w-[344px]"></div>
          </motion.div>

          <div>
            <p className="section-tagline text-white"></p>

            <h2 className=" mb-8 max-md:mb-4 text-white">Why Choose Us?</h2>
            <p className="mb-11  max-md:mb-6 text-white">
           <b> Unique Approach:-</b> "At Fin Tech, we combine technological prowess with financial acumen to create solutions that are not only technically robust but also commercially viable and user-friendly."
            <br/>
            <br/>
	          <b>Global Impact:-</b> "Our solutions power thousands of businesses worldwide, from startups to large enterprises, helping them navigate the complexities of the financial world with ease and confidence."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutValue
