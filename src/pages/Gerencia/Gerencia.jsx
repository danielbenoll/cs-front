import React, { useEffect, useState } from 'react';
import { Button, Form, Image, Modal, Row, Tab, Table, Tabs } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import Input from '../../components/forms/Input';
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
import UsuarioValidator from '../../validator/UsuarioValidator';
import ArmamentoValidator from '../../validator/ArmamentoValidator';
import ClasseValidator from '../../validator/ClasseValidator';
import MapaValidator from '../../validator/MapaValidator';
import ModoValidator from '../../validator/ModoValidator';
import PaisValidator from '../../validator/PaisValidator';
import PersonagemValidator from '../../validator/PersonagemValidator';
import SecaoValidator from '../../validator/SecaoValidator';
import Select from '../../components/forms/Select';
import FotoValidator from '../../validator/FotoValidator';
import FotoService from '../../services/FotoService';
import MapaModoValidator from '../../validator/MapaModoValidator';
import MapaModoService from '../../services/MapaModoService';

const Gerencia = (props) => {

    const { register, handleSubmit, errors } = useForm()
    
    let validator

    let referenceArmamento
    if(ArmamentoValidator){
        validator = ArmamentoValidator
        referenceArmamento = { register, validator, errors }
    }

    let referenceClasse
    if(ClasseValidator){
        validator = ClasseValidator
        referenceClasse = { register, validator, errors }
    }

    let referenceFoto
    if(FotoValidator){
        validator = FotoValidator
        referenceFoto = { register, validator, errors }
    }

    let referenceMapa
    if(MapaValidator){
        validator = MapaValidator
        referenceMapa = { register, validator, errors }
    }

    let referenceModo
    if(ModoValidator){
        validator = ModoValidator
        referenceModo = { register, validator, errors }
    }

    let referenceMapaModo
    if(MapaModoValidator){
        validator = MapaModoValidator
        referenceMapaModo = { register, validator, errors }
    }

    let referencePais
    if(PaisValidator){
        validator = PaisValidator
        referencePais = { register, validator, errors }
    }

    let referencePersonagem
    if(PersonagemValidator){
        validator = PersonagemValidator
        referencePersonagem = { register, validator, errors }
    }

    let referenceSecao
    if(SecaoValidator){
        validator = SecaoValidator
        referenceSecao = { register, validator, errors }
    }

    let referenceUsuario
    if(UsuarioValidator){
        validator = UsuarioValidator
        referenceUsuario = { register, validator, errors }
    }

    const [dados, setDados] = useState({})

    const [armamentos, setArmamentos] = useState([])
    const [classes, setClasses] = useState([])
    const [fotos, setFotos] = useState([])
    const [mapas, setMapas] = useState([])
    const [modos, setModos] = useState([])
    const [mapaModos, setMapaModos] = useState([])
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
        csApi.get('/fotos?qtd=60').then(results => {
            setFotos(results.data.data)
        })
        csApi.get('/mapas?qtd=30').then(results => {
            setMapas(results.data.data)
        })
        csApi.get('/modos').then(results => {
            setModos(results.data.data)
        })
        csApi.get('/mapa-modos?qtd=60').then(results => {
            setMapaModos(results.data.data)
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
    
    }, [props])

    // console.log(mapaModos)

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
                    <Select label="ID Classe" name="classe_id" referencia={referenceArmamento} lista={classes} chave="id" description="lado"/>
                    <Select label="ID Seção" name="secao_id" referencia={referenceArmamento} lista={secoes} chave="id" description="nome"/>
                    <Select label="ID País" name="pais_id" referencia={referenceArmamento} lista={paises} chave="id" description="local"/>
                    <Input label="Nome" name="nome" valor={dados.nome} referencia={referenceArmamento}/>
                    <Input label="Descrição" name="descricao" valor={dados.descricao} referencia={referenceArmamento}/>
                    <Input label="Foto" name="foto" valor={dados.foto} referencia={referenceArmamento}/>
                    <Modal.Footer className="mt-5">
                        <Button variant="secondary" onClick={props.onHide}>Fechar</Button>
                        <Button variant="danger" onClick={handleSubmit(cadastrarArmamento)}>Salvar</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
          </Modal>
        );
    }

    function cadastrarArmamento(data) {
        console.log(data)
        console.log(dados)

        const resultado = dados.id ? ArmamentoService.update(dados.id, data) : ArmamentoService.create(data)

        resultado.then(results => {
            console.log(results.data)
            alert("Ação realizada com Sucesso!")
            window.location.reload(true);
        })

    }

    const editArmamento = (cod) =>(
        ArmamentoService.get(cod).then(results=>{
            setDados(results.data)
            console.log(results.data)
            setModalArmamento(true)
        })
    )

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
                    <Input label="Lado" name="lado" valor={dados.lado} referencia={referenceClasse}/>
                    <Input label="Descrição" name="descricao" valor={dados.descricao} referencia={referenceClasse}/>
                    <Input label="Imagem" name="img" valor={dados.img} referencia={referenceClasse}/>
                    <Modal.Footer className="mt-5">
                        <Button variant="secondary" onClick={props.onHide}>Fechar</Button>
                        <Button variant="danger" onClick={handleSubmit(cadastrarClasse)}>Salvar</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
          </Modal>
        );
    }

    function cadastrarClasse(data) {
        console.log(data)

        const resultado = dados.id ? ClasseService.update(dados.id, data) : ClasseService.create(data)

        resultado.then(results => {
            console.log(results.data)
            alert("Ação realizada com Sucesso!")
            window.location.reload(true);
        })
    }

    const editClasse = (cod) =>(
        ClasseService.get(cod).then(results=>{
            setDados(results.data)
            console.log(results.data)
            setModalClasse(true)
        })
    )

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

    const [modalFoto, setModalFoto] = React.useState(false);

    function ModalFoto(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-classe"
            centered
          >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-classe">
                    Cadastro de Foto
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Select label="ID Mapa" name="mapa_id" referencia={referenceArmamento} lista={mapas} chave="id" description="nome"/>
                    <Input label="Foto" name="foto" valor={dados.foto} referencia={referenceFoto}/>
                    <Modal.Footer className="mt-5">
                        <Button variant="secondary" onClick={props.onHide}>Fechar</Button>
                        <Button variant="danger" onClick={handleSubmit(cadastrarFoto)}>Salvar</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
          </Modal>
        );
    }

    function cadastrarFoto(data) {
        console.log(data)

        const resultado = dados.id ? FotoService.update(dados.id, data) : FotoService.create(data)

        resultado.then(results => {
            console.log(results.data)
            alert("Ação realizada com Sucesso!")
            window.location.reload(true);
        })
    }

    const editFoto = (cod) =>(
        FotoService.get(cod).then(results=>{
            setDados(results.data)
            console.log(results.data)
            setModalFoto(true)
        })
    )

    function deletFotos(id) {
        console.log(id)
        if (window.confirm('Deseja realmente excluir o registro?')) {
            FotoService.delete(id).then(results => {
            //   props.history.push('/gerencia')
              window.location.reload(true);
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
                    <Select label="ID País" name="pais_id" referencia={referenceMapa} lista={paises} chave="id" description="local"/>
                    <Input label="Nome" name="nome" valor={dados.nome} referencia={referenceMapa}/>
                    <Modal.Footer className="mt-5">
                        <Button variant="secondary" onClick={props.onHide}>Fechar</Button>
                        <Button variant="danger" onClick={handleSubmit(cadastrarMapa)}>Salvar</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
          </Modal>
        );
    }

    function cadastrarMapa(data) {
        console.log(data)

        const resultado = dados.id ? MapaService.update(dados.id, data) : MapaService.create(data)

        resultado.then(results => {
            console.log(results.data)
            alert("Ação realizada com Sucesso!")
            window.location.reload(true);
        })
    }

    const editMapa = (cod) =>(
        MapaService.get(cod).then(results=>{
            setDados(results.data)
            console.log(results.data)
            setModalMapa(true)
        })
    )

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
                    <Input label="Modo" name="modo" valor={dados.modo} referencia={referenceModo}/>
                    <Input label="Descrição" name="descricao" valor={dados.descricao} referencia={referenceModo}/>
                    <Modal.Footer className="mt-5">
                        <Button variant="secondary" onClick={props.onHide}>Fechar</Button>
                        <Button variant="danger" onClick={handleSubmit(cadastrarModo)}>Salvar</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
          </Modal>
        );
    }

    function cadastrarModo(data) {
        console.log(data)

        const resultado = dados.id ? ModoService.update(dados.id, data) : ModoService.create(data)

        resultado.then(results => {
            console.log(results.data)
            alert("Ação realizada com Sucesso!")
            window.location.reload(true);
        })
    }

    const editModo = (cod) =>(
        ModoService.get(cod).then(results=>{
            setDados(results.data)
            console.log(results.data)
            setModalModo(true)
        })
    )

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

    const [modalMapaModo, setModalMapaModo] = React.useState(false);

    function ModalMapaModo(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-classe"
            centered
          >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-classe">
                    Cadastro de MapaModo
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Select label="ID Mapa" name="mapa_id" referencia={referenceMapaModo} lista={mapas} chave="id" description="nome"/>
                    <Select label="ID Modo" name="modo_id" referencia={referenceMapaModo} lista={modos} chave="id" description="modo"/>
                    <Modal.Footer className="mt-5">
                        <Button variant="secondary" onClick={props.onHide}>Fechar</Button>
                        <Button variant="danger" onClick={handleSubmit(cadastrarMapaModo)}>Salvar</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
          </Modal>
        );
    }

    function cadastrarMapaModo(data) {
        console.log(data)

        const resultado = dados.id ? MapaModoService.update(dados.id, data) : MapaModoService.create(data)

        resultado.then(results => {
            console.log(results.data)
            alert("Ação realizada com Sucesso!")
            window.location.reload(true);
        })
    }

    const editMapaModo = (cod) =>(
        MapaModoService.get(cod).then(results=>{
            setDados(results.data)
            console.log(results.data)
            setModalMapaModo(true)
        })
    )

    function deletMapaModos(id) {
        console.log(id)
        if (window.confirm('Deseja realmente excluir o registro?')) {
            MapaModoService.delete(id).then(results => {
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
                    <Input label="Local" name="local" valor={dados.local} referencia={referencePais}/>
                    <Input label="Bandeira" name="bandeira" valor={dados.bandeira} referencia={referencePais}/>
                    <Modal.Footer className="mt-5">
                        <Button variant="secondary" onClick={props.onHide}>Fechar</Button>
                        <Button variant="danger" onClick={handleSubmit(cadastrarPais)}>Salvar</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
          </Modal>
        );
    }

    function cadastrarPais(data) {
        console.log(data)

        const resultado = dados.id ? PaisService.update(dados.id, data) : PaisService.create(data)

        resultado.then(results => {
            console.log(results.data)
            alert("Ação realizada com Sucesso!")
            window.location.reload(true);
        })
    }

    const editPais = (cod) =>(
        PaisService.get(cod).then(results=>{
            setDados(results.data)
            console.log(results.data)
            setModalPais(true)
        })
    )

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
                    <Select label="ID País" name="pais_id" referencia={referencePersonagem} lista={paises} chave="id" description="local"/>
                    <Select label="ID Classe" name="classe_id" referencia={referencePersonagem} lista={classes} chave="id" description="lado"/>
                    <Input label="Nome" name="nome" valor={dados.nome} referencia={referencePersonagem}/>
                    <Input label="Foto" name="foto" valor={dados.foto} referencia={referencePersonagem}/>
                    <Modal.Footer className="mt-5">
                        <Button variant="secondary" onClick={props.onHide}>Fechar</Button>
                        <Button variant="danger" onClick={handleSubmit(cadastrarPersonagem)}>Salvar</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
          </Modal>
        );
    }

    function cadastrarPersonagem(data) {
        console.log(data)

        const resultado = dados.id ? PersonagemService.update(dados.id, data) : PersonagemService.create(data)

        resultado.then(results => {
            console.log(results.data)
            alert("Ação realizada com Sucesso!")
            window.location.reload(true);
        })
    }

    const editPersonagem = (cod) =>(
        PersonagemService.get(cod).then(results=>{
            setDados(results.data)
            console.log(results.data)
            setModalPersonagem(true)
        })
    )

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
                    <Input label="Nome" name="nome" valor={dados.nome} referencia={referenceSecao}/>
                    <Input label="Descricao" name="descricao" valor={dados.descricao} referencia={referenceSecao}/>
                    <Modal.Footer className="mt-5">
                        <Button variant="secondary" onClick={props.onHide}>Fechar</Button>
                        <Button variant="danger" onClick={handleSubmit(cadastrarSecao)}>Salvar</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
          </Modal>
        );
    }

    function cadastrarSecao(data) {
        console.log(data)

        const resultado = dados.id ? SecaoService.update(dados.id, data) : SecaoService.create(data)

        resultado.then(results => {
            console.log(results.data)
            alert("Ação realizada com Sucesso!")
            window.location.reload(true);
        })
    }

    const editSecao = (cod) =>(
        SecaoService.get(cod).then(results=>{
            setDados(results.data)
            console.log(results.data)
            setModalSecao(true)
        })
    )

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
                    <Input label="Nome" name="username" valor={dados.username} referencia={referenceUsuario}/>
                    <Input label="E-mail" name="email" valor={dados.email} referencia={referenceUsuario} type="email"/>
                    <Input label="Senha" name="password" valor={dados.password} referencia={referenceUsuario} type="password"/>
                    <Modal.Footer className="mt-5">
                        <Button variant="secondary" onClick={props.onHide}>Fechar</Button>
                        <Button variant="danger" onClick={handleSubmit(cadastrarUsuario)}>Salvar</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
          </Modal>
        );
    }

    function cadastrarUsuario(data) {
        console.log(data)

        const resultado = dados.id ? UsuarioService.update(dados.id, data) : UsuarioService.create(data)

        resultado.then(results => {
            console.log(results.data)
            alert("Ação realizada com Sucesso!")
            window.location.reload(true);
        })
    }

    const editUsuario = (cod) =>(
        UsuarioService.get(cod).then(results=>{
            setDados(results.data)
            console.log(results.data)
            setModalUsuario(true)
        })
    )

    function deletUsuario(id) {
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
                                <th>Descrição</th>
                                <th>Foto</th>
                                <th style={{width:150}}>Ações</th>
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
                                    <td>{item.descricao}</td>
                                    <td><Image width="80" src={item.foto}/></td>
                                    <td><Image width="40" onClick={() => editArmamento(item.id)} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png'}/><Image className="ml-3" width="40" onClick={() => deletArmamentos(item.id)} src={'https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg'}/></td>
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
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {classes.map(item => (
                                
                                <tr>
                                    <td>{item.id}</td>
                                    <td><p><Image className="mr-3" width="50" src={item.img} />{item.lado}</p></td>
                                    <td>{item.descricao}</td>
                                    <td><Image width="40" onClick={() => editClasse(item.id)} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png'}/><Image className="ml-3" width="40" onClick={() => deletClasses(item.id)} src={'https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg'}/></td>
                                </tr>
                            ))}
                        </tbody>
                        </Table>
                    </Row>
                </Tab>
                <Tab eventKey="fotos" title="Fotos">
                    <Row>
                        <Button className="ml-1 mb-4 justify-content-md-right" variant="dark" onClick={() => setModalFoto(true)}>Nova Foto</Button>
                        <ModalFoto
                            show={modalFoto}
                            onHide={() => setModalFoto(false)}
                        />
                        <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ID Mapa</th>
                                <th>Foto</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fotos.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.mapa_id}</td>
                                    <td><p><Image className="mr-3" width="200" src={item.foto} /></p></td>
                                    <td><Image width="40" onClick={() => editFoto(item.id)} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png'}/><Image className="ml-3" width="40" onClick={() => deletFotos(item.id)} src={'https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg'}/></td>
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
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mapas.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.pais_id}</td>
                                    <td>{item.nome}</td>
                                    <td><Image width="40" onClick={() => editMapa(item.id)} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png'}/><Image className="ml-3" width="40" onClick={() => deletMapas(item.id)} src={'https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg'}/></td>
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
                                <th style={{width:150}}>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {modos.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.modo}</td>
                                    <td>{item.descricao}</td>
                                    <td><Image width="40" onClick={() => editModo(item.id)} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png'}/><Image className="ml-3" width="40" onClick={() => deletModos(item.id)} src={'https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg'}/></td>
                                </tr>
                            ))}
                        </tbody>
                        </Table>
                    </Row>
                </Tab>
                <Tab eventKey="mapaModos" title="Modos de Mapas">
                    <Row>
                        <Button className="ml-1 mb-4 justify-content-md-right" variant="dark" onClick={() => setModalMapaModo(true)}>Novo Modos de Mapas</Button>
                        <ModalMapaModo
                            show={modalMapaModo}
                            onHide={() => setModalMapaModo(false)}
                        />
                        <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ID Mapa</th>
                                <th>ID Modo</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mapaModos.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.mapa_id}</td>
                                    <td>{item.modo_id}</td>
                                    <td><Image width="40" onClick={() => editMapaModo(item.id)} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png'}/><Image className="ml-3" width="40" onClick={() => deletMapaModos(item.id)} src={'https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg'}/></td>
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
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paises.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.local}</td>
                                    <td><p><Image className="mr-3" width="50" src={item.bandeira} /></p></td>
                                    <td><Image width="40" onClick={() => editPais(item.id)} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png'}/><Image className="ml-3" width="40" onClick={() => deletPaises(item.id)} src={'https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg'}/></td>
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
                                <th>Ações</th>
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
                                    <td><Image width="40" onClick={() => editPersonagem(item.id)} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png'}/><Image className="ml-3" width="40" onClick={() => deletPersonagens(item.id)} src={'https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg'}/></td>
                                </tr>
                            ))}
                        </tbody>
                        </Table>
                    </Row>
                </Tab>
                <Tab eventKey="secoes" title="Seções">
                    <Row>
                        <Button className="ml-1 mb-4 justify-content-md-right" variant="dark" onClick={() => setModalSecao(true)}>Nova Seção</Button>
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
                                <th style={{width:150}}>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {secoes.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.descricao}</td>
                                    <td><Image width="40" onClick={() => editSecao(item.id)} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png'}/><Image className="ml-3" width="40" onClick={() => deletSecoes(item.id)} src={'https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg'}/></td>
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
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td><Image width="40" onClick={() => editUsuario(item.id)} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png'}/><Image className="ml-3" width="40" onClick={() => deletUsuario(item.id)} src={'https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg'}/></td>
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