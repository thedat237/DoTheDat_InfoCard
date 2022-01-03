import React, {useState, useEffect } from 'react'
import "./ModalCart.css"
import bannerCard5 from "../../../assets/banner_card5.png"
import { Modal, Button} from 'react-bootstrap'
import { connect, useDispatch } from 'react-redux'
import { REMOVEPRODUCT, UPDATECART } from '../../../redux/reducer/cart'
import CheckBox from '../../CheckBox/CheckBox'

const ModalCart = (props) => {
    const [checkedBox, setCheckedBox] = useState(false)
    const [result, setResult] = useState([])
    const dispatch = useDispatch()

    const selectedInfoCard = (items) => {
        setCheckedBox(true)
        let data = result
        data.push(items)
        setResult(data)
        console.log(data);
    }

    const removeProduct = (items) => {
        dispatch({
            type: REMOVEPRODUCT,
            payload: items.id
        })
    }

    const updateCart = () => {
        const dataCart = JSON.parse(localStorage.getItem("Cart"))
        if(props.Cart.length === 0) {
            if(dataCart){
                dispatch({
                    type: UPDATECART,
                    payload: dataCart
                })
            }
        }
    }

    useEffect(() => {
        updateCart()
    },[])

    return (
        <Modal
            {...props}
            size="md"
            dialogClassName='modal-cart'
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Thẻ của bạn
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.Cart.length !== 0 && props.Cart.map((item,idx) => (
                    <div className='d-flex align-items-center justify-content-between' key={idx}>
                        <div className='d-flex align-items-center'>
                            <CheckBox checked={checkedBox} unSelected={() => setCheckedBox(false)} Selected={() => selectedInfoCard(item)}/>
                            <img src={item.nameCard} className='img-card me-3'/>
                            <div className='d-flex flex-column'>
                                <div className='d-flex'>
                                    <span className='me-2'>Tên trên thẻ:</span>
                                    <span>{item.namUser}</span>
                                </div>
                                <div className='d-flex'>
                                    <span className='me-2'>Loại thẻ:</span>
                                    <span>{item.colorCard}</span>
                                </div>
                            </div>
                        </div>
                        <span>159,000đ</span>
                        <button type="button" class="btn btn-danger" onClick={() => removeProduct(item)}>X</button>
                    </div>
                ))}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Đặt mua</Button>
            </Modal.Footer>
        </Modal>
    )
}
const maptoStatetoProps = (state) => ({
    Cart: state.Cart.product
})
export default connect(maptoStatetoProps, null)(ModalCart)
