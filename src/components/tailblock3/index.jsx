import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TailBlock3 = () => {
const[savedata , setSavedata] = useState([])

    useEffect(() => {
        const Fetch = async () => {
            try{
             const ApiGet = await axios.get('https://fake-json-api.mock.beeceptor.com/companies')
             setSavedata(ApiGet.data)
            }
            catch(error) {
             console.log(error , 'error')
            }
            
         }
         Fetch()
 
    } , [])
    console.log(savedata, 'savedata')
  

  return (
   <>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mb-10 text-center">

        {
            savedata.map((b) =>{
 return(
    <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={b.logo}/>
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">{b.id}</h2>
        <p class="leading-relaxed text-base">{b.ceoName}</p>
        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">{b.domain}</button>
      </div>
 )
            })
        }
     
      
    </div>
  </div>
</section>
   </>
  )
}

export default TailBlock3
