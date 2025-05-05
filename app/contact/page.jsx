import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import PageHero from '@/components/heros/PageHero'
import React from 'react'

const page = () => {
  return (
    <>
      <PageHero
        subtitle="GET IN TOUCH"
        title="Contact our help desk <br/> for assistance"
        paragraph=""
      />
      <ContactInfo />
      <ContactForm />
    </>
  )
}

export default page
