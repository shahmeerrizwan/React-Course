import React from 'react'
import banner from "../Assets/banner.png"

export default function BannerAdd() {
    return (
        <div>
            <img className='banner' src={banner} alt="Banner" />
        </div>
    )
}
