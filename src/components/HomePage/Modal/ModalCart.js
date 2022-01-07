import React, {useState, useEffect } from 'react'
import "./ModalCart.css"
import bannerCard5 from "../../../assets/banner_card5.png"
import { Modal, Button} from 'react-bootstrap'
import { connect, useDispatch } from 'react-redux'
import { BUYPRODUCT, REMOVEPRODUCT, UPDATECART, UPDATESTORAGE } from '../../../redux/reducer/cart'
import CheckBox from '../../CheckBox/CheckBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'

const ModalCart = (props) => {
    const [checkedBox, setCheckedBox] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [result, setResult] = useState([])
    const dispatch = useDispatch()

    const unSelect = (item) => {
        // setCheckedBox(false)
        let dataUnSelect = result.filter((items) => items.id !== item.id)
        setResult(dataUnSelect)
        console.log("data unselect", dataUnSelect);
    }

    useEffect(() => {
        console.log("useEffect", result);
    },[checkedBox])

    const selectedInfoCard = (items) => {
        // setCheckedBox(true)
        let dataSelect = result
        dataSelect.push(items)
        setResult(dataSelect)
        console.log("data select", dataSelect);
    }

    const removeProduct = (items) => {
        dispatch({
            type: REMOVEPRODUCT,
            payload: items.id
        })
    }

    const buyProduct = () => {
        dispatch({
            type: BUYPRODUCT,
            payload: result
        })
        setShowModal(false)
        localStorage.setItem("dataQR", JSON.stringify(result))
    }


    const updateCart = () => {
        const dataCart = JSON.parse(localStorage.getItem("Cart"))
        console.log(dataCart);
        if(props.Cart.length === 0) {
            if(dataCart){
                dispatch({
                    type: UPDATECART,
                    payload: dataCart === null ? [] : dataCart
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
            <Modal.Header className='d-flex justify-content-between align-items-center'>
                <Modal.Title id="contained-modal-title-vcenter">
                Thẻ của bạn
                </Modal.Title>
                <FontAwesomeIcon icon={faTimes} className='fs-4 text-muted cursor-pointer' onClick={() => props.onCloseModalCart()}/>
            </Modal.Header>
            <Modal.Body>
                {props.Cart.map((item,idx) => (
                    <div className='d-flex align-items-center justify-content-between' key={idx}>
                        <div className='d-flex align-items-center'>
                            <CheckBox 
                                checked={checkedBox} 
                                unSelected={() => unSelect(item)} 
                                selected={() => selectedInfoCard(item)
                            }/>
                            <img src={item.nameCard} className='img-card mx-2'/>
                            <div className='d-flex flex-column'>
                                <div className='d-flex'>
                                    <span className='me-2'>Tên trên thẻ:</span>
                                    <span>{item.nameUser}</span>
                                </div>
                                <div className='d-flex'>
                                    <span className='me-2'>Loại thẻ:</span>
                                    <span>{item.colorCard}</span>
                                </div>
                            </div>
                        </div>
                        <span>159,000đ</span>
                        <button type="button" 
                            class="btn btn-danger btn-remove d-flex align-items-center justify-content-center" 
                            onClick={() => removeProduct(item)}
                        >
                            <FontAwesomeIcon icon={faTrash}/>
                        </button>
                    </div>
                ))}
            </Modal.Body>
            {props.Cart.length !== 0 &&
                <Modal.Footer>
                    <Button onClick={() => 
                        {buyProduct()
                        props.showModalBuyCart()
                    }}
                    >
                        Đặt mua
                    </Button>
                </Modal.Footer>
            }
        </Modal>
    )
}
const maptoStatetoProps = (state) => ({
    Cart: state.Cart.product
})
export default connect(maptoStatetoProps, null)(ModalCart)
