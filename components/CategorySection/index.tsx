import React from 'react'
import Image from "next/image"
const CategorySection = () => {
    return (
        <section className='w-full grid grid-cols-4  '>
            <div className='col-span-4  lg:col-span-1 aspect-[4/3] relative overflow-hidden bg-[url("/borts.png")] bg-cover '>
                <div className='w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
                    <div> <h1 className='text-white text-6xl font-bold text-center'>БОРЦ</h1></div>
                </div>
            </div>
            <div className='col-span-4  lg:col-span-1 aspect-[4/3] relative overflow-hidden bg-[url("/idesh.png")] bg-cover '>
                <div className='w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
                    <div> <h1 className='text-white text-6xl font-bold text-center'>АНГИЛСАН МАХ</h1></div>
                </div>
            </div>
            <div className='col-span-4  lg:col-span-1 aspect-[4/3] relative overflow-hidden bg-[url("/angilsan.png")] bg-cover '>
                <div className='w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
                    <div> <h1 className='text-white text-6xl font-bold text-center'>ӨВЛИЙН ИДЭШ</h1></div>
                </div>
            </div>
            <div className='col-span-4  lg:col-span-1 aspect-[4/3] relative overflow-hidden bg-[url("/daivar.png")] bg-cover '>
                <div className='w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
                    <div> <h1 className='text-white text-6xl font-bold text-center'>ДАЙВАР</h1></div>
                </div>
            </div>
        </section>
    )
}

export default CategorySection




