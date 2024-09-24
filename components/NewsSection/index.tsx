import React from 'react'
import Image from 'next/image'
import SectionHeader from '../SectionHeader'

const NewsSection = () => {
    return (
        <div className='flex items-center justify-center w-full'>
            <div className='container flex flex-col items-center gap-3'>
                <SectionHeader title="МЭДЭЭ МЭДЭЭЛЭЛ" />

            </div>
        </div>
    )
}

export default NewsSection