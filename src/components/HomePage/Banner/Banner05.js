import React from 'react'
import "./Banner05.css"
import card1 from "../../../assets/banner_card6.png"
import card2 from "../../../assets/banner_card1.png"
import card3 from "../../../assets/banner_card_noname1.png"
import card4 from "../../../assets/banner_card_noname2.png"
import card5 from "../../../assets/banner_card_noname3.png"
import cardBack1 from "../../../assets/banner_card6_back.png"
import cardBack2 from "../../../assets/banner_card1_back.png"
import cardBack3 from "../../../assets/banner_card_noname1_back.png"
import cardBack4 from "../../../assets/banner_card_noname2_back.png"
import cardBack5 from "../../../assets/banner_card_noname3_back.png"

export default function Banner05() {
    return (
        <div className='container'>
            <h2 className='banner__heading text-dark'>
                Thẻ Cá Nhân Thông Minh
            </h2>
            <div className='store-card'>
                <div className='card-items'>
                    <div className='card-img'>
                        <div className='card-img-inner'>
                            <div className='card-img-front'>
                                <img src={card1}/>
                            </div>
                            <div className='card-img-back'>
                                <img src={cardBack1}/>
                            </div>
                        </div>
                    </div>
                    <div className='card-detail mt-3'>
                        <h5 className='card-detail-title'>
                            Thẻ Cá Nhân Thông Minh INFOCARD - Black
                        </h5>
                        <div className='d-flex card-detail-price'>
                            <p className='fw-bold fs-5 '>159,000đ</p>
                            <p className='ms-3 fw-bold fst-italic fs-5 text-secondary text-decoration-line-through'>
                                259,000đ
                            </p>
                        </div>
                    </div>
                </div>
                <div className='card-items'>
                    <div className='card-img'>
                        <div className='card-img-inner'>
                            <div className='card-img-front'>
                                <img src={card2}/>
                            </div>
                            <div className='card-img-back'>
                                <img src={cardBack2}/>
                            </div>
                        </div>
                    </div>
                    <div className='card-detail mt-3'>
                        <h5 className='card-detail-title'>
                            Thẻ Cá Nhân Thông Minh INFOCARD - RGB
                        </h5>
                        <div className='d-flex card-detail-price'>
                            <p className='fw-bold fs-5 '>159,000đ</p>
                            <p className='ms-3 fw-bold fst-italic fs-5 text-secondary text-decoration-line-through'>
                                259,000đ
                            </p>
                        </div>
                    </div>
                </div>
                <div className='card-items'>
                    <div className='card-img'>
                        <div className='card-img-inner'>
                            <div className='card-img-front'>
                                <img src={card3}/>
                            </div>
                            <div className='card-img-back'>
                                <img src={cardBack3}/>
                            </div>
                        </div>
                    </div>
                    <div className='card-detail mt-3'>
                        <h5 className='card-detail-title'>
                            Thẻ Cá Nhân Thông Minh INFOCARD - Black M
                        </h5>
                        <div className='d-flex card-detail-price'>
                            <p className='fw-bold fs-5 '>159,000đ</p>
                            <p className='ms-3 fw-bold fst-italic fs-5 text-secondary text-decoration-line-through'>
                                259,000đ
                            </p>
                        </div>
                    </div>
                </div>
                <div className='card-items'>
                    <div className='card-img'>
                        <div className='card-img-inner'>
                            <div className='card-img-front'>
                                <img src={card4}/>
                            </div>
                            <div className='card-img-back'>
                                <img src={cardBack4}/>
                            </div>
                        </div>
                    </div>
                    <div className='card-detail mt-3'>
                        <h5 className='card-detail-title'>
                            Thẻ Cá Nhân Thông Minh INFOCARD - Black Hologram
                        </h5>
                        <div className='d-flex card-detail-price'>
                            <p className='fw-bold fs-5 '>159,000đ</p>
                            <p className='ms-3 fw-bold fst-italic fs-5 text-secondary text-decoration-line-through'>
                                259,000đ
                            </p>
                        </div>
                    </div>
                </div>
                <div className='card-items'>
                    <div className='card-img'>
                        <div className='card-img-inner'>
                            <div className='card-img-front'>
                                <img src={card5}/>
                            </div>
                            <div className='card-img-back'>
                                <img src={cardBack5}/>
                            </div>
                        </div>
                    </div>
                    <div className='card-detail mt-3'>
                        <h5 className='card-detail-title'>
                            Thẻ Cá Nhân Thông Minh INFOCARD - Gray
                        </h5>
                        <div className='d-flex card-detail-price'>
                            <p className='fw-bold fs-5 '>159,000đ</p>
                            <p className='ms-3 fw-bold fst-italic fs-5 text-secondary text-decoration-line-through'>
                                259,000đ
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
