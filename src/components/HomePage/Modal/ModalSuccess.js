import React, {useContext, useState} from 'react'
import "./ModalSuccess.css"
import { Modal, Button } from 'react-bootstrap'
import { connect, useDispatch } from 'react-redux'
import { BUYPRODUCT, UPDATECART } from '../../../redux/reducer/cart'
import { SAVECART } from '../../../redux/reducer/infor'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../../context/auth'

const ModalSuccess = (props) => {
    const data=JSON.parse(localStorage.getItem("dataQR"))
    const authCtx = useContext(AuthContext)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [valueModal, setValueModal] = useState({
        email: "",
        phoneNumber: "",
        address: ""
    })

    const onChange = (event) => {
        const newValue = event.target.value
        const field = event.target.name
        setValueModal((prev) => {
            return {
                ...prev,
                [field] : newValue
            }
        })
    }

    const Shopping = () => {
        let result = props.Cart.filter(item => props.ShoppingCart.every(data => data.id !== item.id))
        if(result.length === 0){
            dispatch({
                type: UPDATECART,
                payload: []
            })
            dispatch({
                type: SAVECART,
                payload: props.ShoppingCart
            })
            localStorage.setItem("Cart", JSON.stringify([]))
            localStorage.setItem("shoppingSuccess", JSON.stringify(props.ShoppingCart))
        } else {
            dispatch({
                type: UPDATECART,
                payload: result
            })
            dispatch({
                type: SAVECART,
                payload: props.ShoppingCart
            })
            localStorage.setItem("Cart", JSON.stringify(result))
            localStorage.setItem("shoppingSuccess", JSON.stringify(props.ShoppingCart))
        }
        console.log("shopping",result);
        navigate(`/thong-tin-scan/${authCtx.user.id}`)
    }

    return (
        <Modal
            {...props} 
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            contentClassName='bg-modal text-white'
        >
            <Modal.Header>
                <Modal.Title>????ng k?? ?????t h??ng</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex mb-2'>
                    <h5>T??n tr??n th???:</h5>
                    <h5 className='ms-3'>{data === null ? "T??n ng?????i d??ng" : data.nameUser}</h5>
                </div>
                <div className='d-flex mb-2'>
                    <h5>Lo???i th???:</h5>
                    <h5 className='ms-3'>{data === null ? "Th??? c?? b???n" : data.colorCard}</h5>
                </div>
                <div className='d-flex flex-column'>
                    <h5>Vui l??ng nh???p c??c th??ng tin sau:</h5>
                    <div className='w-100 mb-2'>
                        <label className='form-label fs-6'>Email</label>
                        <input 
                            name="email"
                            type="text"
                            className='form-control' 
                            placeholder="Email"
                            value={valueModal.email}
                            onChange={onChange}
                        />
                    </div>
                    <div className='w-100 mb-2'>
                        <label className='form-label fs-6'>S??? ??i???n tho???i</label>
                        <input 
                            name="phoneNumber"
                            type="text"
                            className='form-control' 
                            placeholder='S??? ??i???n tho???i nh???n h??ng'
                            value={valueModal.phoneNumber}
                            onChange={onChange}
                        />
                    </div>
                    <div className='w-100 mb-2'>
                        <label className='form-label fs-6'>?????a ch??? nh???n h??ng</label>
                        <input 
                            name="address"
                            type="text"
                            className='form-control' 
                            placeholder='?????a ch??? nh???n h??ng c??? th???, r?? r??ng'
                            value={valueModal.address}
                            onChange={onChange}
                        />
                    </div>
                </div> 
            </Modal.Body>
            <Modal.Footer className='d-flex'>
                <Button variant="danger" onClick={() => {props.handleCancleModal()
                }}>
                    H???y
                </Button>
                <Button variant="primary" onClick={() => {props.handleCloseModal()
                    if(props.isLiveShopping) {
                        props.buyInfoCard()
                    } else {
                        Shopping()
                    }
                }}>
                    Mua
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
const maptoStatetoProps = (state) => ({
    Infor: state.Infor.data,
    Cart: state.Cart.product,
    ShoppingCart: state.Cart.cart
})
export default connect(maptoStatetoProps, null)(ModalSuccess)
