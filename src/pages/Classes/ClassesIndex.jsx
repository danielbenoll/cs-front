import React from 'react';
import Pagina from '../../components/Pagina';
import csApi from '../../services/csApi';

export default() => {

    csApi.get('/classes').then(results => {
        console.log(results)
    })



    return(
        <Pagina titulo="Classes">

        </Pagina>
    )
}