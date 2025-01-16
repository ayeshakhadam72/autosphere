import axios from 'axios'
import React, { useEffect, useState } from 'react'






const TailBlock2 = () => {
    const[savedata , setSavedata] = useState([])

useEffect(()=>{
    const Fetch = async () =>{
        try{
            const ApiGet = await axios.get('https://dummy-json.mock.beeceptor.com/posts')
            setSavedata(ApiGet.data)
        }
        catch(error){
            console.log(error , 'error')
        }
    }
    Fetch()
},[])

  console.log(savedata , savedata) 
  return (
   <>
   
   <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    
    <div class="flex flex-wrap -m-4">
     {
        savedata.map((b)=>{
            return(
                <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img class=" rounded  object-cover object-center mb-6" src={b.link}/>
                  <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{b.userId}</h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{b.title}</h2>
                  <p class="leading-relaxed text-base">{b.body}</p>
                </div>
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

export default TailBlock2
