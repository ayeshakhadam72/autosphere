import Bannerabout from '@/components/bannerabout'
import Comments from '@/components/comments'
import Factsnumber from '@/components/factsnumber'
import Footer from '@/components/footer'
import Ourcompanyabout from '@/components/ourcompanyabout'
import Questions from '@/components/questionabout'
import Whychoose from '@/components/whychoose'
import WorkHome from '@/components/workHome'
import React from 'react'

const About = () => {
  return (
    <>
    <Bannerabout Aboutus={'About us'} againAboutus={'About us'} />
    <Ourcompanyabout/>
    <WorkHome/>
    <Factsnumber/>
    <Whychoose/>
    <Comments/>
    <Questions/>
    <Footer/>
    </>
  )
}

export default About
