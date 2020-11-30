import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Image, Modal, Row, Tab, Table, Tabs } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, withRouter } from 'react-router-dom';
import Cartao from '../../components/Cartao';
import Pagina from '../../components/Pagina';
import ArmamentoService from '../../services/ArmamentoService';
import ClasseService from '../../services/ClasseService';
import csApi from '../../services/csApi';
import MapaService from '../../services/MapaService';
import ModoService from '../../services/ModoService';
import PaisService from '../../services/PaisService';
import PersonagemService from '../../services/PersonagemService';
import SecaoService from '../../services/SecaoService';
import UsuarioService from '../../services/UsuarioService';
import UserValidator from '../../validator/UsuarioValidator';
import ArmamentoValidator from '../../validator/ArmamentoValidator';
import ClasseValidator from '../../validator/ClasseValidator';
import MapaValidator from '../../validator/MapaValidator';
import ModoValidator from '../../validator/ModoValidator';
import PaisValidator from '../../validator/PaisValidator';
import PersonagemValidator from '../../validator/PersonagemValidator';
import SecaoValidator from '../../validator/SecaoValidator';

const Gerencia = (props) => {

    const { register, handleSubmit, errors } = useForm()
    const reference = { register, UserValidator, ArmamentoValidator, ClasseValidator, MapaValidator, ModoValidator, PaisValidator, PersonagemValidator, SecaoValidator, errors }

    const [armamentos, setArmamentos] = useState([])
    const [classes, setClasses] = useState([])
    const [fotos, setFotos] = useState([])
    const [mapas, setMapas] = useState([])
    const [modos, setModos] = useState([])
    const [paises, setPaises] = useState([])
    const [personagens, setPersonagens] = useState([])
    const [secoes, setSecoes] = useState([])
    const [users, setUsers] = useState([])

    useEffect(()=>{

        csApi.get('/armamentos?qtd=60').then(results => {
            setArmamentos(results.data.data)
        })
        csApi.get('/classes').then(results => {
            setClasses(results.data.data)
        })
        csApi.get('/fotos').then(results => {
            setFotos(results.data.data)
        })
        csApi.get('/mapas?qtd=30').then(results => {
            setMapas(results.data.data)
        })
        csApi.get('/modos').then(results => {
            setModos(results.data.data)
        })
        csApi.get('/paises?qtd=30').then(results => {
            setPaises(results.data.data)
        })
        csApi.get('/personagens?qtd=30').then(results => {
            setPersonagens(results.data.data)
        })
        csApi.get('/secoes').then(results => {
            setSecoes(results.data.data)
        })
        csApi.get('/users').then(results => {
            setUsers(results.data.data)
        })
    
    }, [])

    const [modalArmamento, setModalArmamento] = React.useState(false);

    function ModalArmamento(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Cadastro de Armamento
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} controlId={'classe_idArmamento'}>
                        <Form.Label column sm={3} className="text-right">ID Classe</Form.Label>
                        <Col sm={9}>
                            <Form.Control type="number" name="classe_id" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId={'secao_idArmamento'}>
                        <Form.Label column sm={3} className="text-right">ID Seção <span className="text-danger">*</span></Form.Label>
                        <Col sm={9}>
                            <Form.Control type="number" name="secao_id" />
                            <Form.Control.Feedback type='invalid'>Campo Obrigatório</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId={'pais_idArmamento'}>
                        <Form.Label column sm={3} className="text-right">ID País</Form.Label>
                        <Col sm={9}>
                            <Form.Control type="number" name="pais_id" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId={'nomeArmamento'}>
                        <Form.Label column sm={3} className="text-right">Nome <span className="text-danger">*</span></Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" name="nome" />
                            <Form.Control.Feedback type='invalid'>Campo Obrigatório</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId={'descricaoArmamento'}>
                        <Form.Label column sm={3} className="text-right">Descrição <span className="text-danger">*</span></Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" name="descricao" />
                            <Form.Control.Feedback type='invalid'>Campo Obrigatório</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId={'fotoArmamento'}>
                        <Form.Label column sm={3} className="text-right">Foto</Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" name="foto" />
                        </Col>
                    </Form.Group>

                    <Modal.Footer className="mt-5">
                        <Button variant="secondary" onClick={props.onHide}>Fechar</Button>
                        <Button variant="danger" onClick={handleSubmit(cadastrarArmamento)}>Cadastrar</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
          </Modal>
        );
    }

    function cadastrarArmamento() {

        const data={
            classe_id: document.getElementById('classe_idArmamento').value,
            secao_id: document.getElementById('secao_idArmamento').value,
            pais_id: document.getElementById('pais_idArmamento').value,
            nome: document.getElementById('nomeArmamento').value,
            descricao: document.getElementById('descricaoArmamento').value,
            foto: document.getElementById('fotoArmamento').value,
        }

        console.log(data)

        ArmamentoService.create(data).then(results => {
          console.log(results.data)
          alert("Cadastrado com Sucesso!")
          window.location.reload(true);
        })
    }

    function deletArmamentos(id) {
        console.log(id)
        if (window.confirm('Deseja realmente excluir o registro?')) {
            ArmamentoService.delete(id).then(results => {
            //   props.history.push('/gerencia')
              window.location.reload(true);
              alert("Deletado com sucesso!")
            }).catch(error => {
                console.log(error.response.data)
                alert("Não foi possível deletar o registro.")
            })
        }
    }

    const [modalClasse, setModalClasse] = React.useState(false);

    function ModalClasse(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-classe"
            centered
          >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-classe">
                    Cadastro de Classe
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} controlId={'ladoClasse'}>
                        <Form.Label column sm={3} className="text-right">Lado <span className="text-danger">*</span></Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" name="lado" />
                            <Form.Control.Feedback type='invalid'>Campo Obrigatório</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId={'descricaoClasse'}>
                        <Form.Label column sm={3} className="text-right">Descrição <span className="text-danger">*</span></Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" name="descricao" />
                            <Form.Control.Feedback type='invalid'>Campo Obrigatório</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId={'imgClasse'}>
                        <Form.Label column sm={3} className="text-right">Imagem</Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" name="img" />
                        </Col>
                    </Form.Group>
                    <Modal.Footer className="mt-5">
                        <Button variant="secondary" onClick={props.onHide}>Fechar</Button>
                        <Button variant="danger" onClick={handleSubmit(cadastrarClasse)}>Cadastrar</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
          </Modal>
        );
    }

    function cadastrarClasse() {

        const data={
            lado: document.getElementById('ladoClasse').value,
            descricao: document.getElementById('descricaoClasse').value,
            img: document.getElementById('imgClasse').value,
        }

        ClasseService.create(data).then(results => {
          console.log(results.data)
          alert("Cadastrado com Sucesso!")
          window.location.reload(true);
        })
    }

    function deletClasses(id) {
        console.log(id)
        if (window.confirm('Deseja realmente excluir o registro?')) {
            ClasseService.delete(id).then(results => {
            //   props.history.push('/gerencia')
              window.location.reload(true);
              console.log(results.status)
              alert("Deletado com sucesso!")
            }).catch(error => {
                console.log(error.response.data)
                alert("Não foi possível deletar o registro.")
            })
        }
    }

    const [modalMapa, setModalMapa] = React.useState(false);

    function ModalMapa(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-classe"
            centered
          >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-classe">
                    Cadastro de Mapa
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} controlId={'pais_idMapa'}>
                        <Form.Label column sm={3} className="text-right">ID País <span className="text-danger">*</span></Form.Label>
                        <Col sm={9}>
                            <Form.Control type="number" name="pais_id" />
                            <Form.Control.Feedback type='invalid'>Campo Obrigatório</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId={'nomeMapa'}>
                        <Form.Label column sm={3} className="text-right">Nome <span className="text-danger">*</span></Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" name="nome" />
                            <Form.Control.Feedback type='invalid'>Campo Obrigatório</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Modal.Footer className="mt-5">
                        <Button variant="secondary" onClick={props.onHide}>Fechar</Button>
                        <Button variant="danger" onClick={handleSubmit(cadastrarMapa)}>Cadastrar</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
          </Modal>
        );
    }

    function cadastrarMapa() {

        const data={
            pais_id: parseInt(document.getElementById('pais_idMapa').value),
            nome: document.getElementById('nomeMapa').value,
        }

        console.log(data)

        MapaService.create(data).then(results => {
          console.log(results.data)
          alert("Cadastrado com Sucesso!")
          window.location.reload(true);
        })
    }

    function deletMapas(id) {
        console.log(id)
        if (window.confirm('Deseja realmente excluir o registro?')) {
            MapaService.delete(id).then(results => {
            //   props.history.push('/gerencia')
              window.location.reload(true);
              alert("Deletado com sucesso!")
            }).catch(error => {
                console.log(error.response.data)
                alert("Não foi possível deletar o registro.")
            })
        }
    }

    const [modalModo, setModalModo] = React.useState(false);

    function ModalModo(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-classe"
            centered
          >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-classe">
                    Cadastro de Modo
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} controlId={'modoModo'}>
                        <Form.Label column sm={3} className="text-right">Modo <span className="text-danger">*</span></Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" name="modo" />
                            <Form.Control.Feedback type='invalid'>Campo Obrigatório</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId={'descricaoModo'}>
                        <Form.Label column sm={3} className="text-right">Descrição <span className="text-danger">*</span></Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" name="descricao" />
                            <Form.Control.Feedback type='invalid'>Campo Obrigatório</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Modal.Footer className="mt-5">
                        <Button variant="secondary" onClick={props.onHide}>Fechar</Button>
                        <Button variant="danger" onClick={handleSubmit(cadastrarModo)}>Cadastrar</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
          </Modal>
        );
    }

    function cadastrarModo() {

        const data={
            modo: document.getElementById('modoModo').value,
            descricao: document.getElementById('descricaoModo').value,
        }

        console.log(data)

        ModoService.create(data).then(results => {
          console.log(results.data)
          alert("Cadastrado com Sucesso!")
          window.location.reload(true);
        })
    }

    function deletModos(id) {
        console.log(id)
        if (window.confirm('Deseja realmente excluir o registro?')) {
            ModoService.delete(id).then(results => {
            //   props.history.push('/gerencia')
              window.location.reload(true);
              alert("Deletado com sucesso!")
            }).catch(error => {
                console.log(error.response.data)
                alert("Não foi possível deletar o registro.")
            })
        }
    }

    const [modalPais, setModalPais] = React.useState(false);

    function ModalPais(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-classe"
            centered
          >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-classe">
                    Cadastro de Pais
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} controlId={'localPais'}>
                        <Form.Label column sm={3} className="text-right">Local <span className="text-danger">*</span></Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" name="local" />
                            <Form.Control.Feedback type='invalid'>Campo Obrigatório</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId={'bandeiraPais'}>
                        <Form.Label column sm={3} className="text-right">Bandeira</Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" name="bandeira" />
                        </Col>
                    </Form.Group>
                    <Modal.Footer className="mt-5">
                        <Button variant="secondary" onClick={props.onHide}>Fechar</Button>
                        <Button variant="danger" onClick={handleSubmit(cadastrarPais)}>Cadastrar</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
          </Modal>
        );
    }

    function cadastrarPais() {

        const data={
            local: document.getElementById('localPais').value,
            bandeira: document.getElementById('bandeiraPais').value,
        }

        console.log(data)

        PaisService.create(data).then(results => {
          console.log(results.data)
          alert("Cadastrado com Sucesso!")
          window.location.reload(true);
        })
    }

    function deletPaises(id) {
        console.log(id)
        if (window.confirm('Deseja realmente excluir o registro?')) {
            PaisService.delete(id).then(results => {
            //   props.history.push('/gerencia')
              window.location.reload(true);
              alert("Deletado com sucesso!")
            }).catch(error => {
                console.log(error.response.data)
                alert("Não foi possível deletar o registro.")
            })
        }
    }

    const [modalPersonagem, setModalPersonagem] = React.useState(false);

    function ModalPersonagem(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-classe"
            centered
          >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-classe">
                    Cadastro de Personagem
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} controlId={'pais_idPersonagem'}>
                        <Form.Label column sm={3} className="text-right">ID País <span className="text-danger">*</span></Form.Label>
                        <Col sm={9}>
                            <Form.Control type="number" name="pais" />
                            <Form.Control.Feedback type='invalid'>Campo Obrigatório</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId={'classe_idPersonagem'}>
                        <Form.Label column sm={3} className="text-right">ID Classe<span className="text-danger">*</span></Form.Label>
                        <Col sm={9}>
                            <Form.Control type="number" name="classe" />
                            <Form.Control.Feedback type='invalid'>Campo Obrigatório</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId={'nomePersonagem'}>
                        <Form.Label column sm={3} className="text-right">Nome<span className="text-danger">*</span></Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" name="nome" />
                            <Form.Control.Feedback type='invalid'>Campo Obrigatório</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId={'fotoPersonagem'}>
                        <Form.Label column sm={3} className="text-right">Foto</Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" name="foto" />
                        </Col>
                    </Form.Group>
                    <Modal.Footer className="mt-5">
                        <Button variant="secondary" onClick={props.onHide}>Fechar</Button>
                        <Button variant="danger" onClick={handleSubmit(cadastrarPersonagem)}>Cadastrar</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
          </Modal>
        );
    }

    function cadastrarPersonagem() {

        const data={
            pais_id: document.getElementById('pais_idPersonagem').value,
            classe_id: document.getElementById('classe_idPersonagem').value,
            nome: document.getElementById('nomePersonagem').value,
            foto: document.getElementById('fotoPersonagem').value,
        }

        console.log(data)

        PersonagemService.create(data).then(results => {
          console.log(results.data)
          alert("Cadastrado com Sucesso!")
          window.location.reload(true);
        })
    }

    function deletPersonagens(id) {
        console.log(id)
        if (window.confirm('Deseja realmente excluir o registro?')) {
            PersonagemService.delete(id).then(results => {
            //   props.history.push('/gerencia')
              window.location.reload(true);
              alert("Deletado com sucesso!")
            }).catch(error => {
                console.log(error.response.data)
                alert("Não foi possível deletar o registro.")
            })
        }
    }

    const [modalSecao, setModalSecao] = React.useState(false);

    function ModalSecao(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-classe"
            centered
          >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-classe">
                    Cadastro de Seção
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} controlId={'nomeSecao'}>
                        <Form.Label column sm={3} className="text-right">Nome <span className="text-danger">*</span></Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" name="nome" />
                            <Form.Control.Feedback type='invalid'>Campo Obrigatório</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId={'descricaoSecao'}>
                        <Form.Label column sm={3} className="text-right">Descrição <span className="text-danger">*</span></Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" name="descricao" />
                            <Form.Control.Feedback type='invalid'>Campo Obrigatório</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Modal.Footer className="mt-5">
                        <Button variant="secondary" onClick={props.onHide}>Fechar</Button>
                        <Button variant="danger" onClick={handleSubmit(cadastrarSecao)}>Cadastrar</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
          </Modal>
        );
    }

    function cadastrarSecao() {

        const data={
            nome: document.getElementById('nomeSecao').value,
            descricao: document.getElementById('descricaoSecao').value,
        }

        console.log(data)

        SecaoService.create(data).then(results => {
          console.log(results.data)
          alert("Cadastrado com Sucesso!")
          window.location.reload(true);
        })
    }

    function deletSecoes(id) {
        console.log(id)
        if (window.confirm('Deseja realmente excluir o registro?')) {
            SecaoService.delete(id).then(results => {
            //   props.history.push('/gerencia')
              window.location.reload(true);
              alert("Deletado com sucesso!")
            }).catch(error => {
                console.log(error.response.data)
                alert("Não foi possível deletar o registro.")
            })
        }
    }

    const [modalUsuario, setModalUsuario] = React.useState(false);

    function ModalUsuario(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-classe"
            centered
          >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-classe">
                    Cadastro de Usuário
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} controlId={'usernameUsuario'}>
                        <Form.Label column sm={3} className="text-right">Username <span className="text-danger">*</span></Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" name="username" />
                            <Form.Control.Feedback type='invalid'>Campo Obrigatório</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId={'emailUsuario'}>
                        <Form.Label column sm={3} className="text-right">E-mail <span className="text-danger">*</span></Form.Label>
                        <Col sm={9}>
                            <Form.Control type="email" name="email" />
                            <Form.Control.Feedback type='invalid'>Campo Obrigatório</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId={'passwordUsuario'}>
                        <Form.Label column sm={3} className="text-right">Senha <span className="text-danger">*</span></Form.Label>
                        <Col sm={9}>
                            <Form.Control type="password" name="password" />
                            <Form.Control.Feedback type='invalid'>Campo Obrigatório</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Modal.Footer className="mt-5">
                        <Button variant="secondary" onClick={props.onHide}>Fechar</Button>
                        <Button variant="danger" onClick={handleSubmit(cadastrarUsuario)}>Cadastrar</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
          </Modal>
        );
    }

    function cadastrarUsuario() {

        const data={
            username: document.getElementById('usernameUsuario').value,
            email: document.getElementById('emailUsuario').value,
            password: document.getElementById('passwordUsuario').value,
        }

        console.log(data)

        UsuarioService.create(data).then(results => {
          console.log(results.data)
          alert("Cadastrado com Sucesso!")
          window.location.reload(true);
        })
    }

    function deletUsers(id) {
        console.log(id)
        if (window.confirm('Deseja realmente excluir o registro?')) {
            UsuarioService.delete(id).then(results => {
            //   props.history.push('/gerencia')
              window.location.reload(true);
              alert("Deletado com sucesso!")
            }).catch(error => {
                console.log(error.response.data)
                alert("Não foi possível deletar o registro.")
            })
        }
    }
    // console.log(fotoClasse)

    return(
        <Pagina titulo="Gerencias">
            <Tabs defaultActiveKey="armamentos" className="ml-1 mb-4 justify-content-md-center mt-5" >
                <Tab eventKey="armamentos" title="Armamentos">
                    <Row>
                        <Button className="ml-1 mb-4 justify-content-md-right" variant="dark" onClick={() => setModalArmamento(true)}>Novo Armamento</Button>
                        <ModalArmamento
                            show={modalArmamento}
                            onHide={() => setModalArmamento(false)}
                        />
                        <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ID Classe</th>
                                <th>ID Seção</th>
                                <th>ID País</th>
                                <th>Nome</th>
                                <th>Foto</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {armamentos.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.classe_id}</td>
                                    <td>{item.secao_id}</td>
                                    <td>{item.pais_id}</td>
                                    <td>{item.nome}</td>
                                    <td><Image width="80" src={item.foto}/></td>
                                    <td><Image width="40" onClick={() => deletArmamentos(item.id)} src={'https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg'}/></td>
                                </tr>
                            ))}
                        </tbody>
                        </Table>
                    </Row>
                </Tab>
                <Tab eventKey="classes" title="Classes">
                    <Row>
                        <Button className="ml-1 mb-4 justify-content-md-right" variant="dark" onClick={() => setModalClasse(true)}>Nova Classe</Button>
                        <ModalClasse
                            show={modalClasse}
                            onHide={() => setModalClasse(false)}
                        />
                        <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Lado</th>
                                <th>Descrição</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {classes.map(item => (
                                
                                <tr>
                                    <td>{item.id}</td>
                                    <td><p><Image className="mr-3" width="50" src={item.img} />{item.lado}</p></td>
                                    <td>{item.descricao}</td>
                                    <td><Image width="40" onClick={() => deletClasses(item.id)} src={'https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg'}/></td>
                                </tr>
                            ))}
                        </tbody>
                        </Table>
                    </Row>
                </Tab>
                <Tab eventKey="mapas" title="Mapas">
                    <Row>
                        <Button className="ml-1 mb-4 justify-content-md-right" variant="dark" onClick={() => setModalMapa(true)}>Novo Mapa</Button>
                        <ModalMapa
                            show={modalMapa}
                            onHide={() => setModalMapa(false)}
                        />
                        <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ID País</th>
                                <th>Nome</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mapas.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.pais_id}</td>
                                    <td>{item.nome}</td>
                                    <td><Image width="40" onClick={() => deletMapas(item.id)} src={'https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg'}/></td>
                                </tr>
                            ))}
                        </tbody>
                        </Table>
                    </Row>
                </Tab>
                <Tab eventKey="modos" title="Modos">
                    <Row>
                        <Button className="ml-1 mb-4 justify-content-md-right" variant="dark" onClick={() => setModalModo(true)}>Novo Modo</Button>
                        <ModalModo
                            show={modalModo}
                            onHide={() => setModalModo(false)}
                        />
                        <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Modo</th>
                                <th>Descrição</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {modos.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.modo}</td>
                                    <td>{item.descricao}</td>
                                    <td><Image width="40" onClick={() => deletModos(item.id)} src={'https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg'}/></td>
                                </tr>
                            ))}
                        </tbody>
                        </Table>
                    </Row>
                </Tab>
                <Tab eventKey="paises" title="Países">
                    <Row>
                        <Button className="ml-1 mb-4 justify-content-md-right" variant="dark" onClick={() => setModalPais(true)}>Novo País</Button>
                        <ModalPais
                            show={modalPais}
                            onHide={() => setModalPais(false)}
                        />
                        <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Local</th>
                                <th>Bandeira</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paises.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.local}</td>
                                    <td><p><Image className="mr-3" width="50" src={item.bandeira} /></p></td>
                                    <td><Image width="40" onClick={() => deletPaises(item.id)} src={'https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg'}/></td>
                                </tr>
                            ))}
                        </tbody>
                        </Table>
                    </Row>
                </Tab>
                <Tab eventKey="personagens" title="Personagens">
                    <Row>
                        <Button className="ml-1 mb-4 justify-content-md-right" variant="dark" onClick={() => setModalPersonagem(true)}>Novo Personagem</Button>
                        <ModalPersonagem
                            show={modalPersonagem}
                            onHide={() => setModalPersonagem(false)}
                        />
                        <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ID País</th>
                                <th>ID Classe</th>
                                <th>Nome</th>
                                <th>Foto</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {personagens.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.pais_id}</td>
                                    <td>{item.classe_id}</td>
                                    <td>{item.nome}</td>
                                    <td><p><Image className="mr-3" width="100" src={item.foto} /></p></td>
                                    <td><Image width="40" onClick={() => deletPersonagens(item.id)} src={'https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg'}/></td>
                                </tr>
                            ))}
                        </tbody>
                        </Table>
                    </Row>
                </Tab>
                <Tab eventKey="secoes" title="Seções">
                    <Row>
                        <Button className="ml-1 mb-4 justify-content-md-right" variant="dark" onClick={() => setModalSecao(true)}>Novo Secao</Button>
                        <ModalSecao
                            show={modalSecao}
                            onHide={() => setModalSecao(false)}
                        />
                        <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {secoes.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.descricao}</td>
                                    <td><Image width="40" onClick={() => deletSecoes(item.id)} src={'https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg'}/></td>
                                </tr>
                            ))}
                        </tbody>
                        </Table>
                    </Row>
                </Tab>
                <Tab eventKey="usuarios" title="Usuários">
                    <Row>
                        <Button className="ml-1 mb-4 justify-content-md-right" variant="dark" onClick={() => setModalUsuario(true)}>Novo Usuario</Button>
                        <ModalUsuario
                            show={modalUsuario}
                            onHide={() => setModalUsuario(false)}
                        />
                        <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Username</th>
                                <th>E-mail</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td><Image width="40" onClick={() => deletUsers(item.id)} src={'https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg'}/></td>
                                </tr>
                            ))}
                        </tbody>
                        </Table>
                    </Row>
                </Tab>
            </Tabs>
        </Pagina>
    )
}

export default withRouter(Gerencia)