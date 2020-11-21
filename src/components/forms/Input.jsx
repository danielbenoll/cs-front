import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { mask, unMask } from 'remask';

export default(props) => {

    const [value, setValue] = useState()

    const id = props.id ? props.id: props.name
    const labelWidth = props.labelWidth ? props.labelWidth : 3 
    const inputWidth = props.inputWidth ? props.inputWidth : 12 - labelWidth

    const{errors, register, validator} = props.referencia

    const required = () => (validator[props.name]?.required ? <span className="text-danger">*</span> : '')

    function handleChange(event){
        const valor = props.mask ? mask(unMask(event.target.value), props.mask) : event.target.value
        setValue(valor)
    }

    return(
        <>
            <Form.Group as={Row} controlId={id}>
                <Form.Label column sm={labelWidth} className="text-right">{props.label} {required()}</Form.Label>
                <Col sm={inputWidth}>
                    <Form.Control {...props} ref={register(validator[props.name])} isInvalid={errors[props.name]} value={value} onChange={handleChange}/>
                    <Form.Control.Feedback type='invalid'>{errors[props.name]?.message}</Form.Control.Feedback>
                </Col>
            </Form.Group>
        </>
    )
}