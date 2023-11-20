
import "bootstrap/dist/css/bootstrap.min.css";
import {Table, Button, Modal, ModalBody,ModalHeader,FormGroup,ModalFooter} from "reactstrap";
import {useEffect, useState} from "react";
import "./app3.css";
import {datos} from "./data.js";
import { useFetcher } from "react-router-dom";

export function App3() {

  const [data, setData] = useState([]);
  const [mostrarmodal, setMostrarmodal] = useState(false);
  const [mostrarmodaleditar, setMostrarmodaleditar] = useState(false);
  const [campos, setCampos] = useState({id: "", nombre: "", descripcion: "", source: ""});
  
  useEffect(() => {
    setData(datos);
  }, []);
 


  const llenarcampos = (e) => {
    switch (e.target.name) {
      case "nombre":
        setCampos({ ...campos, nombre: e.target.value, id: data.length + 1 });
        break;

      case "descripcion":
        setCampos({ ...campos, descripcion: e.target.value, id: data.length + 1 });
        break;

      case "imagen":
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.addEventListener("load", (direct) => {
          const mostrarimagen= document.getElementById('imss');
          mostrarimagen.src=direct.currentTarget.result;
          setCampos({
            ...campos,
            source: direct.currentTarget.result,
            id: data.length + 1,
          });
        });
        break;
    }
  };
  
  
  const editarcampos = (e) => {
    switch (e.target.name) {
      case "nombre":
        setCampos({ ...campos, nombre: e.target.value });
        break;

      case "descripcion":
        setCampos({ ...campos, descripcion: e.target.value });
        break;

      case "imagen":
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.addEventListener("load", (direct) => {
          console.log(direct.currentTarget.result);
          setCampos({ ...campos, source: direct.currentTarget.result });
        });
        break;
    }
  };

  const modalabrir = () => {
    setMostrarmodal(true);
  };

  const modalcerrar = () => {
    setMostrarmodal(false);
  };

  const modaleditarabrir = (dattas) => {
    setCampos(dattas);
    setMostrarmodaleditar(true);
  };

  const modaleditarcerrar = () => {
    setMostrarmodaleditar(false);
  };

  const insertar = () => {
    setData([...data, campos]);
    setMostrarmodal(false);
  };

  const insertareditar = () => {
    const newdato = data.map((dat) => {
      if (dat.id === campos.id) {
        return {
          ...dat,
          nombre: campos.nombre,
          apellido: campos.apellido,
          source: campos.source,
        };
      }

      return dat;
    });

    setData(newdato);

    setMostrarmodaleditar(false);
  };

  const eliminar = (dattas) => {
    console.log(dattas);
    const hola = data.filter((dat) => dat.id !== dattas.id);
    setData(hola);
    console.log(hola);

    const nueva = hola.map((res, ind) => {
      return { ...res, id: ind + 1 };
    });
    setData(nueva);
  };

  return (
    <div className="bodt">

      <Button color="primary" onClick={(e) => modalabrir()}>
        insertar nuevo
      </Button>

      <Table className="movile">
        <thead>
          <tr>
            <th>id</th>
            <th>imagen</th>
            <th>nombre</th>
            <th>descripcion</th>
            <th>funciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((datas) => {
            return (
              <tr key={datas.id}>
                <td>{datas.id}</td>
                <td>
                  <img className="holamundo" src={datas.source} />
                </td>
                <td>{datas.nombre}</td>
                <td>{datas.descripcion}</td>

                <td>
                  <Button
                    className="botu"
                    onClick={(e) => modaleditarabrir(datas)}
                    color="primary"
                  >
                    editar
                  </Button>{" "}
                  <Button
                    className="botu"
                    onClick={(e) => eliminar(datas)}
                    color="danger"
                  >
                    eliminar
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Table className="tabletanddesktop">
        <tbody>
          {data.map((datas) => {
            return (
              <tr key={datas.id}>
                <td>id: {datas.id}</td>
                <td>
                  imagen: <img className="holamundo" src={datas.source} />
                </td>
                <td>nombre: {datas.nombre}</td>
                <td>descripcion: {datas.descripcion}</td>

                <td>
                  <p className="botorprueba">funciones:</p>{" "}
                  <Button
                    onClick={(e) => modaleditarabrir(datas)}
                    color="primary"
                  >
                    editar
                  </Button>{" "}
                  <Button onClick={(e) => eliminar(datas)} color="danger">
                    eliminar
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Modal isOpen={mostrarmodal}>
        <ModalHeader></ModalHeader>
        <ModalBody>
          <FormGroup>
            <label>imagen:</label>
            <input
              type="file"
              className="form-control"
              name="imagen"
              onChange={llenarcampos}
            />
          </FormGroup>
          <img id='imss' className="imaima" src=''/>
          <FormGroup>
            <label>id:</label>
            <input
              type="text"
              className="form-control"
              readOnly
              value={data.length + 1}
            />
          </FormGroup>
          <FormGroup>
            <label>nombre:</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              onChange={llenarcampos}
            />
          </FormGroup>
          <FormGroup>
            <label>descripcion:</label>
            <input
              type="text"
              className="form-control"
              name="descripcion"
              onChange={llenarcampos}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={(e) => insertar()}>
            insertar
          </Button>
          <Button onClick={(e) => modalcerrar()} color="danger">
            cancelar
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={mostrarmodaleditar}>
        <ModalHeader></ModalHeader>
        <ModalBody>
          <FormGroup>
            <label>imagen:</label>
            <input
              type="file"
              className="form-control"
              name="imagen"
              onChange={editarcampos}
            />

            <img className="imaima" src={campos.source} />
          </FormGroup>

          <FormGroup>
            <label>id:</label>
            <input
              type="text"
              className="form-control"
              readOnly
              value={campos.id}
            />
          </FormGroup>

          <FormGroup>
            <label>nombre:</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              onChange={(e) => editarcampos(e)}
              value={campos.nombre}
            />
          </FormGroup>

          <FormGroup>
            <label>descripcion:</label>
            <input
              type="text"
              className="form-control"
              name="descripcion"
              onChange={(e) => editarcampos(e)}
              value={campos.descripcion}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={(e) => insertareditar()}>
            insertar
          </Button>
          <Button onClick={(e) => modaleditarcerrar()} color="danger">
            cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
