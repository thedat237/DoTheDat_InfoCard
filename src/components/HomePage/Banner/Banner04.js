import React, { useContext, useEffect, useState} from 'react'
import "./Banner04.css"
import cardType from '../../../data/dataCard'
import InforScan from '../../InforScan/InforScan'
import QRCode from "qrcode.react"
import logoScan from "../../../assets/logo_scan.png"
import { useNavigate, useParams } from 'react-router-dom'
import AuthContext from '../../../context/auth'
import {Dropdown, FormControl, InputGroup, DropdownButton, Modal, Button } from "react-bootstrap"
import socialNetWork from '../../../data/socialNetWork'
import ModalSuccess from '../Modal/ModalSuccess'
import ModalEmptyInput from '../Modal/ModalEmptyInput'
import DropDownLink from '../../DropDown/DropDownLink'
import { connect, useDispatch } from 'react-redux'
import { SAVECART } from '../../../redux/reducer/infor'
import { ADDPRODUCT, BUYPRODUCT } from '../../../redux/reducer/cart'
const Banner04 = ({Infor, Cart, ShoppingCart}) => {
    const authCtx = useContext(AuthContext)
    const navigate = useNavigate()
    const [selectedImg, setSelectedImg] = useState(cardType[0].src)
    const [selectedNameCard, setSelectedNameCard] = useState(cardType[0].name)
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [avatarUrl, setAvatarUrl] = useState("")
    const [overview, setOverview] = useState("")
    const [socialName, setSocialName] = useState(socialNetWork[0].name)
    const [socials, setSocials] = useState([
        {socialName: socialName, socialLink: ""},
    ])
    const [newData, setNewData] = useState([])
    
    const handleSelectSocial = (item) => {
        let result = socials
        result[result.length - 1].socialName = item.name
        console.log(result);
        console.log("item", item);
        setSocialName(result)
    }
    
    const [imageQRcode, setImageQRcode] = useState("")
    
    const [data, setData] = useState(() => {
        const storageInfoQR = JSON.parse(localStorage.getItem("dataQR"))
        
        return storageInfoQR
    })
    
    
    const [showModal, setShowModal] = useState(false);
    
    const handleBuyItems = () => {
        setShowModal(false)
        navigate(`/thong-tin-scan/${authCtx.user.id}`)
    }

    // const handleShowModal = () => {
    //     setShowModal(true)
    //     console.log(socials.socialLink);
    // };


    useEffect(() => {
        return () => {
            avatarUrl && URL.revokeObjectURL(avatarUrl.preview)
        }
    },[avatarUrl])

    const onChangeAvatar = (e) => {
        const fileAvatar = e.target.files[0]

        fileAvatar.preview = URL.createObjectURL(fileAvatar)

        setAvatarUrl(fileAvatar) 
    }

    const handleChangeSocial = (id, e) => {
        console.log(e.target.value);
        const values = [...socials]
        values[id][e.target.name] = e.target.value
        setSocials(values)
    }

    const handleAddSocial = () => {
        setSocials([...socials, {socialName:socialName, socialLink: ""}])
    }

    useEffect(() => {
        setImageQRcode(`http://localhost:3000/thong-tin-scan/${authCtx.user.id}`)
    },[data])

    console.log("Infor Scan", Infor)

    const addToCart = (newData) => {
        dispatch({
            type: ADDPRODUCT,
            payload: newData
        })
        let checkCart = localStorage.getItem("Cart")
        if(checkCart){
            const parseCheckCart=JSON.parse(checkCart)
            parseCheckCart.push(newData)
            const jsonDataAddProduct = JSON.stringify(parseCheckCart)
            localStorage.setItem("Cart", jsonDataAddProduct)
        } else {
            let result = []
            result.push(newData)
            const jsonDataAddProduct = JSON.stringify(result)
            localStorage.setItem("Cart", jsonDataAddProduct)
        }
    }
    console.log("add to cart", Cart);

    const buyInfoCard = () => {
        console.log("new data", newData);
        let result=[]
        result.push(newData)
        dispatch({
            type: SAVECART,
            payload: newData
        })
        localStorage.setItem("dataQR", JSON.stringify(newData))
        localStorage.setItem("shoppingSuccess", JSON.stringify(result))
        setShowModal(true)
    }

    const all = (event, typeButton) => {
        let data = onSubmitForm(event)
        if(typeButton === 1) {
            addToCart(data)
        } else {
            setShowModal(true)
            setNewData(data)
            localStorage.setItem("dataQR", JSON.stringify(data))
        }
    }
    // buyInfoCard(data)
    const randId = () =>{
        return Math.random().toString(36).replace('0.',  '');
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        const newData = {
            id: randId(),
            nameUser: name,
            avatarUrl: (avatarUrl === "" ? "" : avatarUrl.preview),
            nameCard: selectedImg,
            overview: overview,
            colorCard: selectedNameCard,
            qrImage: imageQRcode,
            social: (socials[0].socialLink === "" ? [] : socials)
        }
        return newData
    }

    // useEffect(() => {
    //     if(Infor) {
    //         setName(Infor.nameUser)
    //         setAvatarUrl(Infor.avatarUrl)
    //         setOverview(Infor.overview)
    //     //    setSelectedNameCard(Infor.colorCard)
    //     //    setSelectedImg(Infor.nameCard)
    //     }
    // },[Infor])

    return (
        <>
            <div className='container m-5'>
                <div className='d-flex flex-column align-items-center'>
                    <h2 className='banner__heading text-dark fw-bold'>
                        Info card
                    </h2>
                    <h2 className='banner__heading text-dark fw-bold'>
                        Thẻ cá nhân thông minh
                    </h2>
                </div>
                <div className='d-flex gap-5'>
                    <div className='demo-card'>
                        <img src={selectedImg} className='demo-card-img'/>
                        {/* <img src={imageQRcode} className="demo-card-qr"/> */}
                        <QRCode 
                            className="demo-card-qr"  
                            size={100}
                            // value={`http://localhost:3000/thong-tin-scan/${authCtx.user.id}`}
                            value={imageQRcode ? imageQRcode : "NA"}
                            bgColor={"#f7f7f7"}
                            fgColor={"#000000"}
                            level={"L"}
                            includeMargin={false}
                            renderAs={"svg"}
                            // imageSettings={{
                            //     src: logoScan,
                            //     x: null,
                            //     y: null,
                            //     height: 24,
                            //     width: 24,
                            //     excavate: true,
                            // }}
                        /> 
                        <h6 className='demo-card-name'>{name}</h6>
                    </div>
                    <div className='d-flex flex-column align-items-start form-demo-card'>
                        <form className='w-100' onSubmit={onSubmitForm}>
                            <div className='d-flex fw-bold fs-5 mb-3'>
                                <span>Loại thẻ:</span>
                                <span className='ms-3'>{selectedNameCard}</span>
                            </div>
                            <div className='d-flex fw-bold fs-5 mb-3'>
                                <span>Màu sắc:</span>
                                <div className='d-flex'>
                                    {cardType.map((img, index) => (
                                        <div className='cursor-pointer card-type'>
                                            <img key={index} 
                                                src={img.src} 
                                                className='card-demo-luxury ms-3'
                                                onClick={() => {setSelectedImg(img.src)
                                                    setSelectedNameCard(img.name)}}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='d-flex w-100 gap-2 mb-3'>
                                <div className='w-100'>
                                    <label className='form-label fw-bold fs-5'>Tên của bạn</label>
                                    <input 
                                        name="nameUser"
                                        type="text"
                                        className='form-control' placeholder='Nhập tên của bạn'
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        // onFocus={e => setName(e.target.name)}
                                    />
                                </div>
                                <div className='w-100'>
                                    <label className='form-label fw-bold fs-5'>Avatar</label>
                                    <input 
                                        className='form-control' 
                                        placeholder='Nhập tên của bạn' 
                                        type="file"
                                        name="avatarUrl"
                                        onChange={onChangeAvatar}
                                        // onFocus={e => setDateOfBirth(e.target.name)}
                                    />
                                    {avatarUrl && (
                                        <div className='border-avatarUrl mt-2'>
                                            <img src={avatarUrl.preview} alt='hình của bạn' className='avatrUrl rounded-circle' />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='w-100 mb-3'>
                                <div className='w-100'>
                                    <label className='form-label fw-bold fs-5'>Giới thiệu</label>
                                    <textarea 
                                        name="overview"
                                        type="text"
                                        className='form-control' 
                                        placeholder=''
                                        value={overview}
                                        onChange={e => setOverview(e.target.value)}
                                        // onFocus={e => setName(e.target.name)}
                                    />
                                </div>
                            </div>
                            <div className='w-100 d-flex flex-column align-items-end'>
                                {socials?.map((social, idx) =>  <>
                                    <DropDownLink 
                                        key={idx}
                                        title={social.socialName} 
                                        onClick={handleSelectSocial} 
                                        valueLink={social.socialLink} 
                                        onChangeLink={e => handleChangeSocial(idx, e)}
                                        nameInput="socialLink"
                                    />
                                    {socials.length - 1 === idx && 
                                        <button 
                                            className='btn btn-primary' 
                                            onClick={handleAddSocial}
                                        >
                                            Thêm mạng xã hội
                                        </button>
                                    }
                                    </>
                                )}
                            </div>
                            {/* {imageUrlAvatar && <img src={imageUrlAvatar.preview} width="20%" height="20%"/>} */}
                            <div className='d-flex justify-content-between align-items-center w-100'>
                                <div className='d-flex'>
                                    <p className='fw-bold fs-3 '>159,000đ</p>
                                    <p className='ms-3 fw-bold fst-italic fs-3 text-secondary text-decoration-line-through'>
                                        259,000đ
                                    </p>
                                </div>
                                <h6 className='fw-bold'>Freeship toàn quốc</h6>
                            </div>
                            <button className='btn btn-success mb-3 me-3' onClick={(event) => all(event, 1)}>Thêm vào giỏ hàng</button>
                            <button className='btn btn-primary mb-3' onClick={(event) => all(event, 2)}>Đặt mua</button>
                            {name === ""  ?
                                (<ModalEmptyInput show={showModal} onClose={handleBuyItems}/>) 
                                :
                                (<ModalSuccess show={showModal}
                                    handleCancleModal={() => setShowModal(false)}
                                    handleCloseModal={handleBuyItems}
                                    isLiveShopping
                                    buyInfoCard = {
                                        () => buyInfoCard()
                                    }
                                />)
                            }
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}
const maptoStatetoProps = (state) => ({
    Infor: state.Infor,
    ShoppingCart: state.Infor.data,
    Cart: state.Cart
})
export default connect(maptoStatetoProps, null)(Banner04)