import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Image, Modal, Nav, Row, Tab, Table, Tabs } from 'react-bootstrap';
import {  withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import UsuarioService from '../services/UsuarioService';
import { login } from '../services/auth';
import Input from '../components/forms/Input';
import LoginValidator from '../validator/LoginValidator';
import UsuarioValidator from '../validator/UsuarioValidator';

const Home = (props) => {

    const { register, handleSubmit, errors } = useForm()

    let validator

    let referenceLogin
    if(LoginValidator){
        validator = LoginValidator
        referenceLogin = { register, validator, errors }
    }

    let referenceUsuario
    if(UsuarioValidator){
        validator = UsuarioValidator
        referenceUsuario = { register, validator, errors }
    }

    const [dados, setDados] = useState({})

    function logar() {
        
        const data={
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }

        UsuarioService.login(data).then(results => {
          console.log(results.data.token)
          login(results.data.token)
          props.history.push('/classes')
        })
    }
    function cadastrar(data) {

        UsuarioService.create(data).then(results => {
          console.log(results.data)
          alert("Cadastrado com Sucesso!")
          window.location.reload(true);
        })
    }

    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Entrar
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Tabs defaultActiveKey="entrar" id="uncontrolled-tab-example" >
                    <Tab className="mt-5" eventKey="entrar" title="Entrar">
                        <Form>
                            <Input label="E-mail" name="email" valor={dados.email} referencia={referenceLogin} type="email"/>
                            <Input label="Senha" name="password" valor={dados.password} referencia={referenceLogin} type="password"/>

                            <Modal.Footer className="mt-5">
                                <Button variant="secondary" onClick={props.onHide}>Fechar</Button>
                                <Button variant="danger" onClick={() => logar()}>Logar</Button>
                            </Modal.Footer>
                        </Form>
                    </Tab>
                    <Tab className="mt-5" eventKey="cadastrar" title="Cadastrar">
                        <Form>
                            <Input label="Nome" name="username" valor={dados.username} referencia={referenceUsuario}/>
                            <Input label="E-mail" name="email" valor={dados.email} referencia={referenceUsuario} type="email"/>
                            <Input label="Senha" name="password" valor={dados.password} referencia={referenceUsuario} type="password"/>
                            <Modal.Footer className="mt-5">
                                <Button variant="secondary" onClick={props.onHide}>Fechar</Button>
                                <Button variant="danger" onClick={handleSubmit(cadastrar)}>Cadastrar</Button>
                            </Modal.Footer>
                        </Form>
                    </Tab>
                </Tabs>
            </Modal.Body>
          </Modal>
        );
    }

    const [modalShow, setModalShow] = React.useState(false);

    return(
        <>  
            <div >
                <Container style={{marginBottom : 130}}>
                    <Card style={{backgroundColor : '#f0eee1'}}>
                        <Card.Body>
                            <Card.Text>
                                <Container>
                                    <Row className="justify-content-md-center">
                                        <Image  src='https://steamuserimages-a.akamaihd.net/ugc/995765215207964863/FB867A44F1C1F494C745F4F5A7AECB72F84D4901/' roundedCircle />
                                    </Row>
                                    <Row className="justify-content-md-center">
                                        <h3>CS-GO</h3>
                                    </Row>
                                    <br/>
                                    <Row className="justify-content-md-center">
                                        <Button variant="danger" onClick={() => setModalShow(true)} style={{color : 'black'}}>Entrar</Button>
                                        <MyVerticallyCenteredModal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
                                    </Row>
                                </Container>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Nav style={{backgroundColor : '#030d18'}} fill>
                        
                        <Nav.Item className="mb-2 mt-2 ml-4">
                            <Button variant="outline-danger" style={{color : '#f84644'}} href="#sobre">Sobre</Button>
                        </Nav.Item>
                        <Nav.Item className="mb-2 mt-2">
                            <Button variant="outline-danger" style={{color : '#f84644'}} href="#jogo">Jogo</Button>
                        </Nav.Item>
                        <Nav.Item className="mb-2 mt-2">
                            <Button variant="outline-danger" style={{color : '#f84644'}} href="#contato">Contato</Button>
                        </Nav.Item>
                    </Nav>
                    <Card style={{backgroundColor : '#f0eee1'}}>
                        <Card.Body>
                            <Card.Text>
                                <Container>
                                    <h1 id="sobre" className="ml-5 mt-5">Sobre</h1>
                                    <Row className="justify-content-md-center mt-5">
                                        <Container>
                                            <Container>
                                                <Container>
                                                    <Container>
                                                        <Container>
                                                            <Container>
                                                                <p>Counter-Strike: Global Offensive é um jogo online desenvolvido pela Valve Corporation e pela Hidden Path Entertainment, sendo uma sequência de Counter-Strike: Source. É o quarto título principal da franquia.</p>
                                                                
                                                                <Table className="mt-5" striped bordered hover size="md">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td><strong className="mt-5">Data de lançamento: </strong></td>
                                                                            <td>21 de agosto de 2012</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><strong className="mt-5">Plataformas: </strong></td>
                                                                            <td>Microsoft Windows</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td></td>
                                                                            <td>Mac OS Classic</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td></td>
                                                                            <td>PlayStation 3</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td></td>
                                                                            <td> Xbox 360</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td></td>
                                                                            <td>Linux</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><strong className="mt-5">Motor Gráfico: </strong></td>
                                                                            <td>Souce</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><strong className="mt-5">Prêmios: </strong></td>
                                                                            <td>The Game Award para Melhor Jogo de eSports</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><strong className="mt-5">Desenvolvedores: </strong></td>
                                                                            <td>Valve Corporation</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td></td>
                                                                            <td>Hidden Path Entertainment</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </Container>
                                                        </Container>
                                                    </Container>
                                                </Container>
                                            </Container>
                                        </Container>
                                    </Row>
                                </Container>
                                    <Row className="justify-content-md-center mt-5">
                                        <a href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/">
                                            <Image id="jogo" width="1110" rounded src="https://gametimes.com.br/wp-content/uploads/2020/08/71rVqrAy5QL._SL1500_-3.jpg"/>
                                        </a>
                                    </Row>
                                <Container>
                                    <h1 id="contato" className="ml-5 mt-5">Contato</h1>
                                    <Row className="justify-content-md-center mt-5">
                                        <Container>
                                            <Container>
                                                <Container>
                                                    <Container>
                                                        <Container>
                                                            <Container>
                                                                <Table striped bordered hover size="md">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td><strong className="mt-5"> Desenvolvedor: </strong></td>
                                                                            <td>Daniel de Oliveira Aragão</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><strong className="mt-5">E-Mail: </strong></td>
                                                                            <td>danielbenoll@hotmail.com</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><strong className="mt-5">GitHub: </strong></td>
                                                                            <a style={{color: 'black'}} href="https://github.com/danielbenoll"><td>danielbenoll</td></a>
                                                                        </tr>
                                                                        
                                                                    </tbody>
                                                                </Table>
                                                            </Container>
                                                        </Container>
                                                    </Container>
                                                </Container>
                                            </Container>
                                        </Container>
                                    </Row>
                                </Container>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </>
    )
}
export default withRouter(Home)