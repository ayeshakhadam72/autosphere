import Bannermiddle from '@/components/bannermiddlepage'
import Comments from '@/components/comments'
import Footer from '@/components/footer'
import HomeBanner from '@/components/homebanner'
import Navbar from '@/components/navbar'
import NewInsight from '@/components/newinsight'
import Popularcars from '@/components/popularcars'
import PopularMyCartypes from '@/components/PopularCartypes'
import Whychoose from '@/components/whychoose'
import WorkHome from '@/components/workHome'
import React from 'react'

const Home = () => {
  return (
 <>
 
 <HomeBanner/>
 <WorkHome/>
 <Popularcars/>
 <PopularMyCartypes/>
 <Bannermiddle/>
 <Whychoose/>
<Comments  />
<NewInsight/>
<Footer/>
 </>
  )
}

export default Home
