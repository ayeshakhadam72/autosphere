
import React from 'react'
import SubHeading from '../typography/sub-heading'
import Paragraph from '../paragraph'

const ChooseProductData  = ({border ,btnBorder , icon, heading , Description }) => {
  return (
    <>
      <div className={`${border}  px-5 py-5`}>
            <div>
                <div>
                    {/*  */}
                    <button className={`${btnBorder} rounded-full px-3 py-3 `}>
                       {icon}
                    
                    </button>
                </div>

                <div>
                <SubHeading StyleSub={'pt-8'}    Content={heading}  />
                <Paragraph Style={'font-[400] pt-2 text-[#212529] '}  Content={Description}/>                 
                </div>
            </div>
        </div>
    </>
  )
}

export default ChooseProductData 




































