import React from 'react'
import { Alert } from 'react-bootstrap'

export default function ModalEmptyInput(props) {
    return (
        <Alert variant="danger" dismissible {...props}>
            <Alert.Heading>Xin lỗi bạn !</Alert.Heading>
            <p>
            Phải có ít nhất 1 trường phải điền !
            </p>
        </Alert>
    )
}
