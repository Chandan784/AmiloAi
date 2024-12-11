import React from 'react'
import HomeHeader from '../Components/HomeHeader'
import HomeHighlight from '../Components/HomeHighlight'
import Footer from '../Components/Footer'
import WhoAreYou from '../Components/home/WhoAreYou'
import ServicesThreeCard from '../Components/home/ServicesThreeCard'
import ServiceSection from '../Components/Service/ServiceSection'

const Home = () => {
  return (
    <>
      <HomeHeader />
      <WhoAreYou />
      <ServiceSection />
      <ServicesThreeCard />
      {/* <HomeHighlight/> */}
      {/* <Footer /> */}
    </>
  )
}

export default Home