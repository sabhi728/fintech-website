import CareerDetails from '@/components/CareerDetails'
import CareerList from '@/components/CareerList'
import PageHero from '@/components/heros/PageHero'
import PaymentFeatures from '@/components/PaymentFeatures'
import { AboutFeaturesData } from '@/data/data'

import React from 'react'

const Career = () => {
  return (
    <>
      <PageHero subtitle="CAREER PAGE" title="Become a part of the <br/> fin team" />
      <CareerDetails />
      <PaymentFeatures
        features={AboutFeaturesData}
        sectionTag={'OUR VALUE'}
        sectionTitle={'Our business is steered by our core values'}
        spacing={'relative bg-[#E3E4F8] max-md:overflow-hidden max-md:py-25 py-150'}
      />
      <CareerList />
    </>
  )
}

export default Career
