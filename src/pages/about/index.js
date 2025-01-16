import Bannerabout from '@/components/bannerabout'
import Comments from '@/components/comments'
import Factsnumber from '@/components/factsnumber'
import Footer from '@/components/footer'
import Ourcompanyabout from '@/components/ourcompanyabout'
import Questions from '@/components/questionabout'
import Whychoose from '@/components/whychoose'
import WorkHome from '@/components/workHome'
import React, { useState, useEffect } from 'react'

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

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
