import React, { useEffect, useState } from 'react';
import Pagina from '../../components/Pagina';
import Slide from '../../components/Slide';
import csApi from '../../services/csApi';
import '../../App.css';

export default() => {

    const [paises, setPaises] = useState([])
    useEffect(()=>{

        csApi.get('/paises?qtd=30').then(results => {
            setPaises(results.data.data)
        })
    
    }, [])
    

    console.log(paises)

    return(
        <Pagina titulo="Países">
            <Slide lista={paises} foto="bandeira" link='paises' label='local'/>
            <br/>
        </Pagina>
    )
}