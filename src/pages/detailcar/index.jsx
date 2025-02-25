import Bannerabout from '@/components/bannerabout'
import DetailCars from '@/components/Detailcars'
import Footer from '@/components/footer'
import React from 'react'

const DetailCar = () => {
  return (
    <>
    <Bannerabout Aboutus={'Chevrolet Camaro'} againAboutus={'Chevrolet Camaro'}/>
    <DetailCars/>
    <Footer/>
    </>
  )
}

export default DetailCar
