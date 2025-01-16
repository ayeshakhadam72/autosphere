import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Users = () => {

    const [savedata, setSavedata] = useState([])
    useEffect(() => {
        const Fetch = async () => {
            try {
                const ApiGet = await axios.get('https://fake-json-api.mock.beeceptor.com/users')
                // for example : ApI data have 20million objects and its contain 
                setSavedata(ApiGet.data)
                // 
            }
            catch (error) {
                console.log(error, 'error')
            }
        }


        Fetch()
    }, [])

    console.log(savedata, 'savedata')



    return (

        <>


            <section class="text-gray-600 body-font">

                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {
                            savedata.length == 0 ? "loading.... " : (
                                savedata.map((b) => {
                                    return (
                                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                                            <a class="block relative rounded ">
                                                <img alt="ecommerce" class="object-contain rounded-full object-center w-[200px] h-[200px] block" src={b.photo} />
                                            </a>
                                            <div class="mt-4">
                                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1"> {b.name} </h3>
                                                <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                                <p class="mt-1">$16.00</p>
                                            </div>
                                        </div>
    
                                    )
                                })
                            )
                        }
                     

                    </div>
                </div>
            </section>


        </>
    )
}

export default Users
