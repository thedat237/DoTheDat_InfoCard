import React from 'react'
import "./Footer.css"
import fb from "../../assets/facebook.png"
import insta from "../../assets/instagram.png"
import email from "../../assets/email.png"

export default function Footer() {
    return (
        <div className='footer pt-5 pb-2 bg-black'>
            <div className='container'>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex flex-column'>
                        <h2 className='banner__heading text-white fw-bold mb-1'>
                            Info card
                        </h2>
                        <h6 className='text-white fw-bold'>Theo dõi chúng tôi tại</h6>
                        <div className='d-flex align-items-center mt-2'>
                            <a href='/' className='feature-link'>
                                <img src={fb} className="fb-img"/>
                            </a>
                            <a href='/' className='feature-link'>
                                <img src={insta} className="fb-img"/>
                            </a>
                            <a href='/' className='feature-link'>
                                <img src={email} className="fb-img"/>
                            </a>
                        </div>
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
                <div className='d-flex flex-column align-items-center pt-5'>
                    <div className='footer-line'></div>
                    <p className='section-desc fw-bold text-white mt-3'>©2022 InfoCard</p>
                </div>
            </div>
        </div>
    )
}
