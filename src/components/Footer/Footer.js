import React from 'react'
import "./Footer.css"
import fb from "../../assets/fb.png"

export default function Footer() {
    return (
        <div className='footer py-5 bg-black'>
            <div className='container d-flex justify-content-between'>
                <div className='d-flex flex-column'>
                    <h2 className='banner__heading text-white fw-bold mb-0'>
                        Info card
                    </h2>
                    <h6 className='text-white fw-bold'>Theo dõi chúng tôi tại</h6>
                    <a href='/'>
                        <img src={fb} className="fb-img"/>
                    </a>
                    <p className='section-desc fw-bold text-white mt-3'><span>dat9d3@gmail.com</span><span>©2021 InfoCard</span></p>

                </div>
                <div className='d-flex flex-column'>
                    <h5 className='text-white fw-bold'>Thông tin liên hệ</h5>
                    <p className='section-desc fw-bold text-white mt-3'><span>Lorem Ipsum is simply dummy text of the printing and</span><span>typesetting industry.</span></p>
                    <p className='section-desc fw-bold text-white mt-3'><span>Lorem Ipsum is simply dummy text of the printing and</span><span>typesetting industry.</span></p>
                </div>
                <div className='d-flex flex-column'>
                    <h5 className='text-white fw-bold'>Info card</h5>
                    <p className='section-desc fw-bold text-white mt-3'><span>Lorem Ipsum is simply dummy text of the printing and</span><span>typesetting industry.</span></p>
                    <p className='section-desc fw-bold text-white mt-3'><span>Lorem Ipsum is simply dummy text of the </span><span>typesetting industry.</span></p>
                </div>
            </div>
        </div>
    )
}
