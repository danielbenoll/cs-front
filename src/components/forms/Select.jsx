import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

export default(props) => {
    
    const [value, setValue] = useState()

    useEffect(()=>{
        setValue(props.valor)
    }, [props])

    let selecionado
    for(let i=0; i< props.lista.length; i++){
        if(props.lista[i].id == value){
            selecionado = props.lista[i][props.description]
        }
    }
    
    const id = props.id ? props.id: props.name
    const labelWidth = props.labelWidth ? props.labelWidth : 3 
    const inputWidth = props.inputWidth ? props.inputWidth : 12 - labelWidth

    const chave = props.chave ? props.chave : 'id'
    const description = props.description ? props.description : 'nome'

    const{errors, register, validator} = props.referencia

    const required = () => (validator[props.name]?.required ? <span className="text-danger">*</span> : '')

    function getOption(){
        if(value){
            return <option value={value}>{selecionado}</option>
        }else{
            return <option value=''>Selecione</option>
        }
    }
    return(
        <>
            <Form.Group as={Row} controlId={id}>
                <Form.Label column sm={labelWidth} className="text-right">{props.label} {required()}</Form.Label>
                <Col sm={inputWidth}>
                    <Form.Control as="select" ref={register(validator[props.name])} {...props} isInvalid={errors[props.name]}>
                        {getOption()}
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