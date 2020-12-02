import React, {useEffect, useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import Pagina from '../../components/Pagina';
import Slide from '../../components/Slide';
import csApi from '../../services/csApi';


export default(props) => {

    
    const [modo, setModo] = useState([])
    const [mapas, setMapas] = useState([])
    const [fotos, setFotos] = useState([{}])

    //Toda vez que carregar o componente ele executa isso
    useEffect(()=>{
        const id = props.match.params.id

        csApi.get('modos/'+ id).then(results => {
            setModo(results.data)
        }) 
        csApi.get('modos/'+ id).then(results => {
            setMapas(results.data.mapas)
        }) 
        csApi.get('fotos?qtd=60').then(results => {
            setFotos(results.data.data)
        }) 
        
        
    }, [props])
    
    // console.log(mapas)
    // console.log(fotos)
    
    let foto= []

    for (let i = 0; i < fotos.length; i++) {
        for (let y = 0; y < mapas.length; y++) {
            if(mapas[y].id == fotos[i].mapa_id){
                foto[i] = 
                    {
                        'foto': fotos[i].foto,
                        'nome': mapas[y].nome,
                        'id': fotos[i].id
                    }
            }
            
        }
    }

    console.log(modo)
    return (
        <Pagina titulo={modo.modo}>
            {/* {modo.id && */}
                <Row>
                    <Col xs={12} md={12}>
                        <p>{modo.descricao}</p>
                    </Col>
                    <Col md={12}>
                        <hr/>
                        <h1>Mapas</h1>
                        <br/>
                        <Slide lista={foto} foto='foto' link='mapas'/>
                        <br/>
                    </Col>
                </Row>
            {/* } */}
        </Pagina>
      )
}
