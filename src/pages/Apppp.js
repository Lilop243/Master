// import React from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   Table,
//   Button,
//   Container,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   FormGroup,
//   ModalFooter,
// } from "reactstrap";

// const data = [
//   { id: 1, pelicula: "Titanic", categoria: "Ficción" },
//   { id: 2, pelicula: "Piratas del Caribe", categoria: "Fantasia" },
//   { id: 3, pelicula: "Sherek", categoria: "Fantasia" },

// ];

// class Apppp extends React.Component {
//   state = {
//     data: data,
//     modalActualizar: false,
//     modalInsertar: false,
//     form: {
//       id: "",
//       pelicula: "",
//       categoria: "",
//     },
//   };

//   mostrarModalActualizar = (dato) => {
//     this.setState({
//       form: dato,
//       modalActualizar: true,
//     });
//   };

//   cerrarModalActualizar = () => {
//     this.setState({ modalActualizar: false });
//   };

//   mostrarModalInsertar = () => {
//     this.setState({
//       modalInsertar: true,
//     });
//   };

//   cerrarModalInsertar = () => {
//     this.setState({ modalInsertar: false });
//   };

//   editar = (dato) => {
//     var contador = 0;
//     var arreglo = this.state.data;
//     arreglo.map((registro) => {
//       if (dato.id == registro.id) {
//         arreglo[contador].pelicula = dato.pelicula;
//         arreglo[contador].categoria = dato.categoria;
//       }
//       contador++;
//     });
//     this.setState({ data: arreglo, modalActualizar: false });
//   };

//   eliminar = (dato) => {
//     var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
//     if (opcion == true) {
//       var contador = 0;
//       var arreglo = this.state.data;
//       arreglo.map((registro) => {
//         if (dato.id == registro.id) {
//           arreglo.splice(contador, 1);
//         }
//         contador++;
//       });
//       this.setState({ data: arreglo, modalActualizar: false });
//     }
//   };

//   insertar= ()=>{
//     var valorNuevo= {...this.state.form};
//     valorNuevo.id=this.state.data.length+1;
//     var lista= this.state.data;
//     lista.push(valorNuevo);
//     this.setState({ modalInsertar: false, data: lista });
//   }

//   handleChange = (e) => {
//     this.setState({
//       form: {
//         ...this.state.form,
//         [e.target.name]: e.target.value,
//       },
//     });
//   };

//   render() {
    
//     return (
//       <>
//         <Container>
//         <br />
//           <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
//           <br />
//           <br />
//           <Table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>pelicula</th>
//                 <th>categoria</th>
//                 <th>Acción</th>
//               </tr>
//             </thead>

//             <tbody>
//               {this.state.data.map((dato) => (
//                 <tr key={dato.id}>
//                   <td>{dato.id}</td>
//                   <td>{dato.pelicula}</td>
//                   <td>{dato.categoria}</td>
//                   <td>
//                     <Button
//                       color="primary"
//                       onClick={() => this.mostrarModalActualizar(dato)}
//                     >
//                       Editar
//                     </Button>{" "}
//                     <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </Container>

//         <Modal isOpen={this.state.modalActualizar}>
//           <ModalHeader>
//            <div><h3>Editar Registro</h3></div>
//           </ModalHeader>

//           <ModalBody>
//             <FormGroup>
//               <label>
//                Id:
//               </label>
            
//               <input
//                 className="form-control"
//                 readOnly
//                 type="text"
//                 value={this.state.form.id}
//               />
//             </FormGroup>
            
//             <FormGroup>
//               <label>
//                 pelicula: 
//               </label>
//               <input
//                 className="form-control"
//                 name="pelicula"
//                 type="text"
//                 onChange={this.handleChange}
//                 value={this.state.form.pelicula}
//               />
//             </FormGroup>
            
//             <FormGroup>
//               <label>
//                 categoria: 
//               </label>
//               <input
//                 className="form-control"
//                 name="categoria"
//                 type="text"
//                 onChange={this.handleChange}
//                 value={this.state.form.categoria}
//               />
//             </FormGroup>
//           </ModalBody>

//           <ModalFooter>
//             <Button
//               color="primary"
//               onClick={() => this.editar(this.state.form)}
//             >
//               Editar
//             </Button>
//             <Button
//               color="danger"
//               onClick={() => this.cerrarModalActualizar()}
//             >
//               Cancelar
//             </Button>
//           </ModalFooter>
//         </Modal>



//         <Modal isOpen={this.state.modalInsertar}>
//           <ModalHeader>
//            <div><h3>Insertar pelicula</h3></div>
//           </ModalHeader>

//           <ModalBody>
//             <FormGroup>
//               <label>
//                 Id: 
//               </label>
              
//               <input
//                 className="form-control"
//                 readOnly
//                 type="text"
//                 value={this.state.data.length+1}
//               />
//             </FormGroup>
            
//             <FormGroup>
//               <label>
//                 pelicula: 
//               </label>
//               <input
//                 className="form-control"
//                 name="pelicula"
//                 type="text"
//                 onChange={this.handleChange}
//               />
//             </FormGroup>
            
//             <FormGroup>
//               <label>
//                 categoria: 
//               </label>
//               <input
//                 className="form-control"
//                 name="categoria"
//                 type="text"
//                 onChange={this.handleChange}
//               />
//             </FormGroup>
//           </ModalBody>

//           <ModalFooter>
//             <Button
//               color="primary"
//               onClick={() => this.insertar()}
//             >
//               Insertar
//             </Button>
//             <Button
//               className="btn btn-danger"
//               onClick={() => this.cerrarModalInsertar()}
//             >
//               Cancelar
//             </Button>
//           </ModalFooter>
//         </Modal>
//       </>
//     );
//   }
// }
// export default Apppp;
