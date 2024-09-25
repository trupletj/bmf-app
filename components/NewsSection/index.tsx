import React from 'react'
import Image from 'next/image'
import SectionHeader from '../SectionHeader'
import { Button } from '../ui/button'

const NewsSection = () => {
    return (
        <div className='flex items-center justify-center w-full'>
            <div className='container flex flex-col items-center gap-3'>
                <SectionHeader title="МЭДЭЭ МЭДЭЭЛЭЛ" />
                <div className='w-full flex items-center'>
                    <div className='w-1/2 aspect-[4/3] overflow-hidden relative'>
                        <Image fill style={{ backgroundImage: "cover" }} src="/medee.webp" alt="medee" />
                    </div>
                    <div className='w-1/2 flex flex-col items-start justify-center px-20 gap-5'>
                        <h1 className='text-6xl font-bold'>ҮХРИЙН МАХНЫ АЧ ТУС</h1>
                        <p className=''>Үхрийн маханд олон төрлийн шим тэжээл болон эрдэс бодисууд агууллагддаг. Тэр дундаа Grass Fed буюу өвсөөр тэжээсэн үхрийн мах нь уургийн ...</p>
                        <Button>Дэлгэрэнгүй</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewsSection  