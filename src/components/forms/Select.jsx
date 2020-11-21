import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

export default(props) => {
    
    const id = props.id ? props.id: props.name
    const labelWidth = props.labelWidth ? props.labelWidth : 3 
    const inputWidth = props.inputWidth ? props.inputWidth : 12 - labelWidth

    const chave = props.chave ? props.chave : 'id'
    const description = props.description ? props.description : 'nome'

    const{errors, register, validator} = props.referencia

    const required = () => (validator[props.name]?.required ? <span className="text-danger">*</span> : '')
    return(
        <>
            <Form.Group as={Row} controlId={id}>
                <Form.Label column sm={labelWidth} className="text-right">{props.label} {required()}</Form.Label>
                <Col sm={inputWidth}>
                    <Form.Control as="select" ref={register(validator[props.name])} {...props} isInvalid={errors[props.name]}>
                        <option value=''>Selecione</option>
                        {props.lista.map(item => (
                            <option key={item.id} value={item[chave]}>{item[description]}</option>
                        ))}
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>{errors[props.name]?.message}</Form.Control.Feedback>
                </Col>
            </Form.Group>
        </>
    )
}