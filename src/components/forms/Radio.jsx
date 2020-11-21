import React from 'react';
import { Col, Form } from 'react-bootstrap';

export default(props) => {

    const id = props.id ? props.id: props.name
    const labelWidth = props.labelWidth ? props.labelWidth : 3 
    const inputWidth = props.inputWidth ? props.inputWidth : 12 - labelWidth

    const{errors, register, validator} = props.referencia

    const required = () => (validator[props.name]?.required ? <span className="text-danger">*</span> : '')

    return(
        <>
            {['radio'].map((type) => (
                <div key={id} column sm={labelWidth}>
                    <Col sm={inputWidth}>
                        <Form.Check type={type} id={id}>
                            <Form.Check.Input type={type} value={props.value} ref={register(validator[props.name])} isInvalid={errors[props.name]} />
                            <Form.Check.Label>{props.label} {required()}</Form.Check.Label>
                            <Form.Control.Feedback type='invalid'>{errors[props.name]?.message}</Form.Control.Feedback>
                        </Form.Check>
                    </Col>
                </div>
            ))}
        </>
    )
}