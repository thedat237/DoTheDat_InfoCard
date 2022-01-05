import React from 'react'
import "./Banner03.css"
import bannerStep from "../../../assets/banner_step.png"
import { Button } from 'react-bootstrap'
import bannerCard from "../../../assets/banner_card.png"
import bannerSocial from "../../../assets/banner_social.png"
import bannerPhone4 from "../../../assets/banner_phone4.png"
import bannerPhone3 from "../../../assets/banner_phone3.png"
import bannerCard3 from "../../../assets/banner_card3.png"

export default function Banner03() {
    return (
        <>
            <div className='banner-step d-flex justify-content-center mb-5'>
                <img src={bannerStep}/>
            </div>
            <div className='container pb-5 d-flex'>
                <div className='step-infor'>
                    <h2 className='banner__heading text-dark'>
                        Bước 1: Nhập Tên
                    </h2>
                    <h5 className='section-desc'><span>Điền tên trên thẻ, đặt mua</span> và thanh toán</h5>
                    <button className='btn btn-primary'>Đặt mua</button>
                </div>
                <img src={bannerCard} className='step-card-img mt-5'/>
            </div>

            <div className='container pb-5 d-flex flex-column'>
                <h2 className='banner__heading text-dark'>
                    <span>Bước 2: Thêm thông tin</span>cá nhân vào thẻ
                </h2>
                <div className='step-infor-2 d-flex'>
                    <img src={bannerSocial} className='banner-social me-4'/>
                    <h3 className='section-desc mt-5'><span>Khi nhận hàng, bạn nhận</span><span>được thẻ và tờ hướng dẫn,</span><span>bạn làm theo tờ hướng dẫn</span><span>để tự thêm thông tin cá</span> nhân vào thẻ.</h3>
                </div>
            </div>

            <div className='container m-5 pb-5 d-flex flex-column'>
                <h2 className='banner__heading text-dark'>
                    Bước 3: Sử dụng
                </h2>
                <h3>Hoạt động trên cả Android và IOS, không cần cài đặt gì thêm</h3>
                <div className='step-infor-3 d-flex align-items-center justify-content-between'>
                    <img src={bannerCard3} className='step-phone-img mt-3'/>
                    <div className='d-flex flex-column align-items-center'>
                        <img src={bannerPhone3} className='step-phone-img mt-5'/>
                        <div className='d-flex flex-column align-items-center mt-3'>
                            <h4>QUÉT THẺ</h4>
                            <h6>Hoạt động trên hầu hết điện thoại Android & iOS</h6>
                            <h6>(iPhone 5S trở lên)</h6>
                        </div>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <img src={bannerPhone4} className='step-phone-img mt-5'/>
                        <div className='d-flex flex-column align-items-center mt-3'>
                            <h4>CHẠM THẺ</h4>
                            <h6>Hoạt động trên hầu hết điện thoại Android & iOS</h6>
                            <h6>(iPhone XS trở lên)</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
