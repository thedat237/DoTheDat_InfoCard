import React from 'react'
import "./Banner02.css"
import peopleCard from "../../../assets/people_card.jpg"

export default function Banner02() {
    return (
        <>
            <div className='section1'>
                <div className='container'>
                    <h2 className='banner__heading text-dark'><span>Info card - Xu hướng kết nối</span><span>chuyên nghiệp hiện đại</span> </h2>
                    <div className='d-flex py-5'>
                        <img src={peopleCard} className="section1-img"/>
                        <div className='section1-infor'>
                            <h2 className='section1-title'>KHÔNG CẦN CÀI ĐẶT GÌ THÊM</h2>
                            <h5 className='section1-desc mt-3'>Chạm thẻ Infocard vào điện thoại để chia sẻ thông tin, giảm thời gian trao đổi các mạng xã hội như Facebook, Instagram, Zalo, Số điện thoại, Email và thông tin liên lạc</h5>
                            <ul className='mt-3'>
                                <li className='fs-5 fw-500'>Không thu phí hàng tháng</li>
                                <li className='fs-5 fw-500'>Thoải mái đổi thông tin không giới hạn</li>
                                <li className='fs-5 fw-500'>Không giới hạn số lần chạm thẻ</li>
                                <li className='fs-5 fw-500'>Không yêu cầu mật khẩu khi truy cập</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
