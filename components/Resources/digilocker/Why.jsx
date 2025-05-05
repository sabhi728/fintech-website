'use client'

import { fadeFromLeftAnimation, fadeFromRightAnimation } from '@/data/animation';
import useWhileInView from '@/hooks/useWhileInView';
import visionImage2Light from '@/public/images/Fetcher.png';
import visionImage2Dark from '@/public/images/Fetcher.png';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const Why = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const controlAnimation1 = useWhileInView(ref1);
  const controlAnimation2 = useWhileInView(ref2);
  const controlAnimation3 = useWhileInView(ref3);

  return (
    <section className="relative overflow-hidden bg-[#0A003D] pb-[100px] pt-[100px] dark:bg-dark-300 max-lg:pb-100 max-lg:pt-20 lg:pb-15">
      <div className="container">
        <div className="grid grid-cols-2 items-center gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <div className="relative max-md:mt-10">
            <motion.div
              className="top-10 left-20 w-[250px] md:top-12 md:w-[450px] xl:top-[130px] xl:left-[290px] xl:w-[450px]"
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
          <div className="max-md:order-1 lg:-mt-15">
            <p className="section-tagline"></p>
            <h2 className="mb-8 max-lg:mb-4 text-white">Why Choose Our DigiLocker Integration?</h2>
            <ul>
              <li className="flex items-center gap-x-2">
                <span className="shadow-icon item-center relative flex h-7 w-16 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary"
                  />
                </span>
                <span className="font-jakarta_sans font-medium text-white">
                  <b>Tailored Solutions:</b> Our integration services are customized to meet the specific needs of your business, ensuring that you can maximize the benefits of DigiLocker.
                </span>
              </li>
              <li className="flex pt-[10px] items-center gap-x-2">
                <span className="shadow-icon item-center relative flex h-7 w-16 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary"
                  />
                </span>
                <span className="font-jakarta_sans font-medium text-white">
                  <b>Technical Support:</b> We provide comprehensive support from setup to full operation, ensuring a smooth transition and ongoing maintenance.
                </span>
              </li>
              <li className="flex pt-[10px] items-center gap-x-2">
                <span className="shadow-icon item-center relative flex h-7 w-16 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary"
                  />
                </span>
                <span className="font-jakarta_sans font-medium text-white">
                  <b>Scalable Architecture:</b> Our solutions are designed to grow with your business, supporting an increase in document management needs without performance compromises.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why