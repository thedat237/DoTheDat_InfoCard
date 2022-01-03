import React, {useContext, useEffect, useState} from 'react'
import "./NavBar.css"
import logo from "../../assets/banner_logo.png"
import {Link, NavLink} from "react-router-dom"
import AuthContext from '../../context/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import {Badge} from "react-bootstrap"
import { connect } from 'react-redux'
import ModalCart from '../HomePage/Modal/ModalCart'
const NavBar = ({Infor, Cart}) => {
    const authCtx = useContext(AuthContext)
    const [showModalCart,setShowModalCart] =useState(false)
    const userInfor= JSON.parse(localStorage.getItem("dataQR"))
    // useEffect(()=>{
    //         window.addEventListener("storage",(e) => {
    //     setDisplay(true)
    //     console.log('alo')
    //  });
    // },[userInfor])

    return (
        <div className="d-flex align-items-center ">
            <div className='container'>
                <div className="d-flex justify-content-between align-items-center header-navbar-menu p-3 nav-bar">
                    <NavLink to='/' className='header-logo '>
                        <img src={logo} className='logo-img'/>
                    </NavLink>

                    {/* <RequireAuth mode="hidden"> */}
                    {authCtx.user ? 
                        <>
                            <ul className="header-menu is-active m-0">
                                <li className="header-menu-item">
                                    <Link to="/gioi-thieu" className="header-menu-link text-decoration-none fw-bold fs-6 text">
                                        Giới thiệu
                                    </Link>
                                </li>
                                <li className="header-menu-item">
                                    <Link to="/huong-dan" className="header-menu-link text-decoration-none fw-bold fs-6 text">Hướng dẫn</Link>
                                </li>
                                <li className="header-menu-item">
                                    <Link to={`/tao-the/${authCtx.user.id}`} className="header-menu-link text-decoration-none fw-bold fs-6 text">Tạo thẻ</Link>
                                </li>
                                {Infor !== "" ?   
                                    <li className="header-menu-item">
                                        <Link to={`/thong-tin-scan/${authCtx.user.id}`} className="header-menu-link text-decoration-none fw-bold fs-6 text">Thông tin thẻ</Link>
                                    </li> 
                                    : 
                                    <li className="header-menu-item">
                                        <Link to={`/thong-tin-scan/${authCtx.user.id}`} className="header-menu-link text-decoration-none fw-bold fs-6 disabled text">Thông tin thẻ</Link>
                                    </li> 
                                }

                            </ul>
                            {/* <span>{authCtx.user.username}</span> */}
                            <div className='d-flex align-items-center cart'>
                                <div className='position-relative me-3' onClick={() => setShowModalCart(true)}>
                                    <FontAwesomeIcon icon={faCreditCard} className=' fs-3'/>
                                    {Cart ? <Badge bg="success" className='count-items'>{Cart}</Badge> : null}
                                </div>
                                <div className='p-2 bg-dark text-white rounded'>
                                    {authCtx.user.username}
                                </div>
                            </div>
                            <ModalCart show={showModalCart} onHide={() => setShowModalCart(false)}/>
                        </>
                        :
                        <>
                            <ul class="header-menu is-active m-0">
                                <li class="header-menu-item">
                                    <Link to="/gioi-thieu" className="header-menu-link text-decoration-none fw-bold fs-6 text">
                                        Giới thiệu
                                    </Link>
                                </li>
                                <li class="header-menu-item">
                                    <Link to="/huong-dan" className="header-menu-link text-decoration-none fw-bold fs-6 text">Hướng dẫn</Link>
                                </li>
                                <li class="header-menu-item">
                                    {/* <RequireAuth mode="navigate"> */}
                                        <Link to="/login" className="header-menu-link text-decoration-none fw-bold fs-6 text">Tạo thẻ</Link>
                                    {/* </RequireAuth> */}
                                </li>
                                <li class="header-menu-item">
                                    <Link to="/login" className="header-menu-link text-decoration-none fw-bold fs-6 text">Thông tin thẻ</Link>
                                </li>
                            </ul>
                            <NavLink to="/login" className="text-decoration-none">
                                <button className='btn btn-primary'>Tạo thẻ</button>
                            </NavLink>
                        </>
                    }
                    {/* </RequireAuth> */}
                </div>
            </div>
        </div>
    )
}
const maptoStatetoProps = (state) => ({
    Infor: state.Infor.nameUser,
    Cart: state.Cart.items
})
export default connect(maptoStatetoProps, null)(NavBar)