import React from 'react'
import "./Banner01.css"
import bannerPhone from "../../../assets/banner_phone.png"
import bannerCard4 from "../../../assets/banner_card4.png"
import { Button } from 'react-bootstrap'

export default function Banner01() {
    return (
        <>
            <div className='banner-header py-5'>
                <div className='container'>
                    <div className='d-flex align-items-center'>
                        <div className='banner-infor'>
                            <h1 class="banner__heading">
                                <span>Chia sẻ</span><span>mạng xã hội</span><span>trong 1s.</span>
                            </h1>
                            <Button variant="primary">Đặt mua</Button>
                        </div>
                        <div className='d-flex justify-content-between banner-img'>
                            <img src={bannerPhone} className='phone-img'/>
                            <img src={bannerCard4} className='card-image'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
