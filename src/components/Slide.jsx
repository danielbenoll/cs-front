import React from 'react';
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

export default(props) => {

    const lista= props.lista
    const foto= props.foto ? props.foto : 'poster_path'

    const label= props.label ? props.label : 'nome'

    // console.log(lista)
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        ...props
    };
    return(
        <>
            <Slider {...settings}>
                {lista.map(item => (
                    <React.Fragment key={`filme${item.id}`}>
                        <OverlayTrigger
                        key={'top'}
                        trigger="hover"
                        placement={'top'}
                        overlay={
                            <Tooltip id={`tooltip-top`}>
                                {item[label]}
                            </Tooltip>
                        }
                        >
                            <Card>
                                <Link to={`/${props.link}/${item.id}`}><Card.Img  style={{backgroundColor : "#f0eee1"}} variant="top" height='150' src={item[foto]} thumbnail /></Link>
                            </Card>
                        </OverlayTrigger>
                    </React.Fragment>
                ))}
            </Slider>
        </>
    )
}