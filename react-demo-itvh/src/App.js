import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Button,
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Form,
  Nav,
  NavItem,
  NavLink,
  Table
} from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numCont: null,
      apePat: null,
      apeMat: null,
      nombre: null,
      carrera: null,
      semestre: null
    }
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Demo de Funcionalidades de Firebase + React.js en Aplicaciones Multiplataforma</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <Button color="danger">Bienvenido</Button> */}
       <Container fluid={true}>
         <Row style={{padding: 10}}>
           <Col xs="4" style={{border:1 , borderStyle:"solid", borderRadius:5}} >
             <fieldset style={{padding: 20}}>
               <legend>
                 Agregar Estudiante
               </legend>
               <Form>
               <FormGroup>
                 <Label>Numero de Control</Label>
                 <Input id="numCont"/>
               </FormGroup>
               <FormGroup>
                 <Label>Apellido Paterno</Label>
                 <Input id="apePat"/>
               </FormGroup>
               <FormGroup>
                 <Label>Apellido Materno</Label>
                 <Input id="apeMat"/>
               </FormGroup>
               <FormGroup>
                 <Label>Nombre</Label>
                 <Input id="nombre"/>
               </FormGroup>
               <FormGroup>
                 <Label>Carrera</Label>
                 <Input id="carrera"/>
               </FormGroup>
               <FormGroup>
                 <Label>Semestre</Label>
                 <Input id="semestre" />
               </FormGroup>
               <Button color="success">Registrar</Button>
             </Form>
             </fieldset>
           </Col>
           <Col>
             <h2>Lista de Estudiantes</h2>
             <Nav tabs>
               <NavItem>
                 <NavLink href="#" active>Estudiantes</NavLink>
               </NavItem>
             </Nav>
             <Table striped>
               <thead>
                 <tr>
                   <th>No. Control</th>
                   <th>Apellido Paterno</th>
                   <th>Apellido Materno</th>
                   <th>Nombre</th>
                   <th>Carrera</th>
                   <th>Semestre</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <th scope="row">13301053</th>
                   <td>Rivera</td>
                   <td>Diaz</td>
                   <td>Hugo Alberto</td>
                   <td>Ing.Sistemas Computacionales</td>
                   <td>10</td>
                 </tr>
               </tbody>
             </Table>
           </Col>
         </Row>
       </Container>
      </div>
    );
  }
}

export default App;
