import BlogSearch from '@/components/company/blogs/BlogSearch'
import PageHero from '@/components/heros/PageHero'
import Introducation from '@/components/company/blogs/Introducation'
import getMarkDownData from '@/utils/getMarkDownData'

const Blogpage = () => {
  const blogs = getMarkDownData('data/blogs')

  return (
    <>
      <PageHero subtitle="Stay updated with fin Tech's latest trends, insights, and breakthroughs in the fintech world"
        title="Insights and Innovations in Financial Technology" />
        <Introducation/>
      <section className="relative  bg-[#E3E4F8] pt-[50px] pb-[50px]">
        <div className="absolute -top-[250px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
        <div className="container relative">
          <div className="absolute left-1/2 top-20 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
            <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          </div>
          <BlogSearch blogs={blogs} />
        </div>
      </section>
    </>
  )
}

export default Blogpage
